// components/CampaignShowcaseSection.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import TrustedLogosAnimation from "./TrustedLogosAnimations";

export const BRAND_IMAGES: { imageSrc: string }[] = [
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b720e278d278fe3721f5_framer.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdbe5ac9f5bee12bbe_image%2080.avif",
  },
  // {
  //   imageSrc:
  //     "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67ab9dcd0f694616a4ad44bf_Ripplinglogo.avif",
  // },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec3da0554e7583437e50_Pika.png",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec5afa92c45dcee063bd_Tavus.png",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd1c59cbfc2851afc5_Frame-1.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd8f80679c4ad96f2c_Frame-2.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b7401c894092087d3170_scale.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eea556429202526d8f511_Figma.png",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdd593d7389f1e48a8_image%2075.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec07687d8b7d9f92084d_GraphiteLogo-p-500.png",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eebe3e73220bad80bd9cf_ElevenLabs-p-500.png",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b6e9b75902ba3cf186b8_replit.avif",
  },
  {
    imageSrc:
      "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd4133943d0ca43d21_Frame-4.avif",
  },
];

const LOTTIE_URL =
  "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6717a03c300215278d82e97a_Passionfroot-header-animation_2.json";

const VIMEO_URL = "https://vimeo.com/1023891531?fl=pl&fe=cm";

// ✅ module-level cache to avoid re-fetching (fast + stable)
let __lottiePromise: Promise<any> | null = null;
let __lottieDataPromise: Promise<any> | null = null;

const LOGO_IMAGES: { imageSrc: string }[] = [
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b720e278d278fe3721f5_framer.avif" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdbe5ac9f5bee12bbe_image%2080.avif" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67ab9dcd0f694616a4ad44bf_Ripplinglogo.avif" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec3da0554e7583437e50_Pika.png" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec5afa92c45dcee063bd_Tavus.png" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd1c59cbfc2851afc5_Frame-1.avif" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd8f80679c4ad96f2c_Frame-2.avif" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b7401c894092087d3170_scale.avif" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eea556429202526d8f511_Figma.png" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcdd593d7389f1e48a8_image%2075.avif" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eec07687d8b7d9f92084d_GraphiteLogo-p-500.png" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/691eebe3e73220bad80bd9cf_ElevenLabs-p-500.png" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/68b1b6e9b75902ba3cf186b8_replit.avif" },
  { imageSrc: "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f4efcd4133943d0ca43d21_Frame-4.avif" },
];

export default function CampaignShowcaseSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-[#fbf8f2]">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-14 pt-8">
        {/* Orange dashboard card */}
        <div className="relative rounded-[18px] bg-[#ff9855] shadow-[0_18px_35px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
          <LottieOnce url={LOTTIE_URL} />

          {/* ✅ Play button overlay (same vibe as screenshot) */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Play video"
            className={[
              "group absolute z-20",
              "left-[51%] top-[54%] -translate-x-1/2 -translate-y-1/2", // tweak if needed
              "select-none",
            ].join(" ")}
          >
            <span
              className={[
                "grid h-[78px] w-[78px] place-items-center rounded-full",
                "bg-[#8A8A8A]/90",
                "shadow-[0_18px_30px_rgba(0,0,0,0.25)]",
                "ring-1 ring-white/25",
                "backdrop-blur-[2px]",
                "transition",
                "group-hover:scale-[1.02]",
                "group-active:scale-[0.98]",
              ].join(" ")}
            >
              <Icon icon="mdi:play" className="ml-[3px] h-10 w-10 text-white" />
            </span>
          </button>
        </div>

        {/* caption */}
        <p className="mt-12 text-center text-[1rem] font-nunito leading-[1.4] text-[#4e4d46]">
          Powering thousands of marketing teams at the fastest growing companies
          in tech
        </p>

        <TrustedLogosAnimation
                logos={BRAND_IMAGES}
                imageKey="imageSrc"
                imgClass="h-12 md:h-16"
                wrapperHeight="h-16 md:h-24 mt-8"
              />
      </div>

      {/* modal */}
      <VideoModal open={open} onClose={() => setOpen(false)} vimeoUrl={VIMEO_URL} />
    </section>
  );
}

/** ✅ Plays ONE time only (no loop, no re-play on scroll) */
function LottieOnce({
  url,
  holdAt = 0.985, // ✅ hold at 98.5% (prevents “fade to nothing” endings)
}: {
  url: string;
  holdAt?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<any>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    let destroyed = false;

    (async () => {
      if (!__lottiePromise) __lottiePromise = import("lottie-web").then((m) => m.default);
      if (!__lottieDataPromise) __lottieDataPromise = fetch(url).then((r) => r.json());

      const [lottie, animationData] = await Promise.all([__lottiePromise, __lottieDataPromise]);
      if (destroyed || !containerRef.current) return;

      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData,
        rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
      });

      animRef.current = anim;

      anim.addEventListener("complete", () => {
        // ✅ freeze slightly before the end (handles “fade out” endings)
        const total = anim.totalFrames ?? 0;
        const safeHoldFrame = Math.max(
          0,
          Math.min(total - 1, Math.floor(total * holdAt))
        );

        try {
          anim.goToAndStop(safeHoldFrame, true);
        } catch { }
      });
    })();

    return () => {
      destroyed = true;
      animRef.current?.destroy?.();
      animRef.current = null;
    };
  }, [url, holdAt]);

  return (
    <div className="relative overflow-hidden rounded-[12px]">
      <div ref={containerRef} className="aspect-[1400/520] w-full" />
    </div>
  );
}


function VideoModal({
  open,
  onClose,
  vimeoUrl,
}: {
  open: boolean;
  onClose: () => void;
  vimeoUrl: string;
}) {
  // lock scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // esc close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const embedSrc = toVimeoEmbed(vimeoUrl);

  return (
    <div className="fixed inset-0 z-[300]">
      <div className="absolute inset-0 bg-black/55" onMouseDown={onClose} />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div
          className={[
            "relative w-full max-w-[980px]",
            "rounded-[14px] bg-[#fbf8f2]",
            "shadow-[0_40px_90px_rgba(0,0,0,0.35)]",
            "ring-1 ring-black/10",
          ].join(" ")}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className={[
              "absolute -right-8 -top-8 z-10",
              "grid h-10 w-10 place-items-center rounded-full bg-white",
              "shadow-[0_14px_28px_rgba(0,0,0,0.20)] ring-1 ring-black/10",
              "hover:bg-white",
            ].join(" ")}
            aria-label="Close"
          >
            <Icon icon="mdi:close" className="h-5 w-5 text-[#222]" />
          </button>

          <div className="overflow-hidden rounded-[14px]">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-[12px] bg-black">
              <iframe
                key={embedSrc}
                src={embedSrc}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function toVimeoEmbed(url: string) {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  const id = match?.[1] || "";
  return `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&title=0&byline=0&portrait=0`;
}

function LogoMarquee({
  items,
  durationSec = 30,
}: {
  items: { imageSrc: string }[];
  durationSec?: number;
}) {
  const doubled = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="marqueeTrack flex w-max items-center gap-12 py-4"
        style={{ ["--marquee-duration" as any]: `${durationSec}s` }}
      >
        {doubled.map((it, idx) => (
          <div key={`${it.imageSrc}-${idx}`} className="relative h-7 w-[120px] shrink-0 opacity-70">
            <Image src={it.imageSrc} alt="" fill sizes="120px" className="object-contain" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marqueeTrack {
          animation: marquee var(--marquee-duration, 30s) linear infinite;
        }
      `}</style>
    </div>
  );
}
