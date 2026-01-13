import Link from "next/link";
import { Icon } from "@iconify/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Header() {
  return (
    <header className={`${inter.className} w-full bg-[#FCFCFA]`}>
      <div className="mx-auto max-w-[1400px] px-12 pt-6">
        <div className="flex items-start justify-between">
          {/* Left pill */}
          <div className="inline-flex items-center gap-8 rounded-2xl border border-black/10 bg-white px-5 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.07)]">
            <Link
              href="/"
              className="text-[18px] font-extrabold tracking-tight text-[#111]"
            >
              passionfroot
            </Link>
|
            <nav className="flex items-center gap-7">
              <Link
                href="#"
                className=" inline-flex items-center gap-1.5 text-[13px] font-medium text-[#3A3A3A]"
              >
                For Brands
                <Icon
                  icon="mdi:chevron-down"
                  className="text-[16px] text-[#6B6B6B]"
                />
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#3A3A3A]"
              >
                For Creators
                <Icon
                  icon="mdi:chevron-down"
                  className="text-[16px] text-[#6B6B6B]"
                />
              </Link>
            </nav>
          </div>

          {/* Right pill */}
          <div className="inline-flex items-center rounded-2xl border border-black/10 bg-white px-5 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.07)]">
            <nav className="flex items-center gap-7">
              <Link
                href="#"
                className="text-[13px] font-medium text-[#3A3A3A]"
              >
                About
              </Link>

              <Link
                href="#"
                className="text-[13px] font-medium text-[#3A3A3A]"
              >
                Careers
              </Link>

              <div className="mx-1 h-4 w-px bg-black/15" />

              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#3A3A3A]"
              >
                Login
                <Icon
                  icon="mdi:chevron-down"
                  className="text-[16px] text-[#6B6B6B]"
                />
              </Link>
            </nav>

            <Link
              href="#"
              className="relative ml-5 inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#2A2A2A] to-[#111111] px-4 text-[13px] font-semibold text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] ring-1 ring-white/10"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-white/25" />
              Get access
              <Icon icon="mdi:arrow-right" className="text-[16px]" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
