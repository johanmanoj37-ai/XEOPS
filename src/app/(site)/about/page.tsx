import type { Metadata } from "next";

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
    name: "Elsa Rose Jimmy",
    role: "Co-Founder",
    email: "elsarosejimmy@xeops.in",
    initials: "EJ",
  },
  {
    name: "Goutham Krishna VV",
    role: "Co-Founder",
    email: "goutham.krishnavv@xeops.in",
    initials: "GK",
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
              className="group relative flex flex-col justify-between rounded-[22px] border border-black/[0.08] bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-black/25 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] sm:p-8"
            >
              <div>
                {/* Monogram Badge */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[0.08] bg-black/[0.03] text-base font-semibold tracking-wide text-[#0A0D0D] transition-colors duration-300 group-hover:bg-[#0A0D0D] group-hover:text-white">
                  {founder.initials}
                </div>

                {/* Name & Role */}
                <h2 className="mt-6 text-xl font-semibold tracking-tight text-[#0A0D0D] sm:text-2xl">
                  {founder.name}
                </h2>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-[#727B7B]">
                  {founder.role}
                </p>
              </div>

              {/* Email Link */}
              <div className="mt-8 border-t border-black/[0.06] pt-5">
                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex items-center gap-2.5 text-xs font-medium text-[#4A5353] transition-colors hover:text-[#0A0D0D] sm:text-sm"
                  aria-label={`Email ${founder.name} at ${founder.email}`}
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-[#727B7B] transition-colors group-hover:text-[#0A0D0D]" />
                  <span className="truncate">{founder.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
