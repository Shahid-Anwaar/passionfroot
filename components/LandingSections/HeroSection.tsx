// components/HeroSection.tsx
"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import TrustedLogosAnimation from "./TrustedLogosAnimations";

const BRAND_IMAGES: { imageSrc: string }[] = [
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

export default function HeroSection({
  label= "THE LARGEST B2B INFLUENCER PLATFORM",
  title= "Where B2B brands scale influencer marketing",
  isShowImg = true,
  companiesTitle = "Powering thousands of marketing teams at the fastest growing companies in tech",
  subTitle= "The fastest and easiest way to do influencer marketing at scale. Find the right creators on all platforms, book, collaborate, and pay all in one place."
}: {label?: string, title?: string, isShowImg?: boolean, companiesTitle?: string, subTitle?: string}) {
  return (
    <section className="w-full bg-[#fdfdfb] pt-16 sm:pt-16">
      <div className="mx-auto w-full max-w-245 px-4 sm:px-6 pt-16 sm:pt-27.5 pb-5 sm:pb-14 text-center">
        {/* Eyebrow */}
        <div className="text-[0.85rem] sm:text-[1.025rem] font-nunito font-medium tracking-[0.08em] text-[#737373]">
          {label}
        </div>
        <h1 className="mt-4 sm:mt-5 font-serif text-[2.1rem] sm:text-[3.5rem] md:text-[64px] font-medium leading-[115%] tracking-[-1.14px] text-[#111]">
          {title}
        </h1>
        <p className="mx-auto mt-5 sm:mt-7 max-w-185 font-medium text-[1rem] sm:text-[1.125rem] leading-[150%] text-[#4e4d46]">
          {subTitle}
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <Link
            href="#"
            className={["first-btn", "py-3 w-full sm:w-65"].join(" ")}
          >
            Talk To Us
            <Icon icon="ep:right" className="h-5 w-5 text-white" />
          </Link>

          <Link
            href="#"
            className={[
              "inline-flex items-center justify-center",
              "py-3 text-[1.05rem] sm:text-[1.125rem] w-full sm:w-45 rounded-[10px]",
              "border border-black/70 bg-white/70",
              "font-bold text-[#111]",
              "shadow-[0_10px_16px_rgba(0,0,0,0.06)]",
              "hover:bg-white",
              "active:translate-y-",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
            ].join(" ")}
          >
            Contact Sale
          </Link>
        </div>
      </div>
      <div className="mx-auto w-full max-w-360 px-6 pb-14">
        {isShowImg && <div className="relative rounded-[18px] min-h-125 pt-7 bg-[#ff9855] shadow-[0_18px_35px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
          <Image
            src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66ffc856a3dea87d6283a0ca_Frame%20427323371%20(1).avif"
            alt="Creators parade illustration"
            width={500}
            height={400}
            priority
            className="object-contain h-full w-auto min-h-125 mx-auto rounded-t-lg mt-8 overflow-hidden"
          />
        </div>}
        <p className="mt-12 text-center text-[1rem] font-nunito leading-[1.4] text-[#4e4d46]">
          {companiesTitle}
        </p>
        <TrustedLogosAnimation
          logos={BRAND_IMAGES}
          imageKey="imageSrc"
          imgClass="h-10 md:h-12"
          wrapperHeight="h-14 md:h-20 mt-8"
        />
      </div>
    </section>
  );
}
