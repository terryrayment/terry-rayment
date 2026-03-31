"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "WORK", key: "works" },
    { href: "/about", label: "ABOUT", key: "about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-center border-b border-[var(--text)] bg-[var(--bg)] transition-colors duration-300 relative"
      style={{ borderBottomWidth: "0.5px", opacity: 0.999 }}
    >
      <style>{`
        @keyframes fire {
          0%, 100% {
            text-shadow:
              0 0 4px #fff,
              0 0 8px #ffaa00,
              0 0 14px #ff6600,
              0 0 22px #ff4500,
              0 0 32px #ff0000;
            color: #ffdd00;
          }
          33% {
            text-shadow:
              0 0 2px #fff,
              0 0 6px #ff8800,
              0 0 10px #ff4500,
              0 0 18px #ff2200,
              0 0 28px #cc0000;
            color: #ff8800;
          }
          66% {
            text-shadow:
              0 0 6px #fff,
              0 0 12px #ffcc00,
              0 0 18px #ff8800,
              0 0 26px #ff5500,
              0 0 36px #ff1100;
            color: #ffee44;
          }
        }
        .fire-text {
          font-family: 'Metal Mania', cursive;
          font-size: 9px;
          letter-spacing: 0.05em;
          animation: fire 1.4s ease-in-out infinite;
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          text-decoration: none;
          line-height: 1;
        }
      `}</style>
      <Link href="/" className="fire-text">TERRY RAYMENT</Link>
      {links.map((link, i) => (
        <div key={link.key} className="flex items-center">
          {i > 0 && (
            <span className="px-[12px]" style={{ opacity: 0.3 }}>/</span>
          )}
          <Link
            href={link.href}
            className="block px-[16px] py-[8px] transition-opacity duration-300"
            style={{
              opacity: isActive(link.href) ? 1 : 0.4,
            }}
          >
            {link.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
