"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue } from "framer-motion";

type Props = {
  value?: number; // 0-100
  size?: number;  // px
};

export default function CircleProgress({ value = 84, size = 48 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const progress = useMotionValue(0); // 0 -> 100
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    progress.set(0); // start from 0 when it becomes visible

    const controls = animate(progress, value, {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    });

    const unsub = progress.on("change", (v) => setDisplay(Math.round(v)));

    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, value, progress]);

  return (
    <motion.div
      ref={ref}
      className="relative rounded-full"
      style={{
        width: size,
        height: size,

        // animate this variable with framer-motion
        ...( { ["--p" as any]: progress } ),

        // ✅ white progress + transparent remainder
        background:
          "conic-gradient(#fff 0% calc(var(--p) * 1%), transparent calc(var(--p) * 1%) 100%)",
      }}
    >
      {/* inner circle (ring thickness) */}
      <div className="absolute inset-1.5 rounded-full bg-[#58df8c]" />

      {/* number */}
      <div className="absolute inset-0 grid place-items-center text-sm font-semibold text-white">
        {display}
      </div>
    </motion.div>
  );
}
