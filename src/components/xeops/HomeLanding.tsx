"use client";

import Image from "next/image";
import { XEOPS_WORDMARK } from "@/components/brand/xeops-paths";
import { TiedProductString } from "@/components/xeops/TiedProductString";

export function HomeLanding() {
  return (
    <div className="w-full">
      <section className="flex min-h-[calc(100dvh-74px-180px)] w-full flex-col justify-start px-6 pt-20 pb-20 sm:px-10 sm:pt-28 sm:pb-24 lg:px-16 lg:pt-36">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16">
            {/* Left Column: Tagline, Signature & Founder */}
            <div className="flex-1 max-w-3xl text-left">
              <h1 className="max-w-2xl text-xl font-light leading-snug tracking-tight text-[#0A0D0D] sm:text-2xl md:text-3xl lg:text-[2.25rem] lg:leading-[1.22]">
                no tagline because a sentence cant define what we at{" "}
                <span className="inline-block align-baseline font-semibold text-[#0A0D0D]">
                  <svg
                    viewBox={XEOPS_WORDMARK.viewBox}
                    className="inline-block h-[0.74em] w-auto align-baseline overflow-visible"
                    role="img"
                    aria-label="XEOPS"
                  >
                    {XEOPS_WORDMARK.glyphs.map((glyph) => (
                      <path
                        key={glyph.id}
                        d={glyph.d}
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                    ))}
                  </svg>
                </span>{" "}
                for
              </h1>

              <div className="mt-12 sm:mt-16 flex flex-col items-start">
                <div className="relative">
                  <Image
                    src="/signature.png"
                    alt="Johan P Manoj"
                    width={1449}
                    height={622}
                    priority
                    unoptimized
                    className="h-auto w-44 select-none object-contain pointer-events-none sm:w-52 md:w-60"
                  />
                </div>

                <div className="mt-4 flex flex-col">
                  <span className="text-base font-medium tracking-tight text-[#0A0D0D] sm:text-lg">
                    Johan P Manoj
                  </span>
                  <span className="text-xs font-normal uppercase tracking-[0.16em] text-[#727B7B] sm:text-[13px]">
                    Founder
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Tied Vertical String with Zeon & Scopus Logos */}
            <div className="flex justify-start lg:justify-end lg:pr-6 pt-2 lg:pt-0">
              <TiedProductString />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
