"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

/* ── Top Anchor & Descending Cord with Tied Knot ─────────────────────── */
function TopCordWithKnot() {
  return (
    <svg
      viewBox="0 0 40 56"
      className="h-14 w-10 text-[#0A0D0D] overflow-visible"
      aria-hidden="true"
    >
      {/* Wall anchor eyelet / metallic grommet */}
      <circle
        cx="20"
        cy="9"
        r="5"
        fill="#FFFFFF"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="20" cy="9" r="2" fill="#11A39F" />

      {/* String loop passing through the anchor pin */}
      <path
        d="M 15, 9 C 15, 3 25, 3 25, 9 C 25, 14 20, 16 20, 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Vertical cord dropping down */}
      <path
        d="M 20, 22 L 20, 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Subtle twisted cord highlight */}
      <path
        d="M 20, 23 L 20, 37"
        fill="none"
        stroke="#727B7B"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        opacity="0.6"
      />

      {/* Tied knot coils */}
      <path
        d="M 13, 38 Q 20, 35 27, 38"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M 13, 42 Q 20, 39 27, 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Tied knot side loop / ear */}
      <path
        d="M 26, 39 C 33, 35 34, 43 27, 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Loop extending to enter the logo eyelet */}
      <path
        d="M 20, 42 L 20, 56"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Middle Connecting Cord (Zeon bottom -> Scopus top) ─────────────── */
function MiddleCordWithKnots() {
  return (
    <svg
      viewBox="0 0 40 60"
      className="h-15 w-10 text-[#0A0D0D] overflow-visible"
      aria-hidden="true"
    >
      {/* Loop exiting bottom of Zeon */}
      <path
        d="M 20, 0 L 20, 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Small tie wrap */}
      <path
        d="M 14, 10 Q 20, 8 26, 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Vertical cord segment */}
      <path
        d="M 20, 10 L 20, 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 20, 12 L 20, 40"
        fill="none"
        stroke="#727B7B"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        opacity="0.6"
      />

      {/* Knot coils at top of Scopus */}
      <path
        d="M 13, 42 Q 20, 39 27, 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M 13, 46 Q 20, 43 27, 46"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Knot side ear */}
      <path
        d="M 26, 43 C 33, 39 34, 47 27, 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Loop to enter Scopus eyelet */}
      <path
        d="M 20, 46 L 20, 60"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Bottom Cord Tail with Stopper Knot & Frayed Ends ───────────────── */
function BottomCordWithTail() {
  return (
    <svg
      viewBox="0 0 40 56"
      className="h-14 w-10 text-[#0A0D0D] overflow-visible"
      aria-hidden="true"
    >
      {/* Loop exiting bottom of Scopus */}
      <path
        d="M 20, 0 L 20, 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* End stopper knot */}
      <path
        d="M 14, 14 Q 20, 11 26, 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="18" r="3.5" fill="currentColor" />
      <path
        d="M 14, 21 Q 20, 18 26, 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Two loose hanging cord ends */}
      <path
        d="M 19, 21 Q 16, 32 13, 42"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M 21, 21 Q 24, 33 27, 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Delicate frayed thread strands */}
      <path
        d="M 13, 42 L 11, 48"
        fill="none"
        stroke="#4A5353"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M 13, 42 L 14, 49"
        fill="none"
        stroke="#727B7B"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M 27, 44 L 26, 50"
        fill="none"
        stroke="#4A5353"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M 27, 44 L 29, 52"
        fill="none"
        stroke="#727B7B"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Main Tied Product String Component ─────────────────────────────── */
export function TiedProductString() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Outer physics sway wrapper: anchored from top center */}
      <motion.div
        className="flex flex-col items-center origin-top select-none"
        initial={{ rotate: 0 }}
        animate={{
          rotate: [-1.2, 1.2, -1.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          rotate: 0,
          transition: { duration: 0.35, ease: "easeOut" },
        }}
      >
        {/* 1. Top Pin & Descending Cord with Knot */}
        <TopCordWithKnot />

        {/* 2. ZEON Tied Logo & Hangtag */}
        <Link
          href="/product"
          className="group relative flex flex-col items-center rounded-2xl p-2.5 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none"
          title="Explore Zeon by Xeops"
        >
          {/* Top eyelet ring where the string knots into the logo */}
          <div
            aria-hidden="true"
            className="-mt-1 mb-1.5 flex h-4 w-4 items-center justify-center rounded-full border-[1.8px] border-[#0A0D0D] bg-white shadow-xs transition-colors group-hover:border-[#11A39F]"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#0A0D0D] group-hover:bg-[#11A39F] transition-colors" />
          </div>

          {/* Zeon Logo Mark */}
          <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/zeon-mark-clean.png"
              alt="Zeon Logo"
              width={185}
              height={334}
              priority
              unoptimized
              className="h-18 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
            />
          </div>

          {/* Micro label */}
          <span className="mt-2 font-mono text-[11px] font-semibold tracking-[0.24em] text-[#0A0D0D] transition-colors group-hover:text-[#11A39F]">
            ZEON
          </span>
        </Link>

        {/* 3. Middle Connecting Cord with Knots */}
        <MiddleCordWithKnots />

        {/* 4. SCOPUS Tied Logo & Hangtag */}
        <Link
          href="/product"
          className="group relative flex flex-col items-center rounded-2xl p-2.5 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none"
          title="Explore Scopus by Xeops"
        >
          {/* Top eyelet ring where the string knots into the logo */}
          <div
            aria-hidden="true"
            className="-mt-1 mb-1.5 flex h-4 w-4 items-center justify-center rounded-full border-[1.8px] border-[#0A0D0D] bg-white shadow-xs transition-colors group-hover:border-[#11A39F]"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#0A0D0D] group-hover:bg-[#11A39F] transition-colors" />
          </div>

          {/* Scopus Logo Mark */}
          <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/scopus-mark-clean.png"
              alt="Scopus Logo"
              width={335}
              height={435}
              priority
              unoptimized
              className="h-16 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
            />
          </div>

          {/* Micro label */}
          <span className="mt-2 font-mono text-[11px] font-semibold tracking-[0.24em] text-[#0A0D0D] transition-colors group-hover:text-[#11A39F]">
            SCOPUS
          </span>
        </Link>

        {/* 5. Bottom Cord with Stopper Knot & Hanging Tails */}
        <BottomCordWithTail />
      </motion.div>
    </div>
  );
}
