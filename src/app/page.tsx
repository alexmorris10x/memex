"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Constellation } from "@/components/Constellation";
import { IPhoneMockup } from "@/components/IPhoneMockup";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send to your backend
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
        <Constellation />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left side - Text content */}
            <motion.div
              className="text-center lg:text-left"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[rgba(124,58,237,0.15)] text-purple-300 border border-purple-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                  Now in Beta
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.05] mb-6"
              >
                Your Universal
                <br />
                <span className="text-gradient">Brain.</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-[#888] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10"
              >
                Sync books, video, and audio into one thinking tool.
                <br className="hidden sm:block" />
                Native for iOS & Mac.
              </motion.p>

              {/* CTA */}
              <motion.div variants={fadeInUp}>
                {!isSubmitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-3.5 rounded-full bg-[#111] border border-[rgba(255,255,255,0.08)] text-[#ededed] placeholder:text-[#555] text-sm focus:outline-none focus:border-[rgba(124,58,237,0.5)] focus:ring-2 focus:ring-[rgba(124,58,237,0.15)] transition-all duration-300"
                      required
                    />
                    <motion.button
                      type="submit"
                      className="px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm transition-all duration-300 hover:bg-[#f0f0f0] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Join the Beta
                    </motion.button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[rgba(34,197,94,0.15)] text-green-400 border border-green-500/20 text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    You&apos;re on the list! We&apos;ll be in touch soon.
                  </motion.div>
                )}

                {/* App Store badge (secondary) */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-6 flex items-center justify-center lg:justify-start gap-4"
                >
                  <span className="text-xs text-[#555]">Coming to</span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-[#888]">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <span className="text-xs font-medium">iOS</span>
                    </div>
                    <span className="text-[#333]">|</span>
                    <div className="flex items-center gap-1.5 text-[#888]">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <span className="text-xs font-medium">Mac</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - iPhone mockup */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <IPhoneMockup />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-[#888]"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Problem Section - "The Fragmentation" */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm text-purple-400/80 font-medium tracking-wide uppercase mb-4"
            >
              The Problem
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-tight mb-8"
            >
              Your knowledge is <span className="text-[#555]">scattered.</span>
            </motion.h2>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4 text-[#666] text-lg"
            >
              <span className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)] bg-[#0a0a0a]">
                Books in Books
              </span>
              <span className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)] bg-[#0a0a0a]">
                Video in Files
              </span>
              <span className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)] bg-[#0a0a0a]">
                Audio in Spotify
              </span>
              <span className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)] bg-[#0a0a0a]">
                Notes in Notion
              </span>
              <span className="px-4 py-2 rounded-full border border-[rgba(255,255,255,0.06)] bg-[#0a0a0a]">
                PDFs in Downloads
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm text-blue-400/80 font-medium tracking-wide uppercase mb-4"
            >
              The Solution
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-tight"
            >
              One place for <span className="text-gradient">everything.</span>
            </motion.h2>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Universal Index - Large card */}
            <motion.div
              variants={scaleIn}
              className="lg:col-span-2 glass-card p-8 synapse-glow group cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-200 transition-colors">
                    Universal Index
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed max-w-md">
                    All your content types in one unified library. Books, podcasts, videos, and documents - organized your way.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
              </div>

              {/* Mock file list */}
              <div className="bg-[#080808] rounded-xl border border-[rgba(255,255,255,0.04)] overflow-hidden">
                <div className="px-4 py-3 border-b border-[rgba(255,255,255,0.04)] flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-[#555]">Library</span>
                </div>
                <div className="p-3 space-y-1.5">
                  {[
                    { icon: "music", name: "focus_session.mp3", color: "purple" },
                    { icon: "book", name: "atomic_habits.epub", color: "blue" },
                    { icon: "video", name: "lecture_notes.mp4", color: "rose" },
                    { icon: "file", name: "research_paper.pdf", color: "amber" },
                    { icon: "text", name: "meeting_notes.md", color: "green" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                    >
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center bg-${item.color}-500/20`}
                        style={{
                          backgroundColor:
                            item.color === "purple"
                              ? "rgba(168, 85, 247, 0.2)"
                              : item.color === "blue"
                              ? "rgba(59, 130, 246, 0.2)"
                              : item.color === "rose"
                              ? "rgba(244, 63, 94, 0.2)"
                              : item.color === "amber"
                              ? "rgba(245, 158, 11, 0.2)"
                              : "rgba(34, 197, 94, 0.2)",
                        }}
                      >
                        {item.icon === "music" && (
                          <svg
                            className="w-3.5 h-3.5 text-purple-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                          </svg>
                        )}
                        {item.icon === "book" && (
                          <svg
                            className="w-3.5 h-3.5 text-blue-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                          </svg>
                        )}
                        {item.icon === "video" && (
                          <svg
                            className="w-3.5 h-3.5 text-rose-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                        {item.icon === "file" && (
                          <svg
                            className="w-3.5 h-3.5 text-amber-400"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                          </svg>
                        )}
                        {item.icon === "text" && (
                          <svg
                            className="w-3.5 h-3.5 text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-[13px] text-[#ccc] font-mono">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Deep Links - Small card */}
            <motion.div
              variants={scaleIn}
              className="glass-card p-8 synapse-glow group cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-200 transition-colors">
                    Deep Links
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Link notes directly to timestamps in any media.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
              </div>

              {/* Mock deep link example */}
              <div className="bg-[#080808] rounded-xl border border-[rgba(255,255,255,0.04)] p-4">
                <div className="text-[13px] text-[#888] mb-3">
                  From your notes:
                </div>
                <div className="bg-[#0c0c0c] rounded-lg p-3 border-l-2 border-blue-500/50">
                  <p className="text-[13px] text-[#ccc] leading-relaxed">
                    &quot;The key insight about dopamine is...&quot;
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs font-mono">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    podcast.mp3 @ 04:20
                  </div>
                </div>
              </div>
            </motion.div>

            {/* iCloud Sync - Small card */}
            <motion.div
              variants={scaleIn}
              className="glass-card p-8 synapse-glow group cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-200 transition-colors">
                    iCloud Sync
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Your files. Your cloud. No servers.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  </svg>
                </div>
              </div>

              {/* iCloud visual */}
              <div className="flex items-center justify-center py-6">
                <motion.div
                  className="relative w-20 h-20"
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(6, 182, 212, 0.2)",
                      "0 0 50px rgba(6, 182, 212, 0.4)",
                      "0 0 30px rgba(6, 182, 212, 0.2)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ borderRadius: "50%" }}
                >
                  <svg
                    className="w-20 h-20 text-cyan-400/80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Native Experience - Small card */}
            <motion.div
              variants={scaleIn}
              className="glass-card p-8 synapse-glow group cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-rose-200 transition-colors">
                    Native Swift
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Built for Apple. Buttery smooth 120fps.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-rose-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
              </div>

              {/* Swift code visual */}
              <div className="bg-[#080808] rounded-xl border border-[rgba(255,255,255,0.04)] p-4 font-mono text-xs">
                <div className="text-rose-400">
                  <span className="text-purple-400">struct</span> MemexApp
                  <span className="text-[#888]">:</span> App{" "}
                  <span className="text-[#555]">{"{"}</span>
                </div>
                <div className="pl-4 text-[#888]">
                  <span className="text-purple-400">var</span> body
                  <span className="text-[#555]">:</span>{" "}
                  <span className="text-cyan-400">some</span> Scene
                </div>
                <div className="text-[#555]">{"}"}</div>
              </div>
            </motion.div>

            {/* Offline First - Large card */}
            <motion.div
              variants={scaleIn}
              className="lg:col-span-2 glass-card p-8 synapse-glow group cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-amber-200 transition-colors">
                    Offline First
                  </h3>
                  <p className="text-[#888] text-sm leading-relaxed max-w-md">
                    Your entire library works without internet. No accounts. No subscriptions. Just your knowledge, always available.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <motion.div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  >
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
                      />
                    </svg>
                    <span className="text-sm text-amber-300 font-medium">
                      No WiFi? No problem.
                    </span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="text-sm text-green-300 font-medium">
                      100% Private
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-[rgba(255,255,255,0.04)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Memex"
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-lg font-semibold tracking-tight">Memex</span>
            </div>

            {/* Copyright */}
            <div className="text-sm text-[#555]">
              <span>Memex &copy; 2025</span>
            </div>

            {/* Social / Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-[#555] hover:text-[#ededed] transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#555] hover:text-[#ededed] transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
