"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorMode = "default" | "action" | "box" | "text" | "text-input";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, { damping: 28, stiffness: 380, mass: 0.35 });
  const smoothY = useSpring(cursorY, { damping: 28, stiffness: 380, mass: 0.35 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const detectMode = (target: HTMLElement | null): CursorMode => {
      if (!target) return "default";
      if (target.closest("input, textarea, select, [contenteditable='true']")) {
        return "text-input";
      }
      if (target.closest("a, button, [role='button'], .cursor-pointer")) {
        return "action";
      }
      if (target.closest("p, h1, h2, h3, h4, li, blockquote")) {
        return "text";
      }
      if (
        target.closest(
          "article, [data-cursor='box'], .rounded-3xl, .rounded-2xl, .spatial-glass-panel"
        )
      ) {
        return "box";
      }
      return "default";
    };

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      setMode(detectMode(e.target as HTMLElement | null));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!enabled || !isVisible) return null;

  const isText = mode === "text" || mode === "text-input";
  const isBox = mode === "box";
  const isAction = mode === "action";

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isClicking ? 0.82 : 1,
      }}
      transition={{ duration: 0.12 }}
    >
      {/* 1. TEXT / TEXT-INPUT MODE: Sleek Architectural I-Beam */}
      {isText ? (
        <motion.div
          initial={{ opacity: 0, scaleY: 0.5 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.15 }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Top Serif */}
          <span
            className={`block h-[2px] rounded-full bg-[#2563EB] dark:bg-[#60A5FA] ${
              mode === "text-input" ? "w-3" : "w-2"
            }`}
          />
          {/* Vertical Beam */}
          <span
            className={`block w-[2.5px] rounded-full bg-[#2563EB] dark:bg-[#3B82F6] shadow-[0_0_12px_rgba(37,99,235,0.75)] ${
              mode === "text-input" ? "h-6" : "h-4"
            }`}
          />
          {/* Bottom Serif */}
          <span
            className={`block h-[2px] rounded-full bg-[#2563EB] dark:bg-[#60A5FA] ${
              mode === "text-input" ? "w-3" : "w-2"
            }`}
          />
        </motion.div>
      ) : isBox ? (
        /* 2. BOX / CARD MODE: 4-Corner Tactical Reticle Frame */
        <motion.div
          initial={{ scale: 0.7, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="relative w-11 h-11 flex items-center justify-center"
        >
          <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#2563EB] dark:border-[#60A5FA] rounded-tl-[3px]" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#2563EB] dark:border-[#60A5FA] rounded-tr-[3px]" />
          <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#2563EB] dark:border-[#60A5FA] rounded-bl-[3px]" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#2563EB] dark:border-[#60A5FA] rounded-br-[3px]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
        </motion.div>
      ) : isAction ? (
        /* 3. ACTION (BUTTON / LINK) MODE: Magnetic Glass Squircle */
        <motion.div
          initial={{ scale: 0.75 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          className="w-10 h-10 rounded-xl border-[1.5px] border-[#2563EB] dark:border-[#60A5FA] bg-[#2563EB]/15 backdrop-blur-[1px] shadow-[0_0_20px_rgba(37,99,235,0.35)] flex items-center justify-center"
        >
          <span className="w-2 h-2 rounded-full bg-[#2563EB] dark:bg-white shadow-[0_0_8px_rgba(37,99,235,0.9)]" />
        </motion.div>
      ) : (
        /* 4. DEFAULT CANVAS MODE: Precision Diamond Core + Soft Halo */
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.15 }}
          className="relative w-7 h-7 flex items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full border border-[#2563EB]/35 dark:border-[#60A5FA]/40" />
          <span className="w-2 h-2 rotate-45 rounded-[2px] bg-[#2563EB] dark:bg-[#3B82F6] shadow-[0_0_10px_rgba(37,99,235,0.85)]" />
        </motion.div>
      )}
    </motion.div>
  );
}
