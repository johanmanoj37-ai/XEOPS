import type { Metadata } from "next";
import { IconArrowRight } from "@/components/xeops/XeopsIcons";

export const metadata: Metadata = {
  title: "About Us — XEOPS",
  description: "Meet the Co-Founders behind Xeops.",
};

const CO_FOUNDERS = [
  {
    name: "Johan P Manoj",
    role: "Co-Founder",
    email: "johanpmanoj@xeops.in",
    initials: "JM",
  },
  {
    name: "Goutham Krishna VV",
    role: "Co-Founder",
    email: "goutham.krishnavv@xeops.in",
    initials: "GK",
  },
  {
    name: "Elsa Rose Jimmy",
    role: "Co-Founder",
    email: "elsarosejimmy@xeops.in",
    initials: "EJ",
  },
] as const;

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="4" width="15" height="12" rx="2" />
      <path d="m3.5 5.5 6.5 5 6.5-5" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="min-h-[calc(100dvh-74px-140px)] w-full px-6 pt-16 pb-24 sm:px-10 sm:pt-24 sm:pb-32 lg:px-16">
        {/* Header Block */}
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#727B7B]">
            Leadership
          </p>
          <h1 className="mt-3 text-3xl font-light tracking-tight text-[#0A0D0D] sm:text-4xl lg:text-5xl">
            Meet our Co-Founders
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[#4A5353] sm:text-base">
            The founding team leading the vision, architecture, and execution at Xeops.
          </p>
        </div>

        {/* 3 Co-Founders Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {CO_FOUNDERS.map((founder) => (
            <div
              key={founder.email}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-black/20 bg-gradient-to-b from-white via-white to-[#FAFAFA] p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-black/50 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.1)] sm:p-8"
            >
              {/* Subtle top specular hairline */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/15 to-transparent"
              />

              {/* Watermark character in background */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-8xl font-light text-black/[0.025] transition-opacity duration-300 group-hover:text-black/[0.045]"
              >
                {founder.initials[0]}
              </span>

              <div>
                {/* Avatar Badge */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-black/15 bg-gradient-to-b from-black/[0.03] to-transparent shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 group-hover:border-black group-hover:bg-[#0A0D0D] group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.14)]">
                  <span className="font-serif text-xl font-normal tracking-wide text-[#0A0D0D] transition-colors duration-300 group-hover:text-white">
                    {founder.initials}
                  </span>
                </div>

                {/* Name & Role */}
                <h2 className="mt-8 text-xl font-semibold tracking-tight text-[#0A0D0D] sm:text-2xl">
                  {founder.name}
                </h2>
                <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-black/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4A5353]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0A0D0D]" />
                  {founder.role}
                </div>
              </div>

              {/* Email Link Button */}
              <div className="mt-10 border-t border-black/10 pt-5">
                <a
                  href={`mailto:${founder.email}`}
                  className="group/btn flex items-center justify-between rounded-xl border border-black/15 bg-black/[0.02] px-4 py-3 text-xs font-medium text-[#4A5353] transition-all duration-300 hover:border-black hover:bg-[#0A0D0D] hover:text-white sm:text-sm"
                  aria-label={`Email ${founder.name} at ${founder.email}`}
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <MailIcon className="h-4 w-4 shrink-0 text-[#727B7B] transition-colors duration-300 group-hover/btn:text-white" />
                    <span className="truncate">{founder.email}</span>
                  </div>
                  <IconArrowRight className="h-3.5 w-3.5 shrink-0 text-[#727B7B] transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
