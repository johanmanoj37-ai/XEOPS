"use client";

import Link from "next/link";
import {
  IconGithub,
  IconLinkedin,
  XeopsMark,
} from "@/components/xeops/XeopsIcons";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/xeops", Icon: IconLinkedin },
  { label: "GitHub", href: "https://github.com/XEOPS-in", Icon: IconGithub },
] as const;

export function XeopsFooter() {
  return (
    <footer className="relative z-10 border-t border-black/[0.08] bg-white">
      <div className="w-full px-6 py-12 sm:px-10 lg:px-16">
        {/* Top Row: Logo | Socials */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/home"
            className="flex items-center gap-2.5 text-[#0A0D0D] transition-opacity hover:opacity-85"
            aria-label="Xeops Home"
          >
            <XeopsMark className="h-4 w-auto" />
            <span className="text-base font-semibold tracking-tight">Xeops</span>
          </Link>

          <div className="flex items-center gap-3.5">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-black/[0.02] text-[#4A5353] transition-colors hover:border-black/25 hover:text-[#0A0D0D]"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Hairline Legal Row */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-black/[0.07] pt-7 text-xs text-[#727B7B] sm:flex-row sm:items-center">
          <p>© 2026 Xeops. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#0A0D0D]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-[#0A0D0D]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
