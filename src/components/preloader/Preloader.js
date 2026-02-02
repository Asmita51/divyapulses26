import React, { useEffect, useRef, useState } from 'react';
import './Preloader.css';
import productImg from '../../images/partner/1.png';

const MESSAGE =
  "Welcome To Divya Industries. Delivering premium-quality products with a commitment to purity, freshness, and trust.";

const Preloader = ({ onFinish }) => {
  const [typed, setTyped] = useState('');
  const [permissionAnswered, setPermissionAnswered] = useState(false);
  const [audioAllowed, setAudioAllowed] = useState(false);

  const typingIntervalRef = useRef(null);
  const utteranceRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(typingIntervalRef.current);
      window.speechSynthesis?.cancel();
    };
  }, []);

  const startTyping = () => {
    let i = 0;
    typingIntervalRef.current = setInterval(() => {
      i++;
      setTyped(MESSAGE.slice(0, i));
      if (i >= MESSAGE.length) {
        clearInterval(typingIntervalRef.current);
      }
    }, 55); // letter by letter
  };

  const startSpeech = () => {
    if (!('speechSynthesis' in window)) {
      onFinish();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(MESSAGE);
    utterance.rate = 0.85; // slow, sentence-like
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.lang = 'en-IN';

    utterance.onend = () => {
      sessionStorage.setItem('divya_preloader_shown', '1');
      onFinish(); // 🔑 website unlocks ONLY here
    };

    utterance.onerror = () => {
      sessionStorage.setItem('divya_preloader_shown', '1');
      onFinish();
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.cancel();

    // slight delay so typing starts first
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 1200);
  };

  const handleAllow = () => {
    setPermissionAnswered(true);
    setAudioAllowed(true);
    startTyping();
    startSpeech();
  };

  const handleDeny = () => {
    setPermissionAnswered(true);
    setAudioAllowed(false);
    startTyping();

    // typing only → unlock after typing ends
    setTimeout(() => {
      sessionStorage.setItem('divya_preloader_shown', '1');
      onFinish();
    }, MESSAGE.length * 55 + 500);
  };

  const handleSkip = () => {
    sessionStorage.setItem('divya_preloader_shown', '1');
    clearInterval(typingIntervalRef.current);
    window.speechSynthesis?.cancel();
    onFinish();
  };

return (
  <div className="divya-preloader agro-theme">
    {/* Floating grains */}
    <div className="floating-grains">
      <span className="grain g1" />
      <span className="grain g2" />
      <span className="grain g3" />
      <span className="grain g4" />
      <span className="grain g5" />
      <span className="grain g6" />
    </div>

    <div className="divya-preloader__center">
      <div className="product-wrap">
        <img src={productImg} alt="product" className="product-img" />
        <span className="pulse pulse-1" />
        <span className="pulse pulse-2" />
        <span className="pulse pulse-3" />
      </div>

      <h2 className="brand-title">Divya Industries</h2>
      <p className="brand-tagline">Grain Processing & Packing LLC</p>

      {permissionAnswered && (
        <div className="preloader-text">
          <span className="typed">{typed}</span>
          <span className="cursor">|</span>
        </div>
      )}
    </div>

    {/* SKIP */}
    <button
      className="preloader-skip preloader-skip--top"
      onClick={handleSkip}
    >
      Skip
    </button>

    {/* AUDIO POPUP */}
    {!permissionAnswered && (
      <div className="audio-popup-overlay">
        <div className="audio-popup">
          <h4>🔊 Enable Audio Welcome?</h4>
          <p>Enjoy a short, warm introduction from Divya Industries.</p>
          <div className="audio-popup-actions">
            <button className="btn-allow" onClick={handleAllow}>
              Allow
            </button>
            <button className="btn-deny" onClick={handleDeny}>
              No Thanks
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default Preloader;