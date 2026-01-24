// EmptySkelton.tsx
"use client";
import React from "react";

type Props = {
  isReplaced?: boolean;
  classes?: string;

  /**
   * Controls the "base tint" without hardcoding colors.
   * Example:
   *  - "text-black/80 dark:text-white/80"
   *  - "text-white/90" (if placed on dark/colored bg)
   */
  toneClass?: string;

  /**
   * How strong the tint should be (percent mix of currentColor into transparent)
   */
  intensity?: {
    wrapBg?: number;   // default 10
    border?: number;   // default 18
    block?: number;    // default 22
  };
};

export const EmptySkelton = ({
  isReplaced = true,
  classes = "",
  toneClass = "text-black/80 dark:text-white/80",
  intensity,
}: Props) => {
  const wrapBg = intensity?.wrapBg ?? 10;
  const border = intensity?.border ?? 18;
  const block = intensity?.block ?? 22;

  // ✅ transparent, adapts to any bg via currentColor
  const wrapStyle: React.CSSProperties = {
    backgroundColor: `color-mix(in oklab, currentColor ${wrapBg}%, transparent)`,
    borderColor: `color-mix(in oklab, currentColor ${border}%, transparent)`,
  };

  const blockStyle: React.CSSProperties = {
    backgroundColor: `color-mix(in oklab, currentColor ${block}%, transparent)`,
  };

  const item = (wClass: string) => (
    <div
      className={`flex justify-start items-center p-2 rounded-lg border shadow-sm backdrop-blur-[2px] ${wClass}`}
      style={wrapStyle}
    >
      <div className="h-11 w-11 rounded-md" style={blockStyle} />
      <div className="px-2 rounded-md h-4 ms-3 w-24 sm:w-32" style={blockStyle} />
    </div>
  );

  return (
    <div
      className={`flex transition-all duration-200 gap-3 absolute overflow-hidden ${toneClass} ${
        isReplaced ? "-left-4 group-hover:-left-36" : "-right-8 group-hover:-right-40"
      } ${classes}`}
    >
      {item("")}
      {item("")}
      {item("")}
      {item("hidden sm:flex")}
      {item("hidden md:flex")}
    </div>
  );
};
