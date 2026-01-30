import React, { useEffect, useState, useRef } from 'react';
import './Preloader.css';
import productImg from '../../images/product/1.png';

const MESSAGE = "Welcome To Divya Industries. Delivering premium-quality products with a commitment to purity, freshness, and trust.";

const Preloader = () => {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState('');
  const [audioBlocked, setAudioBlocked] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const utteranceRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const voiceRef = useRef(null);
  const audioCtxRef = useRef(null);
  const typeGainRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forceShow = params.get('showPreloader') === '1' || params.get('resetPreloader') === '1';
    const shown = sessionStorage.getItem('divya_preloader_shown');
    if (shown && !forceShow) return; // already shown and not forced

    setVisible(true);

    // prepare audio context for small typing sounds (best-effort)
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC && !audioCtxRef.current) {
        audioCtxRef.current = new AC();
        const gain = audioCtxRef.current.createGain();
        gain.gain.value = 0.12;
        gain.connect(audioCtxRef.current.destination);
        typeGainRef.current = gain;
      }
    } catch (e) {}

    // typing effect + tiny click per char
    let i = 0;
    typingIntervalRef.current = setInterval(() => {
      i += 1;
      setTyped(MESSAGE.slice(0, i));
      // play small click sound
      try {
        const ctx = audioCtxRef.current;
        if (ctx && typeGainRef.current) {
          if (ctx.state === 'suspended') ctx.resume().catch(() => {});
          const o = ctx.createOscillator();
          o.type = 'square';
          o.frequency.value = 1200;
          o.connect(typeGainRef.current);
          o.start();
          o.stop(ctx.currentTime + 0.03);
        }
      } catch (e) {}

      if (i >= MESSAGE.length) {
        clearInterval(typingIntervalRef.current);
      }
    }, 40);

    // fallback hide in case TTS doesn't fire onend
    hideTimeoutRef.current = setTimeout(() => {
      sessionStorage.setItem('divya_preloader_shown', '1');
      setVisible(false);
    }, MESSAGE.length * 40 + 5000);

    // attempt TTS
    if ('speechSynthesis' in window) {
      const speakNow = async () => {
        try {
          // try to prime audio hardware
          try {
            const AC = window.AudioContext || window.webkitAudioContext;
            if (AC) {
              const ctx = audioCtxRef.current || new AC();
              if (ctx.state === 'suspended') await ctx.resume();
              // play tiny silent buffer to unlock on some browsers
              try {
                const buffer = ctx.createBuffer(1, 1, 22050);
                const src = ctx.createBufferSource();
                src.buffer = buffer;
                src.connect(ctx.destination);
                src.start(0);
              } catch (e) {}
            }
          } catch (e) {}

          const utter = new SpeechSynthesisUtterance(MESSAGE);
          utter.rate = 0.95;
          utter.pitch = 1;
          utter.volume = 1;
          utter.onstart = () => { setSpeaking(true); setAudioBlocked(false); };
          utter.onend = () => {
            sessionStorage.setItem('divya_preloader_shown', '1');
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
            setTimeout(() => setVisible(false), 300);
          };
          utteranceRef.current = utter;

          const speakWithVoice = () => {
            try {
              const voices = window.speechSynthesis.getVoices();
              if (voices && voices.length > 0) {
                const v = voices.find(vv => /en/i.test(vv.lang)) || voices[0];
                voiceRef.current = v;
                try { utter.voice = v; } catch (e) {}
              }
            } catch (e) {}
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utter);
          };

          const voicesNow = window.speechSynthesis.getVoices();
          if (!voicesNow || voicesNow.length === 0) {
            window.speechSynthesis.onvoiceschanged = () => speakWithVoice();
            speakWithVoice();
          } else {
            speakWithVoice();
          }
        } catch (err) {
          // autoplay blocked: show prompt and attach gesture fallback
          console.warn('Preloader: autoplay/TTS error', err);
          setAudioBlocked(true);
          const gesture = () => { enableAudioGesture(); document.removeEventListener('click', gesture); document.removeEventListener('touchstart', gesture); document.removeEventListener('keydown', gesture); };
          document.addEventListener('click', gesture);
          document.addEventListener('touchstart', gesture);
          document.addEventListener('keydown', gesture);
          // extend hide time so user can interact
          if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
          hideTimeoutRef.current = setTimeout(() => {
            sessionStorage.setItem('divya_preloader_shown', '1');
            setVisible(false);
          }, 12000);
        }
      };
      speakNow();
    } else {
      // no TTS available — already have typing; hide after typing completes
      const hideAfter = setTimeout(() => {
        sessionStorage.setItem('divya_preloader_shown', '1');
        setVisible(false);
      }, MESSAGE.length * 40 + 800);
      return () => clearTimeout(hideAfter);
    }

    // always add a global one-time gesture to enable audio if user interacts anywhere
    const globalGesture = () => { enableAudioGesture(); document.removeEventListener('click', globalGesture); document.removeEventListener('touchstart', globalGesture); document.removeEventListener('keydown', globalGesture); };
    document.addEventListener('click', globalGesture);
    document.addEventListener('touchstart', globalGesture);
    document.addEventListener('keydown', globalGesture);

    return () => {
      clearInterval(typingIntervalRef.current);
      if (utteranceRef.current) window.speechSynthesis.cancel();
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      try { if (audioCtxRef.current) audioCtxRef.current.close(); } catch (e) {}
      document.removeEventListener('click', globalGesture);
      document.removeEventListener('touchstart', globalGesture);
      document.removeEventListener('keydown', globalGesture);
    };
  }, []);

  const enableAudioGesture = () => {
    setAudioBlocked(false);
    try {
      try { if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume(); } catch(e) {}
      const u = new SpeechSynthesisUtterance(MESSAGE);
      u.onstart = () => { setSpeaking(true); setAudioBlocked(false); };
      u.rate = 0.95; u.pitch = 1; u.volume = 1;
      u.onend = () => {
        sessionStorage.setItem('divya_preloader_shown', '1');
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        setTimeout(() => setVisible(false), 300);
      };
      // pick voice
      try {
        const voices = window.speechSynthesis.getVoices();
        const v = voiceRef.current || (voices && voices.find(vv => /en/i.test(vv.lang))) || (voices && voices[0]);
        if (v) try { u.voice = v; } catch (e) {}
      } catch (e) {}
      utteranceRef.current = u;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) {}
  };

  const skipPreloader = () => {
    sessionStorage.setItem('divya_preloader_shown', '1');
    if (utteranceRef.current) window.speechSynthesis.cancel();
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    try { if (audioCtxRef.current) audioCtxRef.current.close(); } catch (e) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="divya-preloader">
      <div className="divya-preloader__center">
        <div className="product-wrap">
          <img src={productImg} alt="product" className="product-img" />
          <span className="pulse pulse-1" />
          <span className="pulse pulse-2" />
        </div>
        <div className="preloader-text">
          <span className="typed">{typed}</span>
          <span className="cursor">|</span>
        </div>
      </div>

      {audioBlocked && !speaking && (
        <div className="preloader-audio-prompt">
          <div className="preloader-audio-prompt__box">
            <p>Tap anywhere or press the button to enable sound</p>
            <button className="preloader-audio-prompt__btn" onClick={enableAudioGesture}>Enable sound</button>
            <button className="preloader-skip" onClick={skipPreloader}>Skip</button>
          </div>
        </div>
      )}

      <button className="preloader-skip preloader-skip--top" onClick={skipPreloader}>
        Skip &gt;&gt;
      </button>
    </div>
  );
};

export default Preloader;


