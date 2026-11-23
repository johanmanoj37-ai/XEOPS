"use client";

import { XEOPS_WORDMARK } from "@/components/brand/xeops-paths";

export function HomeLanding() {
  return (
    <div className="w-full">
      <section className="flex min-h-[calc(100dvh-74px-180px)] w-full flex-col justify-start px-6 pt-20 pb-20 sm:px-10 sm:pt-28 sm:pb-24 lg:px-16 lg:pt-36">
        <div className="w-full max-w-6xl text-left">
          <h1 className="text-3xl font-light leading-snug tracking-tight text-[#0A0D0D] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.15]">
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
        </div>
      </section>
    </div>
  );
}
