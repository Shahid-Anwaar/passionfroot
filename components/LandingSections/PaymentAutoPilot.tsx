import Image from "next/image";
import { Icon } from "@iconify/react";
import { EmptySkelton } from "@/CustomComponents/EmptySkeletons";

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
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Title with orange highlight */}
        <h2 className="text-center font-serif font-semibold leading-[1.05] text-black text-[26px] sm:text-[44px] lg:text-[50px]">
          <span className="px-2 py-1 box-decoration-clone">
            Put creator payments &amp;
          </span>
          <br className="hidden sm:block" />
          <span className="px-2 py-1 box-decoration-clone">
            results on auto-pilot
          </span>
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.18fr_1fr]">
          {/* LEFT: Pay quickly and safely */}
          <div className="rounded-[14px] border border-black/10 bg-white p-5 sm:p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)] flex flex-col">
            <h3 className="text-[22px] font-semibold font-serif text-black">
              Pay quickly and safely
            </h3>
            <p className="mt-2 max-w-[520px] text-[16px] leading-[1.55] text-black/60">
              Pay one provider - not hundreds. Enjoy worldwide creator payments for
              seamless and secure transactions - your finance team will love you.
            </p>

            <div className="relative h-full w-full mt-3 group overflow-hidden rounded-[10px] bg-[#64e293] ring-1 ring-black/5">
              <div className="absolute w-full h-full bg-[#64e293]">
                <EmptySkelton classes="top-0" />
                <EmptySkelton classes="top-20" isReplaced={false} />
                <EmptySkelton classes="top-40" />
                <EmptySkelton classes="top-60" isReplaced={false} />
                <EmptySkelton classes="top-80" />
                <EmptySkelton classes="top-100" isReplaced={false} />
                <EmptySkelton classes="top-120" />
                <EmptySkelton classes="top-140" isReplaced={false} />
                <EmptySkelton classes="top-160" />
                <EmptySkelton classes="top-180" isReplaced={false} />
              </div>
              <div className="h-full w-full flex justify-center items-center">
                <Image
                  src={"https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67061c285f69a857cc8bab68_Frame%20427323439.png"}
                  alt={"/44.png"}
                  width={1200}
                  height={650}
                  className={[
                    "w-full object-fill z-10 max-w-md sm:max-w-xs group-hover:scale-105 transition-all duration-200",
                    "h-[140px] sm:h-[180px] md:h-[200px] my-12 rounded-lg",
                  ].join(" ")}
                />
              </div>
              {/* {children} */}
            </div>
            {/* Map / globe card */}
            {/* <div className="relative mt-5 flex-1 min-h-[360px] sm:min-h-[400px] overflow-hidden rounded-[12px] ">
              <Image
                src={"/44.png"}
                alt=""
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-fill"
                priority={false}
              />
            </div> */}
          </div>

          {/* RIGHT column */}
          <div className="flex flex-col gap-6">
            {/* Top: Measure returns effortlessly */}
            <div className="rounded-[14px] border border-black/10 bg-white p-5 sm:p-6 shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
              {/* <div className="relative h-[250px] overflow-hidden rounded-[12px]">
                <Image
                  src={"/33.png"}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-fill"
                />

              </div> */}
              <div className="relative h-full max-h-[250px] w-full mt-3 group overflow-hidden rounded-[10px] bg-[#64e293] ring-1 ring-black/5">
                <div className="absolute w-full h-full bg-[#64e293]">
                  <EmptySkelton classes="top-0" />
                  <EmptySkelton classes="top-20" isReplaced={false} />
                  <EmptySkelton classes="top-40" />
                  <EmptySkelton classes="top-60" isReplaced={false} />
                  <EmptySkelton classes="top-80" />
                  <EmptySkelton classes="top-100" isReplaced={false} />
                  <EmptySkelton classes="top-120" />
                  <EmptySkelton classes="top-140" isReplaced={false} />
                  <EmptySkelton classes="top-160" />
                  <EmptySkelton classes="top-180" isReplaced={false} />
                </div>
                <div className="h-full w-full flex justify-center items-center">
                  <Image
                    src={"https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67061c285f69a857cc8bab68_Frame%20427323439.png"}
                    alt={"/44.png"}
                    width={1200}
                    height={650}
                    className={[
                      "w-full object-fill z-10 max-w-md sm:max-w-xs group-hover:scale-105 transition-all duration-200",
                      "h-[140px] sm:h-[180px] md:h-[200px] my-12 rounded-lg",
                    ].join(" ")}
                  />
                </div>
                {/* {children} */}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <h3 className="text-[22px] font-semibold font-serif text-black">
                  Measure returns effortlessly
                </h3>
                <span className="rounded-full border border-[#2BBF6A]/35 bg-[#E9FFF3] px-2 py-0.5 text-[10px] font-semibold text-[#1B8F4E]">
                  Coming Soon
                </span>
              </div>

              <p className="mt-2 text-[16px] leading-[1.55] text-black/60">
                Get results reported directly in your chat so you can take the guess-work
                out of creator marketing - and be the marketing hero in your company.
              </p>
            </div>

            {/* Bottom: Testimonial */}
            <div className="overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Left green portrait panel */}
                {/* <div className="relative bg-[#63E294]">
                  <div className="relative h-[400px] sm:h-full min-h-[400px]">
                    <Image
                      src={"https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6708d9b8608f63ed5f8c9642_testimonial-pic-item.avif"}
                      alt="Lisa"
                      fill
                      sizes="(min-width: 640px) 210px, 100vw"
                      className="object-cover grayscale contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                  </div>
                </div> */}
                <div className="relative h-full  w-full mt-3 group overflow-hidden rounded-[10px] bg-[#64e293] ring-1 ring-black/5">
                <div className="absolute w-full h-full bg-[#64e293]">
                  <EmptySkelton classes="top-0" />
                  <EmptySkelton classes="top-20" isReplaced={false} />
                  <EmptySkelton classes="top-40" />
                  <EmptySkelton classes="top-60" isReplaced={false} />
                  <EmptySkelton classes="top-80" />
                  {/* <EmptySkelton classes="top-100" isReplaced={false} />
                  <EmptySkelton classes="top-120" />
                  <EmptySkelton classes="top-140" isReplaced={false} />
                  <EmptySkelton classes="top-160" />
                  <EmptySkelton classes="top-180" isReplaced={false} /> */}
                </div>
                <div className="h-full w-full flex justify-center items-center">
                  <Image
                    src={"https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67061c285f69a857cc8bab68_Frame%20427323439.png"}
                    alt={"/44.png"}
                    width={1200}
                    height={650}
                    className={[
                      "w-full object-fill z-10 max-w-md sm:max-w-64 group-hover:scale-105 transition-all duration-200",
                      "h-[140px] sm:h-[180px] md:h-[200px] my-12 rounded-lg",
                    ].join(" ")}
                  />
                </div>
                {/* {children} */}
              </div>

                {/* Right quote */}
                <div className="p-5 sm:p-6 flex h-full flex-col">
                  <Icon
                    icon="mdi:format-quote-open"
                    className="text-[40px] text-[#2BBF6A]"
                  />
                  <p className="mt-3 text-[18px] font-serif leading-[1.4] text-black">
                    Passionfroot helped us onboard procurement and now automates our creator
                    payouts globally. Our finance department loves it - and our marketing
                    team is free to focus on nailing our creator campaigns!
                  </p>

                  <div className="mt-auto">
                    <div className="text-[16px] font-semibold text-black">Lisa</div>
                    <div className="mt-0.5 text-[14px] text-black/60">
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
