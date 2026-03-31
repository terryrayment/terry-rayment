"use client";

import { useState } from "react";
import { workMediaKey, type Work } from "@/data/works";
import { WorkCard } from "./work-card";
import { WorkModal } from "./work-modal";

interface WorkGridProps {
  works: Work[];
  /** Fun tab: larger frames, title-only labels, centered. */
  variant?: "hire" | "fun";
}

export function WorkGrid({ works: items, variant = "hire" }: WorkGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const gridClass =
    variant === "fun"
      ? "my-6 mx-auto grid w-full max-w-[min(100%,80rem)] grid-cols-1 justify-items-center gap-x-2 gap-y-14 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-16 lg:gap-x-4 lg:gap-y-20"
      : "my-6 grid grid-cols-1 gap-x-0.5 gap-y-1 sm:grid-cols-2 sm:gap-x-[3px] sm:gap-y-[5px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";

  return (
    <>
      <div className={gridClass}>
        {items.map((work, i) => (
          <WorkCard
            key={workMediaKey(work)}
            work={work}
            variant={variant}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {activeIndex !== null && (
        <WorkModal
          work={items[activeIndex]}
          variant={variant}
          onClose={() => setActiveIndex(null)}
          onPrev={() => setActiveIndex((prev) => (prev !== null ? prev - 1 : 0))}
          onNext={() =>
            setActiveIndex((prev) =>
              prev !== null ? prev + 1 : 0
            )
          }
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < items.length - 1}
        />
      )}
    </>
  );
}
