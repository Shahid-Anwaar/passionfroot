// components/CampaignShowcaseSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

const LOTTIE_URL =
  "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6717a03c300215278d82e97a_Passionfroot-header-animation_2.json";

// ✅ your requested format
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
  return (
    <section className="w-full bg-[#fbf8f2]">
      <div className="mx-auto w-full max-w-[1240px] px-6 pb-14 pt-8">
        {/* Orange dashboard animation card */}
        <div className="rounded-[18px] bg-[#ff9855] shadow-[0_18px_35px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
          <LottieOnceInView url={LOTTIE_URL} />
        </div>

        {/* Caption */}
        <p className="mt-10 text-center text-[15px] leading-[1.55] text-[#222]/75">
          Powering thousands of marketing teams at the fastest growing companies in tech
        </p>

        {/* Logos marquee */}
        <LogoMarquee items={LOGO_IMAGES} durationSec={30} />
      </div>
    </section>
  );
}

function LottieOnceInView({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<any>(null);
  const initRef = useRef(false);

  useEffect(() => {
    if (initRef.current) return; // avoid double-init in React Strict Mode dev
    initRef.current = true;

    let destroyed = false;
    let observer: IntersectionObserver | null = null;

    (async () => {
      const [{ default: lottie }, res] = await Promise.all([import("lottie-web"), fetch(url)]);
      const animationData = await res.json();

      if (destroyed || !containerRef.current) return;

      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
        },
      });

      let played = false;
      observer = new IntersectionObserver(
        (entries) => {
          if (played) return;
          if (entries.some((e) => e.isIntersecting)) {
            played = true;
            animRef.current?.goToAndPlay(0, true);
            observer?.disconnect();
          }
        },
        { threshold: 0.35 }
      );

      observer.observe(containerRef.current);
    })();

    return () => {
      destroyed = true;
      observer?.disconnect();
      animRef.current?.destroy?.();
      animRef.current = null;
    };
  }, [url]);

  return (
    <div className="relative overflow-hidden rounded-[18px]">
      {/* Lottie viewbox is 1360x504 (from your file) */}
      <div ref={containerRef} className="aspect-[1360/504] w-full" />
    </div>
  );
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
          <div
            key={`${it.imageSrc}-${idx}`}
            className="relative h-7 w-[120px] shrink-0 opacity-70"
          >
            <Image
              src={it.imageSrc}
              alt=""
              fill
              sizes="120px"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* local CSS so you don't need tailwind config */}
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
