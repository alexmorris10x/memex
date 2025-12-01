"use client";

import { motion } from "framer-motion";

export function IPhoneMockup() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 60, rotateX: 0, rotateY: 0 }}
      animate={{ opacity: 1, y: 0, rotateX: 12, rotateY: -8 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Ambient glow behind phone */}
      <div
        className="absolute -inset-20 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.3) 0%, rgba(59, 130, 246, 0.15) 40%, transparent 70%)",
        }}
      />

      {/* iPhone frame */}
      <motion.div
        className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] rounded-[50px] bg-[#1a1a1a] p-[3px] shadow-2xl"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: `
            0 50px 100px -20px rgba(0, 0, 0, 0.8),
            0 30px 60px -30px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            0 0 80px rgba(124, 58, 237, 0.15)
          `,
          transform: "rotateX(12deg) rotateY(-8deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Steel frame effect */}
        <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0f0f0f]" />

        {/* Screen bezel */}
        <div className="relative w-full h-full rounded-[47px] bg-[#0a0a0a] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[32px] bg-black rounded-full z-20 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-[#1a1a1a] mr-6" />
          </div>

          {/* Screen content */}
          <div className="absolute inset-0 pt-14 pb-8 px-4">
            {/* Status bar */}
            <div className="flex justify-between items-center px-2 mb-4 text-[10px] text-[#888]">
              <span className="font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
                </svg>
                <svg
                  className="w-4 h-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="7" width="18" height="10" rx="2" />
                  <rect x="20" y="10" width="2" height="4" rx="0.5" />
                </svg>
              </div>
            </div>

            {/* App header */}
            <div className="mb-5">
              <h3 className="text-[11px] text-[#888] font-medium tracking-wide uppercase mb-1">
                Library
              </h3>
              <h2 className="text-[22px] text-white font-semibold tracking-tight">
                All Items
              </h2>
            </div>

            {/* Search bar */}
            <div className="mb-4 px-3 py-2.5 rounded-xl bg-[#1a1a1a] border border-[rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 text-[#666]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="text-[12px] text-[#555]">Search library...</span>
              </div>
            </div>

            {/* Content items */}
            <div className="space-y-2.5">
              {/* Audio item */}
              <motion.div
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#111] border border-[rgba(255,255,255,0.04)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] text-white font-medium truncate">
                    Huberman Lab: Focus
                  </p>
                  <p className="text-[10px] text-[#666]">
                    2h 14m <span className="text-purple-400">47 notes</span>
                  </p>
                </div>
              </motion.div>

              {/* Book item */}
              <motion.div
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#111] border border-[rgba(255,255,255,0.04)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.95, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] text-white font-medium truncate">
                    Thinking, Fast and Slow
                  </p>
                  <p className="text-[10px] text-[#666]">
                    324 pages <span className="text-blue-400">89 highlights</span>
                  </p>
                </div>
              </motion.div>

              {/* Video item */}
              <motion.div
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#111] border border-[rgba(255,255,255,0.04)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] text-white font-medium truncate">
                    WWDC 2024 Keynote
                  </p>
                  <p className="text-[10px] text-[#666]">
                    1h 48m <span className="text-rose-400">12 clips</span>
                  </p>
                </div>
              </motion.div>

              {/* PDF item */}
              <motion.div
                className="flex items-center gap-3 p-2.5 rounded-xl bg-[#111] border border-[rgba(255,255,255,0.04)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.25, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] text-white font-medium truncate">
                    Research Paper.pdf
                  </p>
                  <p className="text-[10px] text-[#666]">
                    42 pages <span className="text-amber-400">23 annotations</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-white/20" />
        </div>
      </motion.div>
    </motion.div>
  );
}
