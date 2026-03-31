"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = (toDark: boolean) => {
    setDark(toDark);
    if (toDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-[15px] left-[15px] z-50 flex items-center gap-[8px]">
      <button
        onClick={() => toggle(false)}
        className="h-[12px] w-[12px] rounded-full border border-[var(--text)] transition-colors duration-300"
        style={{
          backgroundColor: !dark ? "var(--text)" : "transparent",
        }}
        aria-label="Light mode"
      />
      <button
        onClick={() => toggle(true)}
        className="h-[12px] w-[12px] rounded-full border border-[var(--text)] transition-colors duration-300"
        style={{
          backgroundColor: dark ? "var(--text)" : "transparent",
        }}
        aria-label="Dark mode"
      />
    </div>
  );
}
