"use client";

import { useState, useEffect } from "react";
import { WorkGrid } from "@/components/work-grid";
import { Intro } from "@/components/intro";
import type { Work } from "@/data/works";

export function HomeClient({ works }: { works: Work[] }) {
  const [introComplete, setIntroComplete] = useState(false);
  // null = not yet checked, true = skip, false = show
  const [skipIntro, setSkipIntro] = useState<boolean | null>(null);

  useEffect(() => {
    const seen = !!sessionStorage.getItem("introSeen");
    setSkipIntro(seen);
    if (seen) setIntroComplete(true);
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introSeen", "1");
    setIntroComplete(true);
  };

  return (
    <>
      {/* Solid cover before we know what to show — prevents any flash */}
      {skipIntro === null && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, background: "var(--bg)" }} />
      )}
      {skipIntro === false && !introComplete && (
        <Intro onComplete={handleIntroComplete} />
      )}
      <WorkGrid works={works} revealed={introComplete} />
    </>
  );
}
