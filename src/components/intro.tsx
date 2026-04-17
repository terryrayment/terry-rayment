"use client";

import { useEffect, useState } from "react";

interface IntroProps {
  onComplete: () => void;
}

export function Intro({ onComplete }: IntroProps) {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t0 = setTimeout(() => setShowImage(true), 80);
    const t1 = setTimeout(() => setShowText(true), 700);
    const t2 = setTimeout(() => setFadeOut(true), 2300);
    const t3 = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s ease",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      <img
        src="/welcome.jpg"
        alt=""
        style={{
          height: "400px",
          width: "auto",
          display: "block",
          objectFit: "contain",
          opacity: showImage ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}
      />
      <div
        style={{
          marginTop: "18px",
          fontSize: "9px",
          letterSpacing: "0.22em",
          color: "var(--text)",
          opacity: showText ? 0.35 : 0,
          transform: showText ? "translateY(0)" : "translateY(5px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        WELCOME
      </div>
    </div>
  );
}
