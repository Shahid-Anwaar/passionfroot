// components/AllAppsAgentsSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

type Feature = {
  title: "Projects" | "Docs" | "Brain" | "Chat";
  image: string;
  tint: string;
};

type Tile = {
  label?: string;
  icon?: string;
  faded?: boolean;
  type?: "icon" | "image" | "spacer";
  image?: string;
};

type Props = {
  heading?: React.ReactNode;
  subheading?: string;
  features: Feature[];
  tiles: Tile[];
  className?: string;
};

const COLS = 10;
const ROWS = 8;

export default function AllAppsAgentsSection({
  heading = (
    <>
      All apps, AI Agents,
      <br />
      and humans in ClickUp.
    </>
  ),
  subheading = "100+ products to replace fragmented software & maximize human productivity.",
  features,
  tiles,
  className = "",
}: Props) {
  const total = COLS * ROWS;
  const cells = tiles.slice(0, total);
  while (cells.length < total) cells.push({});

  // ✅ slightly smaller height on lg+ (still taller than before)
  const CELL_H =
    "h-[63px] sm:h-[74px] md:h-[86px] lg:h-[103px] xl:h-[112px] 2xl:h-30";

  return (
    <section className={["w-full bg-white py-12 sm:py-16 lg:py-20", className].join(" ")}>
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-190 text-center">
          <h2 className="text-7 sm:text-10 md:text-[46px] lg:text-[52px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#111]">
            {heading}
          </h2>
          <p className="mt-3 text-3 sm:text-[13px] lg:text-[14px] font-medium text-neutral-500">
            {subheading}
          </p>
        </div>

        {/* Grid */}
        <div className="relative mt-3 sm:mt-4 lg:mt-0">
          <div className="relative mx-auto w-full max-w-260 lg:max-w-295">
            {/* ✅ responsive scroll on small */}
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="min-w-245 sm:min-w-260 lg:min-w-0">
                <div className="relative">
                  <div className="grid grid-cols-10 grid-rows-8 w-full border-t border-neutral-200/70">
                    {cells.map((c, i) => {
                      const r = Math.floor(i / COLS);
                      const col = i % COLS;

                      const isEdge =
                        r === 0 || r === ROWS - 1 || col === 0 || col === COLS - 1;

                      // only edges get fade
                      const edgeOpacity = c.faded ? 0.35 : 0.6; // adjust as you like
                      const opacity = isEdge ? edgeOpacity : 1;

                      if (c.type === "spacer") {
                        return (
                          <div
                            key={i}
                            className={`${CELL_H} relative border-r border-b border-neutral-200/70 bg-white`}
                          />
                        );
                      }
                      if (c.type === "icon") {
                        return (
                          <div
                            key={i}
                            className={`${CELL_H} group relative border-r border-b border-neutral-200/70 bg-white hover:border hover:border-gray-800`}
                          >
                            {c.label && c.icon ? generationIcon(c, opacity) : null}
                          </div>
                        );
                      }
                      return (
                        <div
                          key={i}
                          className={`${CELL_H} relative border-r border-b border-neutral-200/70 bg-white`}
                        >
                          {(c.image || c.icon) && (
                            <div
                              className={`absolute w-[200%] h-[200%] z-10 hover:z-20 hover:shadow-xl flex flex-col items-center justify-center left-0 top-0 bg-linear-to-b
                              ${i === 23 || i === 43 ? "from-red-50 to-white" : "from-green-50 to-white"}`}
                            >
                              {c.image && (
                                <Image
                                  src={c.image}
                                  alt={c.label ?? "tile"}
                                  width={520}
                                  height={320}
                                  unoptimized
                                  draggable={false}
                                  className="h-22 sm:h-26.25 md:h-28.75 lg:h-36.25 xl:h-39.5 2xl:h-42.5 w-auto object-contain"
                                />
                              )}
                              <div className="mt-2 flex items-center justify-center gap-2 text-center">
                                {c.icon && (
                                  <Icon
                                    icon={c.icon}
                                    className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-[#242449]"
                                  />

                                )}
                                <div className="font-semibold font-sans text-[14px] sm:text-[16px] lg:text-5 text-[#242449]">
                                  {c.label}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_46%,rgba(255,255,255,0.72)_80%,rgba(255,255,255,0.92)_100%)]" /> */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-white via-white/50 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-white via-white/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function generationIcon(c: any, opacity: number) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center" style={{ opacity }}>
      <Icon
        icon={c.icon}
        className="h-4.5 w-4.5 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-500 group-hover:text-gray-950"
      />
      <div className="whitespace-pre-line text-2.5 sm:text-[11px] lg:text-3 font-medium leading-tight text-gray-500 group-hover:text-gray-950">
        {c.label}
      </div>
    </div>
  );
}
