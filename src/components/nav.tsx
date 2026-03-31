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
    <nav className="sticky top-0 z-50 flex items-center justify-center bg-[var(--bg)] pt-[30px] transition-colors duration-300">
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
