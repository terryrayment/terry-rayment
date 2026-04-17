"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect, useState } from "react";

function ScratchText({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scratchingRef = useRef(false);
  const initializedRef = useRef(false);
  const doneRef = useRef(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  const initCanvas = () => {
    if (initializedRef.current) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    if (rect.width === 0) return; // not measured yet
    const pad = 10;
    canvas.width = Math.ceil(rect.width) + pad * 2;
    canvas.height = Math.ceil(rect.height) + pad * 2;

    const ctx = canvas.getContext("2d")!;
    const tmp = document.createElement("div");
    tmp.style.cssText = "background:var(--bg);position:fixed;visibility:hidden;width:1px;height:1px";
    document.body.appendChild(tmp);
    const bg = getComputedStyle(tmp).backgroundColor;
    document.body.removeChild(tmp);

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    initializedRef.current = true;
  };

  // Initialize as soon as the text is measured
  useEffect(() => {
    const id = requestAnimationFrame(() => initCanvas());
    return () => cancelAnimationFrame(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scratch = (x: number, y: number) => {
    if (doneRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    ctx.globalCompositeOperation = "destination-out";
    // Soft brush: blur + slightly randomised ellipse
    ctx.filter = "blur(5px)";
    ctx.beginPath();
    ctx.ellipse(
      x, y,
      26 + Math.random() * 6,
      14 + Math.random() * 6,
      Math.random() * Math.PI,
      0, Math.PI * 2
    );
    ctx.fill();
    ctx.filter = "none";

    // Check coverage every few strokes (cheap sampling)
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    for (let i = 3; i < data.length; i += 16) {
      if (data[i] < 50) cleared++;
    }
    if (cleared / (canvas.width * canvas.height / 4) > 0.6) {
      doneRef.current = true;
      setFadeOut(true);
      setTimeout(() => setHidden(true), 500);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", display: "inline-block", marginBottom: "4px" }}
    >
      <span style={{ fontSize: "9px", letterSpacing: "0.18em", opacity: 0.5, display: "block", userSelect: "none" }}>
        {children}
      </span>
      {!hidden && (
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: "-10px",
            left: "-10px",
            cursor: "crosshair",
            opacity: fadeOut ? 0 : 1,
            transition: "opacity 0.5s ease",
            pointerEvents: fadeOut ? "none" : "auto",
          }}
          onMouseDown={(e) => {
            initCanvas();
            scratchingRef.current = true;
            const rect = e.currentTarget.getBoundingClientRect();
            scratch(e.clientX - rect.left, e.clientY - rect.top);
          }}
          onMouseUp={() => { scratchingRef.current = false; }}
          onMouseLeave={() => { scratchingRef.current = false; }}
          onMouseMove={(e) => {
            if (!scratchingRef.current) return;
            const rect = e.currentTarget.getBoundingClientRect();
            scratch(e.clientX - rect.left, e.clientY - rect.top);
          }}
        />
      )}
    </div>
  );
}

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "FOR HIRE", key: "hire" },
    { href: "/fun", label: "FOR FUN", key: "fun" },
    { href: "/about", label: "INFO", key: "info" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center bg-[var(--bg)] pt-[30px] transition-colors duration-300">
      <ScratchText>TERRANCE MICHAEL CARTER RAYMENT II</ScratchText>
      <div className="flex items-center">
        {links.map((link, i) => (
          <div key={link.key} className="flex items-center">
            {i > 0 && (
              <span className="px-[12px]" style={{ opacity: 0.3 }}>/</span>
            )}
            <Link
              href={link.href}
              className="block px-[16px] py-[8px] transition-opacity duration-300"
              style={{ opacity: isActive(link.href) ? 1 : 0.4 }}
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
