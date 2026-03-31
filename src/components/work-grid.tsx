"use client";

import { useState } from "react";
import { works } from "@/data/works";
import { WorkCard } from "./work-card";
import { WorkModal } from "./work-modal";

export function WorkGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="my-6 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {works.map((work, i) => (
          <WorkCard
            key={work.muxPlaybackId}
            work={work}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <WorkModal
          work={works[activeIndex]}
          onClose={() => setActiveIndex(null)}
          onPrev={() => setActiveIndex((prev) => (prev !== null ? prev - 1 : 0))}
          onNext={() =>
            setActiveIndex((prev) =>
              prev !== null ? prev + 1 : 0
            )
          }
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < works.length - 1}
        />
      )}
    </>
  );
}
