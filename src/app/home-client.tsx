"use client";

import { useState } from "react";
import { WorkGrid } from "@/components/work-grid";
import { Intro } from "@/components/intro";
import type { Work } from "@/data/works";

export function HomeClient({ works }: { works: Work[] }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <Intro onComplete={() => setRevealed(true)} />
      <WorkGrid works={works} revealed={revealed} />
    </>
  );
}
