"use client";

import { useState, useEffect } from "react";
import { WorkGrid } from "@/components/work-grid";
import { Intro } from "@/components/intro";
import type { Work } from "@/data/works";

export function HomeClient({ works }: { works: Work[] }) {
  const [introComplete, setIntroComplete] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("introSeen")) {
      setIntroComplete(true);
    } else {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("introSeen", "1");
    setIntroComplete(true);
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <Intro onComplete={handleIntroComplete} />}
      <WorkGrid works={works} revealed={introComplete} />
    </>
  );
}
