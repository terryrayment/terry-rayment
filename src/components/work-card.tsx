"use client";

import MuxVideo from "@mux/mux-video-react";
import { useEffect, useMemo, useState } from "react";
import { workMediaKey, type Work } from "@/data/works";

/** Slight zoom for masters with baked-in 2.39 letterboxing inside a 16:9 frame. */
const DEFAULT_COVER_ZOOM = 1.22;

/** Stable fake timecode + reel # from playback id (transfer / workprint vibe). */
function workprintMeta(seed: string): { tc: string; reel: string } {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const hh = String((h & 1) + 1).padStart(2, "0");
  const mm = String((h >>> 3) % 60).padStart(2, "0");
  const ss = String((h >>> 9) % 60).padStart(2, "0");
  const ff = String((h >>> 15) % 24).padStart(2, "0");
  const reelNum = ((h >>> 21) % 9) + 1;
  return {
    tc: `${hh}:${mm}:${ss}:${ff}`,
    reel: String(reelNum).padStart(2, "0"),
  };
}

const TC_FPS = 24;

function parseTcParts(s: string): [number, number, number, number] {
  const [a, b, c, d] = s.split(":").map((x) => parseInt(x, 10));
  return [a || 0, b || 0, c || 0, d || 0];
}

function formatTc(parts: [number, number, number, number]): string {
  return parts.map((n) => String(n).padStart(2, "0")).join(":");
}

function incrementTc(
  [hh, mm, ss, ff]: [number, number, number, number],
  fps: number
): [number, number, number, number] {
  let nff = ff + 1;
  let nss = ss;
  let nmm = mm;
  let nhh = hh;
  if (nff >= fps) {
    nff = 0;
    nss += 1;
    if (nss >= 60) {
      nss = 0;
      nmm += 1;
      if (nmm >= 60) {
        nmm = 0;
        nhh += 1;
        if (nhh >= 24) nhh = 0;
      }
    }
  }
  return [nhh, nmm, nss, nff];
}

interface WorkCardProps {
  work: Work;
  onClick: () => void;
  variant?: "hire" | "fun";
  revealed?: boolean;
  animationDelay?: number;
}

export function WorkCard({ work, onClick, variant = "hire", revealed = true, animationDelay = 0 }: WorkCardProps) {
  const zoom = work.scale ?? DEFAULT_COVER_ZOOM;
  const scaled = Math.abs(zoom - 1) > 0.001;
  const meta = useMemo(
    () => workprintMeta(workMediaKey(work)),
    [work.muxPlaybackId, work.vimeoVideoId, work.id]
  );
  const [liveTc, setLiveTc] = useState(meta.tc);
  const [tcEngaged, setTcEngaged] = useState(false);

  useEffect(() => {
    setLiveTc(meta.tc);
  }, [meta.tc]);

  useEffect(() => {
    if (!tcEngaged) return;
    let parts = parseTcParts(meta.tc);
    setLiveTc(formatTc(parts));
    const ms = Math.round(1000 / TC_FPS);
    const id = window.setInterval(() => {
      parts = incrementTc(parts, TC_FPS);
      setLiveTc(formatTc(parts));
    }, ms);
    return () => window.clearInterval(id);
  }, [tcEngaged, meta.tc]);

  const isFun = variant === "fun";

  const videoFrame = (
    <div className="relative aspect-video w-full overflow-hidden rounded-[3px] bg-black">
        <div
          className="absolute inset-0 origin-center"
          style={
            scaled
              ? {
                  transform: `scale(${zoom})`,
                  willChange: "transform",
                }
              : undefined
          }
        >
          {work.muxPlaybackId ? (
            <MuxVideo
              playbackId={work.muxPlaybackId}
              autoPlay
              loop
              muted
              playsInline
              className="block h-full w-full object-cover object-center"
            />
          ) : work.vimeoVideoId ? (
            <iframe
              title=""
              src={`https://player.vimeo.com/video/${work.vimeoVideoId}?background=1&autoplay=1&loop=1&muted=1&playsinline=1`}
              className="pointer-events-none absolute inset-0 h-full w-full border-0 object-cover"
              allow="autoplay; fullscreen; picture-in-picture"
            />
          ) : work.videoSrc ? (
            <video
              src={work.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="block h-full w-full object-cover object-center"
            />
          ) : null}
        </div>

        {/* #4 Chroma: blurred backdrop = hues from the video; neutral blobs = fast abstract motion only */}
        <div
          className="pointer-events-none absolute inset-0 z-[4] overflow-hidden opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] group-hover/work:opacity-100 group-focus-visible/work:opacity-100"
          aria-hidden
        >
          <div
            className="absolute inset-0 bg-black/8 mix-blend-soft-light backdrop-blur-2xl backdrop-saturate-[1.85]"
            style={{
              animation: "chroma-backdrop-pulse 0.48s ease-in-out infinite",
              WebkitBackdropFilter: "blur(36px) saturate(1.85)",
            }}
          />
          <div
            className="absolute -left-[22%] -top-[28%] h-[100%] w-[68%] blur-[52px] will-change-transform [animation:chroma-smear-a_0.62s_ease-in-out_infinite] mix-blend-soft-light"
            style={{
              borderRadius: "58% 42% 48% 52% / 52% 48% 55% 45%",
              background:
                "radial-gradient(ellipse at 40% 42%, rgba(24,22,20,0.78) 0%, rgba(14,14,16,0.42) 48%, transparent 70%)",
            }}
          />
          <div
            className="absolute -right-[18%] bottom-[-25%] h-[85%] w-[62%] blur-[48px] will-change-transform [animation:chroma-smear-b_0.58s_ease-in-out_infinite] mix-blend-overlay"
            style={{
              borderRadius: "48% 52% 44% 56% / 50% 50% 52% 48%",
              background:
                "radial-gradient(ellipse at 55% 35%, rgba(18,20,28,0.72) 0%, rgba(10,10,12,0.38) 55%, transparent 74%)",
            }}
          />
        </div>

        {/* #7 Workprint overlay */}
        <div
          className="pointer-events-none absolute bottom-2 left-2 z-[5] translate-y-1 font-mono text-[4.0625px] leading-tight tracking-[0.08em] text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.83,0,0.17,1)] [text-shadow:0_0.5px_2px_rgba(0,0,0,0.9),0_0_6px_rgba(0,0,0,0.45)] group-hover/work:translate-y-0 group-hover/work:opacity-[0.55] group-focus-visible/work:translate-y-0 group-focus-visible/work:opacity-[0.55]"
          aria-hidden
        >
          <div className="opacity-90">WORKPRINT</div>
          <div>TC {liveTc}</div>
          <div className="mt-px opacity-75">REEL {meta.reel}</div>
        </div>
      </div>
  );

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setTcEngaged(true)}
      onMouseLeave={() => setTcEngaged(false)}
      onFocus={() => setTcEngaged(true)}
      onBlur={() => setTcEngaged(false)}
      className={`group/work w-full outline-none ring-offset-2 ring-offset-[var(--bg)] focus-visible:ring-1 focus-visible:ring-[var(--text)] ${
        isFun ? "flex w-full flex-col items-center text-center" : "text-left"
      }`}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(8px)",
        transition: `opacity 0.5s ease ${animationDelay}ms, transform 0.5s ease ${animationDelay}ms`,
      }}
    >
      {isFun ? (
        <div className="mx-auto w-full max-w-[min(100%,34rem)]">
          {videoFrame}
        </div>
      ) : (
        videoFrame
      )}
      <div
        className={`mt-1.5 text-[8px] leading-tight tracking-[0.045em] text-[var(--text)] ${
          isFun ? "w-full text-center" : ""
        }`}
      >
        {isFun ? (
          <span className="font-normal">{work.title}</span>
        ) : (
          <>
            <span className="font-bold">{work.client}</span>
            <span className="font-bold"> | </span>
            <span className="font-normal">{work.title}</span>
          </>
        )}
      </div>
    </button>
  );
}
