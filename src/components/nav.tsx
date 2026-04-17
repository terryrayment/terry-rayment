"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <style>{`
        .brush-name {
          clip-path: polygon(0% 15%, 0% 85%, 0% 90%, 0% 10%);
          transition: clip-path 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          white-space: nowrap;
          font-size: 9px;
          letter-spacing: 0.18em;
          margin-bottom: 4px;
          opacity: 0.5;
          cursor: default;
          user-select: none;
        }
        .brush-wrapper:hover .brush-name {
          clip-path: polygon(0% 5%, 101% -5%, 103% 105%, -1% 98%);
        }
      `}</style>

      <div className="brush-wrapper flex flex-col items-center pb-[2px]">
        <span className="brush-name">TERRANCE MICHAEL CARTER RAYMENT II</span>

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
      </div>
    </nav>
  );
}
