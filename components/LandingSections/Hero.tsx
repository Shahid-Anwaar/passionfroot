import Link from "next/link";
import { Icon } from "@iconify/react";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600"] });

export default function Hero() {
  return (
    <section className="bg-[#FCFCFA]">
      <div className="mx-auto max-w-[1400px] px-12 pb-24 pt-28">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className={`${inter.className} text-[11px] font-semibold tracking-[0.22em] text-[#8A8A8A]`}
          >
            THE LARGEST B2B INFLUENCER PLATFORM
          </div>

          <h1
            className={`${playfair.className} mt-6 text-[64px] font-semibold leading-[1.02] tracking-[-0.01em] text-[#1A1A1A]`}
          >
            <span className="block">Where B2B brands scale</span>
            <span className="block">influencer marketing</span>
          </h1>

          <p
            className={`${inter.className} mx-auto mt-6 max-w-[620px] text-[14px] leading-[1.8] text-[#666666]`}
          >
            The fastest and easiest way to do influencer marketing at scale.
            <br />
            Find the right creators on all platforms, book, collaborate, and pay -
            all in one place.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="#"
              className={`${inter.className} relative inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#2A2A2A] to-[#111111] px-10 text-[13px] font-semibold text-white shadow-[0_14px_26px_rgba(0,0,0,0.18)] ring-1 ring-white/10`}
            >
              <span className="absolute inset-x-0 top-0 h-px bg-white/25" />
              Get access
              <Icon icon="mdi:arrow-right" className="text-[16px]" />
            </Link>

            <Link
              href="#"
              className={`${inter.className} inline-flex h-12 items-center justify-center rounded-xl border border-black/25 bg-white px-10 text-[13px] font-semibold text-[#1A1A1A] shadow-[0_10px_22px_rgba(0,0,0,0.06)]`}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
