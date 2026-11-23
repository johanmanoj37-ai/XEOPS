"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BLOG_ARTICLES,
  type BlogArticle,
} from "@/components/xeops/xeops-data";
import { FinalCtaBanner } from "@/components/xeops/HomeSections";
import {
  IconArrowRight,
  IconClose,
} from "@/components/xeops/XeopsIcons";

const BLOG_CATEGORIES = [
  "All",
  "Engineering",
  "Design",
  "Architecture",
] as const;

export function BlogClient() {
  const [category, setCategory] =
    useState<(typeof BLOG_CATEGORIES)[number]>("All");
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  useEffect(() => {
    if (!activeArticle) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveArticle(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeArticle]);

  const featured = BLOG_ARTICLES.find((a) => a.featured) ?? BLOG_ARTICLES[0];
  const filtered =
    category === "All"
      ? BLOG_ARTICLES
      : BLOG_ARTICLES.filter((a) => a.category === category);

  return (
    <div className="w-full">
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#11A39F]">
              Xeops Journal
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[#0A0D0D] sm:text-5xl">
              Engineering notes &amp; design dispatches.
            </h1>
          </div>

          <div
            role="group"
            aria-label="Filter articles by category"
            className="flex flex-wrap gap-2"
          >
            {BLOG_CATEGORIES.map((cat) => {
              const active = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "border-[#11A39F]/50 bg-[#11A39F]/15 text-[#0A0D0D]"
                      : "border-black/[0.08] bg-black/[0.03] text-[#4A5353] hover:border-black/20 hover:text-[#0A0D0D]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Editorial Banner */}
        {featured ? (
          <article className="mt-12 overflow-hidden rounded-[24px] border border-black/[0.08] bg-white p-7 shadow-[0_12px_36px_rgba(0,0,0,0.06)] sm:p-10">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full border border-[#11A39F]/30 bg-[#11A39F]/10 px-3 py-0.5 font-medium text-[#11A39F]">
                Featured · {featured.category}
              </span>
              <span className="text-[#727B7B]">
                {featured.date} · {featured.readTime}
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-2xl font-bold tracking-tight text-[#0A0D0D] sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4A5353] sm:text-base">
              {featured.excerpt}
            </p>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => setActiveArticle(featured)}
                className="xeops-btn-secondary px-5 py-2.5 text-sm"
              >
                Read Dispatch
                <IconArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ) : null}

        {/* Articles Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="xeops-card xeops-card-interactive flex flex-col justify-between p-7"
            >
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#11A39F]">
                    {post.category}
                  </span>
                  <span className="text-[#727B7B]">
                    {post.date} · {post.readTime}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-snug text-[#0A0D0D]">
                  {post.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#4A5353]">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.06]">
                <button
                  type="button"
                  onClick={() => setActiveArticle(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0A0D0D] transition-colors hover:text-[#11A39F]"
                >
                  Read article
                  <IconArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCtaBanner />

      {/* Article Reader Modal */}
      <AnimatePresence>
        {activeArticle ? (
          <motion.div
            key="blog-reader-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
            role="presentation"
          >
            <motion.article
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[22px] border border-black/[0.1] bg-white p-6 shadow-[0_32px_90px_rgba(0,0,0,0.25)] sm:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="rounded-full border border-[#11A39F]/30 bg-[#11A39F]/10 px-2.5 py-0.5 font-medium text-[#11A39F]">
                    {activeArticle.category}
                  </span>
                  <span className="text-[#727B7B]">
                    {activeArticle.date} · {activeArticle.readTime}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  aria-label="Close article reader"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-black/[0.03] text-[#4A5353] hover:border-black/20 hover:text-[#0A0D0D]"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </div>

              <h2 className="mt-5 text-2xl font-bold tracking-tight text-[#0A0D0D] sm:text-3xl">
                {activeArticle.title}
              </h2>

              <div className="mt-6 space-y-4 border-t border-black/[0.07] pt-6 text-[15px] leading-relaxed text-[#4A5353]">
                {activeArticle.paragraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
