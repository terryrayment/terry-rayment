"use client";

import { useState } from "react";
import { workMediaKey, type Work } from "@/data/works";
import { WorkCard } from "./work-card";
import { WorkModal } from "./work-modal";

type DurationFilter = "all" | "short" | "medium" | "long";

interface WorkGridProps {
  works: Work[];
  /** Fun tab: larger frames, title-only labels, centered. */
  variant?: "hire" | "fun";
}

export function WorkGrid({ works: items, variant = "hire" }: WorkGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<DurationFilter>("all");

  const filtered =
    variant === "hire" && filter !== "all"
      ? items.filter((w) => w.duration === filter)
      : items;

  const gridClass =
    variant === "fun"
      ? "my-6 mx-auto grid w-full max-w-[min(100%,80rem)] grid-cols-1 justify-items-center gap-x-2 gap-y-14 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-16 lg:gap-x-4 lg:gap-y-20"
      : "my-6 grid grid-cols-1 gap-x-0.5 gap-y-1 sm:grid-cols-2 sm:gap-x-[3px] sm:gap-y-[5px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";

  const filters: { label: string; value: DurationFilter }[] = [
    { label: "ALL", value: "all" },
    { label: "SHORT", value: "short" },
    { label: "MEDIUM", value: "medium" },
    { label: "LONG", value: "long" },
  ];

  return (
    <>
      {variant === "hire" && (
        <div className="flex justify-center gap-[20px] mb-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className="transition-opacity duration-200"
              style={{ opacity: filter === f.value ? 1 : 0.3 }}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}
      <div className={gridClass}>
        {filtered.map((work, i) => (
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
          work={filtered[activeIndex]}
          variant={variant}
          onClose={() => setActiveIndex(null)}
          onPrev={() => setActiveIndex((prev) => (prev !== null ? prev - 1 : 0))}
          onNext={() =>
            setActiveIndex((prev) =>
              prev !== null ? prev + 1 : 0
            )
          }
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < filtered.length - 1}
        />
      )}
    </>
  );
}
