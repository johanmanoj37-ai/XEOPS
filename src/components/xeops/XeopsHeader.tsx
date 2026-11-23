"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "@/components/xeops/xeops-data";
import {
  IconClose,
  IconMenu,
  XeopsMark,
} from "@/components/xeops/XeopsIcons";

function isNavLinkActive(pathname: string, href: string): boolean {
  return (
    pathname === href ||
    (href !== "/home" && pathname.startsWith(href)) ||
    (href === "/product" && pathname.startsWith("/features"))
  );
}

export function XeopsHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-black/90 backdrop-blur-xl">
      <div className="flex h-[74px] w-full items-center justify-between px-6 sm:px-10 lg:px-16">
        {/* Brand Logo */}
        <Link
          href="/home"
          className="flex items-center gap-2.5 text-white transition-opacity hover:opacity-90"
          aria-label="Xeops Home"
        >
          <XeopsMark className="h-5 w-auto" />
          <span className="text-[17px] font-semibold tracking-tight text-white">
            Xeops
          </span>
        </Link>

        {/* Desktop Nav Links (Centered) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-8 md:flex md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          {NAV_LINKS.map((item) => {
            const isActive = isNavLinkActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] text-white transition-colors hover:border-white/25"
          >
            {mobileOpen ? (
              <IconClose className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.07] bg-black/95 backdrop-blur-2xl md:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5"
            >
              {NAV_LINKS.map((item) => {
                const isActive = isNavLinkActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    ) : null}
                  </Link>
                );
              })}

              <div className="mt-3 flex flex-col gap-2.5 border-t border-white/[0.07] pt-4">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-xs font-medium text-white/60 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  Replay Intro Animation
                </Link>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
