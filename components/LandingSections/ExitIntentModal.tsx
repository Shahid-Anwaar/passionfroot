"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const key = "exit_modal_shown";
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(key) === "1") return;

    const onMouseLeave = (e: MouseEvent) => {
      // trigger when cursor leaves top
      if (e.clientY <= 0) {
        sessionStorage.setItem(key, "1");
        setOpen(true);
      }
    };

    window.addEventListener("mouseleave", onMouseLeave);
    return () => window.removeEventListener("mouseleave", onMouseLeave);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-5">
      <div className="w-full max-w-lg rounded-xl border border-white/10 bg-zinc-950 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-orange-200">Free guide</div>
            <div className="mt-1 text-2xl font-extrabold text-white">Creator partnership starter kit</div>
            <p className="mt-2 text-sm text-zinc-300">
              Get a simple template + checklist to launch your first campaign without guesswork.
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-xl bg-white/5 p-2 hover:bg-white/10"
            aria-label="Close"
          >
            <Icon icon="mdi:close" className="h-5 w-5 text-white/70" />
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/get-access"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-white/90 transition"
          >
            Get access <Icon icon="mdi:arrow-right" className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
