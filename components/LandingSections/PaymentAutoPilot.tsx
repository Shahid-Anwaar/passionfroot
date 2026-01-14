import Image from "next/image";
import { Icon } from "@iconify/react";

const IMG_GRID =
  "https://images.unsplash.com/photo-1507572399997-724a4185f8b5?auto=format&fit=crop&w=1800&q=60";
const IMG_GREEN_BANNER =
  "https://images.unsplash.com/photo-1570556319138-3d1a2daf94d9?auto=format&fit=crop&w=1800&q=60";
const IMG_PORTRAIT =
  "https://images.unsplash.com/photo-1759021997535-d2854522c1d4?auto=format&fit=crop&w=1200&q=60";

function StatChip({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[10px] bg-white/95 px-3 py-2 shadow-[0_14px_26px_rgba(0,0,0,0.10)] ring-1 ring-black/10",
        className,
      ].join(" ")}
    >
      <div className="text-[10px] font-semibold text-black/55">{label}</div>
      <div className="mt-0.5 text-[12px] font-semibold text-black">{value}</div>
    </div>
  );
}

function DueCard({
  className = "",
  amount,
}: {
  className?: string;
  amount: string;
}) {
  return (
    <div
      className={[
        "w-[190px] rounded-[10px] bg-white/95 p-3 shadow-[0_18px_32px_rgba(0,0,0,0.10)] ring-1 ring-black/10",
        className,
      ].join(" ")}
    >
      <div className="inline-flex items-center rounded-[7px] bg-[#FFE6D8] px-2 py-[2px] text-[10px] font-semibold text-[#C65B22]">
        Due July 1
      </div>

      <div className="mt-2 flex items-center gap-2 text-[10px] text-black/55">
        <span>2× Sponsored Ad</span>
        <Icon icon="mdi:youtube" className="text-[12px]" />
      </div>

      <div className="mt-2 flex items-center justify-between text-[10px] text-black/60">
        <span>Total</span>
        <span className="text-[11px] font-semibold text-black">{amount}</span>
      </div>
    </div>
  );
}

function AvatarPin({
  className = "",
  src,
  ring = "ring-white/80",
}: {
  className?: string;
  src: string;
  ring?: string;
}) {
  return (
    <div
      className={[
        "absolute h-10 w-10 overflow-hidden rounded-full ring-2 shadow-[0_16px_30px_rgba(0,0,0,0.18)]",
        ring,
        className,
      ].join(" ")}
    >
      <Image src={src} alt="avatar" fill sizes="40px" className="object-cover" />
    </div>
  );
}

export default function PaymentsAutoPilotSection() {
  return (
    <section className="bg-[#FAFAF7] py-14 sm:py-16">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        {/* Title with orange highlight */}
        <h2 className="text-center font-serif text-[34px] sm:text-[44px] lg:text-[50px] font-semibold leading-[1.05] text-black">
          <span className=" px-2 py-1 box-decoration-clone">
            Put creator payments &amp;
          </span>
          <br />
          <span className=" px-2 py-1 box-decoration-clone">
            results on auto-pilot
          </span>
        </h2>

        {/* Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.18fr_1fr]">
          {/* LEFT: Pay quickly and safely */}
          <div className="rounded-[14px] border border-black/10 bg-white p-5 sm:p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)] flex flex-col">
            <h3 className="text-[14px] font-semibold text-black">
              Pay quickly and safely
            </h3>
            <p className="mt-2 max-w-[520px] text-[12.5px] leading-[1.55] text-black/60">
              Pay one provider - not hundreds. Enjoy worldwide creator payments for
              seamless and secure transactions - your finance team will love you.
            </p>

            {/* Map / globe card */}
            <div className="relative mt-5 flex-1 min-h-[360px] sm:min-h-[400px] overflow-hidden rounded-[12px] bg-[#63E294]">
              {/* soft texture */}
              <Image
                src={IMG_GRID}
                alt=""
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover opacity-[0.20]"
                priority={false}
              />

              {/* grid lines */}
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
                  backgroundSize: "58px 58px",
                }}
              />

              {/* globe arcs */}
              <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25" />
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18" />
              <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/14" />

              {/* pins + cards */}
              <AvatarPin
                className="left-[22%] top-[48%]"
                ring="ring-white/85"
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=60"
              />
              <AvatarPin
                className="left-[68%] top-[64%]"
                ring="ring-white/85"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=60"
              />
              <AvatarPin
                className="left-[52%] top-[76%]"
                ring="ring-white/85"
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=60"
              />

              <div className="absolute left-[20%] top-[26%]">
                <DueCard amount="USD 5525" />
              </div>

              <div className="absolute right-[14%] bottom-[22%]">
                <DueCard amount="USD 3500" />
              </div>

              {/* orange round icon */}
              <div className="absolute left-6 bottom-7 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FF9966] shadow-[0_18px_30px_rgba(0,0,0,0.14)] ring-1 ring-black/10">
                <Icon icon="mdi:cat" className="text-[22px] text-black/80" />
              </div>
            </div>
          </div>

          {/* RIGHT column */}
          <div className="flex flex-col gap-6">
            {/* Top: Measure returns effortlessly */}
            <div className="rounded-[14px] border border-black/10 bg-white p-5 sm:p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
              <div className="relative h-[150px] overflow-hidden rounded-[12px] bg-[#63E294]">
                <Image
                  src={IMG_GREEN_BANNER}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover opacity-[0.25]"
                />

                {/* right-side wave line */}
                <svg
                  className="absolute right-0 top-0 h-full w-[62%]"
                  viewBox="0 0 600 200"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,140 C80,80 150,160 230,110 C310,60 360,120 440,80 C510,45 560,55 600,35"
                    fill="none"
                    stroke="rgba(255,255,255,0.65)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>

                {/* small preview */}
                <div className="absolute left-1/2 top-1/2 h-[72px] w-[120px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[10px] bg-white/70 shadow-[0_16px_26px_rgba(0,0,0,0.10)] ring-1 ring-black/10">
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2">
                    <Icon icon="mdi:play" className="text-[16px] text-black/70" />
                  </div>
                </div>

                <StatChip className="absolute left-4 top-4" label="CPC" value="$3" />
                <StatChip className="absolute right-4 top-7" label="Eng rate" value="8.6%" />
                <StatChip className="absolute right-5 bottom-5" label="CPM" value="$12" />
                <StatChip className="absolute left-[44%] bottom-6" label="Performance" value="96" />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <h3 className="text-[14px] font-semibold text-black">
                  Measure returns effortlessly
                </h3>
                <span className="rounded-full border border-[#2BBF6A]/35 bg-[#E9FFF3] px-2 py-0.5 text-[10px] font-semibold text-[#1B8F4E]">
                  Coming Soon
                </span>
              </div>

              <p className="mt-2 text-[12.5px] leading-[1.55] text-black/60">
                Get results reported directly in your chat so you can take the guess-work
                out of creator marketing - and be the marketing hero in your company.
              </p>
            </div>

            {/* Bottom: Testimonial */}
            <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
              <div className="grid grid-cols-1 sm:grid-cols-[210px_1fr]">
                {/* Left green portrait panel */}
                <div className="relative bg-[#63E294]">
                  {/* doodle */}
                  <svg
                    className="absolute left-3 top-3 h-10 w-10 opacity-60"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M14 20c8-7 22-7 30 0M18 28c6-4 16-4 22 0M24 36c4-2 10-2 14 0"
                      stroke="rgba(0,0,0,0.35)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M38 14c2 6 7 9 12 10"
                      stroke="rgba(0,0,0,0.35)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="relative h-[240px] sm:h-full min-h-[240px]">
                    <Image
                      src={"https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6708d9b8608f63ed5f8c9642_testimonial-pic-item.avif"}
                      alt="Lisa"
                      fill
                      sizes="(min-width: 640px) 210px, 100vw"
                      className="object-cover grayscale contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Right quote */}
                <div className="p-5 sm:p-6">
                  <Icon
                    icon="mdi:format-quote-open"
                    className="text-[22px] text-[#2BBF6A]"
                  />
                  <p className="mt-3 text-[13px] leading-[1.65] text-black/80">
                    Passionfroot helped us onboard procurement and now automates our creator
                    payouts globally. Our finance department loves it - and our marketing
                    team is free to focus on nailing our creator campaigns!
                  </p>

                  <div className="mt-6">
                    <div className="text-[13px] font-semibold text-black">Lisa</div>
                    <div className="mt-0.5 text-[11.5px] text-black/60">
                      Senior Marketing Manager at Jina AI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
