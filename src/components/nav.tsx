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
          0%   { color:#fff9c4; text-shadow: 0 -2px 6px #fff, 0 -5px 12px #ffff33, 0 -8px 18px #ffaa00, 0 -11px 28px #ff6600, 0 -14px 38px #ff2200, 0 -16px 48px #aa0000; }
          8%   { color:#ffe566; text-shadow: 0 -1px 3px #fff, 0 -3px 8px #ffee00, 0 -5px 13px #ff8800, 0 -8px 20px #ff4400, 0 -10px 28px #ff1100; }
          16%  { color:#fff8a0; text-shadow: 0 -3px 8px #fff, 0 -6px 16px #ffff22, 0 -9px 22px #ffcc00, 0 -13px 32px #ff7700, 0 -16px 42px #ff2200, 0 -18px 52px #cc0000; }
          24%  { color:#ffee55; text-shadow: 0 -2px 4px #fff, 0 -4px 9px #ffdd00, 0 -6px 14px #ff9900, 0 -9px 22px #ff5500, 0 -11px 30px #ee1100; }
          32%  { color:#fff9c4; text-shadow: 0 -2px 7px #fff, 0 -5px 14px #ffff44, 0 -8px 20px #ffbb00, 0 -12px 30px #ff6600, 0 -15px 40px #ff1100, 0 -17px 50px #bb0000; }
          40%  { color:#ffe066; text-shadow: 0 -1px 3px #fff, 0 -3px 7px #ffcc00, 0 -5px 11px #ff8800, 0 -7px 17px #ff4400; }
          48%  { color:#fff4b0; text-shadow: 0 -3px 9px #fff, 0 -6px 18px #ffff33, 0 -10px 25px #ffaa00, 0 -13px 34px #ff5500, 0 -16px 44px #ff1100, 0 -19px 54px #990000; }
          56%  { color:#ffdd55; text-shadow: 0 -2px 5px #fff, 0 -4px 10px #ffee00, 0 -7px 16px #ff9900, 0 -9px 23px #ff5500, 0 -12px 32px #ff2200; }
          64%  { color:#fff9c4; text-shadow: 0 -2px 6px #fff, 0 -5px 13px #ffff22, 0 -8px 19px #ffcc00, 0 -12px 28px #ff7700, 0 -15px 38px #ff3300, 0 -17px 48px #cc0000; }
          72%  { color:#ffe566; text-shadow: 0 -1px 4px #fff, 0 -3px 8px #ffdd00, 0 -5px 13px #ff8800, 0 -8px 20px #ff4400; }
          80%  { color:#fff8a0; text-shadow: 0 -3px 7px #fff, 0 -5px 15px #ffff44, 0 -8px 21px #ffaa00, 0 -11px 30px #ff6600, 0 -14px 40px #ff2200, 0 -16px 50px #aa0000; }
          88%  { color:#ffee44; text-shadow: 0 -2px 5px #fff, 0 -4px 10px #ffcc00, 0 -6px 15px #ff8800, 0 -9px 22px #ff5500, 0 -11px 30px #ff1100; }
          100% { color:#fff9c4; text-shadow: 0 -2px 6px #fff, 0 -5px 12px #ffff33, 0 -8px 18px #ffaa00, 0 -11px 28px #ff6600, 0 -14px 38px #ff2200, 0 -16px 48px #aa0000; }
        }
        @keyframes flicker-move {
          0%,100% { transform: translateY(-50%) skewX(0deg) scaleY(1); }
          20%     { transform: translateY(-50%) skewX(-1.5deg) scaleY(1.02); }
          40%     { transform: translateY(-50%) skewX(1deg) scaleY(0.99); }
          60%     { transform: translateY(-50%) skewX(-0.5deg) scaleY(1.01); }
          80%     { transform: translateY(-50%) skewX(1.5deg) scaleY(1); }
        }
        .fire-text {
          font-family: 'Metal Mania', cursive;
          font-size: 9px;
          letter-spacing: 0.05em;
          animation: fire 0.18s steps(1) infinite, flicker-move 0.4s ease-in-out infinite;
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
