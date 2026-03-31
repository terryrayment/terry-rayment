import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "TERRY RAYMENT — DIRECTOR",
  description: "Director portfolio — commercial, branded content, music videos, and short films.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <Nav />
        <main className="mx-auto w-full max-w-[2400px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-[140px]">
          {children}
        </main>
        <ThemeToggle />
      </body>
    </html>
  );
}
