import { useEffect, useRef, useState } from "react";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

const GestureController = ({
  onSwipeLeft,
  onSwipeRight,
  onConfirm,
  onCloseModal,
  isModalOpen,
}) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [mode, setMode] = useState("NONE");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const lastXRef = useRef(null);
  const swipeLockRef = useRef(false);

  const selectedRef = useRef(null);
  const prevCountRef = useRef(null); // 🔥 IMPORTANT

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
      selfieMode: false,
    });

    hands.onResults((results) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!results.image) return;

      ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

      if (!results.multiHandLandmarks?.length) {
        setMode("NONE");
        lastXRef.current = null;
        prevCountRef.current = null;
        return;
      }

      const lm = results.multiHandLandmarks[0];

      drawConnectors(ctx, lm, Hands.HAND_CONNECTIONS, {
        color: "#00ff00",
        lineWidth: 3,
      });
      drawLandmarks(ctx, lm, { color: "#ff0000", lineWidth: 2 });

      // ---------- FINGER COUNT ----------
      let count = 0;
      if (lm[8].y < lm[6].y) count++;
      if (lm[12].y < lm[10].y) count++;
      if (lm[16].y < lm[14].y) count++;
      if (lm[20].y < lm[18].y) count++;
      if (Math.abs(lm[4].x - lm[2].x) > 0.04) count++;

      // ---------- MODE ----------
      if (count === 1) setMode("CURSOR");
      else setMode("SLIDER");

      // ---------- CURSOR / SELECTION ----------
      if (count === 1) {
        const cx = lm[8].x * window.innerWidth;
        const cy = lm[8].y * window.innerHeight;
        setCursor({ x: cx, y: cy });

        const el = document.elementFromPoint(cx, cy);
        const selectable = el?.closest(".gesture-selectable");

        if (selectable && selectable !== selectedRef.current) {
          selectedRef.current?.classList.remove("gesture-hover");
          selectable.classList.add("gesture-hover");
          selectedRef.current = selectable;
        }
      }

      // ---------- FIST TRANSITION (FIXED) ----------
      if (
        prevCountRef.current !== null &&
        prevCountRef.current > 0 &&
        count === 0 &&
        selectedRef.current
      ) {
        if (!isModalOpen) {
          onConfirm?.(selectedRef.current);
        } else {
          onCloseModal?.();
        }
      }

      prevCountRef.current = count;

      // ---------- SLIDE BY HAND MOVEMENT ----------
      if (count >= 2) {
        const palmX = lm[0].x;

        if (lastXRef.current !== null && !swipeLockRef.current) {
          const dx = palmX - lastXRef.current;

          if (dx > 0.06) {
            onSwipeRight?.();
            swipeLockRef.current = true;
          } else if (dx < -0.06) {
            onSwipeLeft?.();
            swipeLockRef.current = true;
          }

          if (swipeLockRef.current) {
            setTimeout(() => {
              swipeLockRef.current = false;
            }, 800);
          }
        }

        lastXRef.current = palmX;
      }
    });

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        await hands.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
      facingMode: "user",
    });

    camera.start();
    return () => camera.stop();
  }, [onSwipeLeft, onSwipeRight, onConfirm, onCloseModal, isModalOpen]);

  return (
    <>
      <video ref={videoRef} autoPlay muted playsInline style={{ display: "none" }} />

      <canvas
        ref={canvasRef}
        width={320}
        height={240}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 999999,
          borderRadius: 10,
        }}
      />

      {mode === "CURSOR" && (
        <div
          style={{
            position: "fixed",
            left: cursor.x,
            top: cursor.y,
            width: 14,
            height: 14,
            background: "red",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000000,
            pointerEvents: "none",
          }}
        />
      )}
    </>
  );
};

export default GestureController;
