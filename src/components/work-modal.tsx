"use client";

import { useEffect, useCallback } from "react";
import MuxPlayer from "@mux/mux-player-react";
import { workMediaKey, type Work } from "@/data/works";

interface WorkModalProps {
  work: Work;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  variant?: "hire" | "fun";
}

export function WorkModal({
  work,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  variant = "hire",
}: WorkModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-[15px] text-white z-10">
        <div className="text-[8px] tracking-[0.045em]">
          {variant === "fun" ? (
            <span className="font-normal">{work.title}</span>
          ) : (
            <>
              <span className="font-bold">{work.client}</span>
              <span className="font-bold"> | </span>
              <span className="font-normal">{work.title}</span>
            </>
          )}
        </div>
        <button
          onClick={onClose}
          className="opacity-40 transition-opacity duration-300 hover:opacity-100"
        >
          [ CLOSE ]
        </button>
      </div>

      {/* Navigation arrows */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[20px] text-white opacity-40 transition-opacity duration-300 hover:opacity-100 z-10"
        >
          &lt;
        </button>
      )}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[20px] text-white opacity-40 transition-opacity duration-300 hover:opacity-100 z-10"
        >
          &gt;
        </button>
      )}

      {/* Video + optional description */}
      <div className="flex max-h-[calc(100dvh-3.5rem)] w-full max-w-[900px] flex-col items-stretch overflow-y-auto px-[60px] pb-8 pt-14">
        {work.muxPlaybackId ? (
          <MuxPlayer
            key={work.muxPlaybackId}
            playbackId={work.muxPlaybackId}
            autoPlay
            accentColor="#ffffff"
            style={{ aspectRatio: "16/9", width: "100%" }}
          />
        ) : work.vimeoVideoId ? (
          <div
            key={workMediaKey(work)}
            className="aspect-video w-full shrink-0 overflow-hidden bg-black"
          >
            <iframe
              title={work.title}
              src={`https://player.vimeo.com/video/${work.vimeoVideoId}?autoplay=1`}
              className="h-full w-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : null}
        {work.lightboxDescription ? (
          <p className="mt-10 w-[min(35vw,100%)] self-start whitespace-pre-line text-left text-[11px] font-normal leading-[1.65] tracking-normal text-white/80 normal-case">
            {work.lightboxDescription}
          </p>
        ) : null}
      </div>
    </div>
  );
}
