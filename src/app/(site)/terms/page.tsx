import type { Metadata } from "next";
import Link from "next/link";
import { IconChevronLeft } from "@/components/xeops/XeopsIcons";

export const metadata: Metadata = {
  title: "Terms of Service — XEOPS",
  description: "Terms of Service for the Xeops platform.",
};

export default function TermsPage() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-2xl px-6 pt-16 pb-24 sm:px-8 sm:pt-24 sm:pb-32">
        {/* Back Link */}
        <Link
          href="/home"
          className="group inline-flex items-center gap-1.5 text-xs font-medium text-[#727B7B] transition-colors hover:text-[#0A0D0D]"
        >
          <IconChevronLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          Back to Home
        </Link>

        {/* Content Card matching original legal modal */}
        <div className="mt-8 rounded-[22px] border border-black/[0.08] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.03)] sm:p-8">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#727B7B]">
              Xeops Legal
            </span>
            <h1 className="mt-1.5 text-xl font-semibold text-[#0A0D0D] sm:text-2xl">
              Terms of Service
            </h1>
          </div>

          <div className="mt-5 space-y-3.5 text-sm leading-relaxed text-[#4A5353]">
            <p>
              Use of the Xeops platform is governed by fair compute allocation, zero-abuse network integrity standards, and the uptime commitments attached to your selected workspace tier.
            </p>
            <p>
              You retain 100% ownership of your code, configurations, and deployment artifacts at all times, with instant export portability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
