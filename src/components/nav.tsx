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
    <nav className="sticky top-0 z-50 flex items-center justify-center border-b border-[var(--text)] bg-[var(--bg)] transition-colors duration-300"
      style={{ borderBottomWidth: "0.5px", opacity: 0.999 }}
    >
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
