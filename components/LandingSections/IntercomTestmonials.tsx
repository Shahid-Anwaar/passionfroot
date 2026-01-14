// components/IntercomTestimonialSection.tsx
import Image from "next/image";

export default function IntercomTestimonialSection() {
  return (
    <section className="w-full bg-[#FCFCFB]">
      {/* fixed height to match screenshot */}
      <div className="mx-auto h-[501px] w-full max-w-[1575px]">
        <div className="flex h-full flex-col items-center">
          {/* Top logo row */}
          <div className="pt-[110px]">
            <div className="flex items-center justify-center gap-[10px]">
              <div className="grid h-[30px] w-[30px] place-items-center rounded-[6px] bg-[#111111]">
                <IntercomMark className="h-[24px] w-[24px]" />
              </div>
              <span className="text-[15px] font-semibold tracking-[0.16em] text-[#111111]">
                INTERCOM
              </span>
            </div>
          </div>

          {/* Quote */}
          <p className="mt-[56px] max-w-[920px] px-6 text-center font-serif text-[34px] font-medium leading-[1.25] tracking-[-0.01em] text-[#111111]">
            &ldquo;Partnering with creators through Passionfroot has
            been a game-changer for Intercom&rsquo;s Startup program.
            By collaborating with top newsletters, we&rsquo;ve reached
            thousands of founders.&rdquo;
          </p>

          {/* Author */}
          <div className="mt-[38px] flex items-center justify-center gap-[12px]">
            <Avatar />
            <div className="text-left">
              <div className="text-[16px] font-semibold leading-[1.2] text-[#111111]">
                John Roche
              </div>
              <div className="mt-[3px] text-[14px] leading-[1.2] text-[#111111]/90">
                Startups and VC Partnerships at Intercom
              </div>
            </div>
          </div>

          {/* bottom breathing space like screenshot */}
          <div className="flex-1" />
        </div>
      </div>
    </section>
  );
}

/* --------- Small pieces (pixel-perfect helpers) ---------- */

function IntercomMark({ className = "" }: { className?: string }) {
  // Simple “bars” mark (matches the screenshot vibe)
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3.5" y="5.2" width="2.2" height="13.6" rx="1.1" fill="#fff" />
      <rect x="7.6" y="4.2" width="2.2" height="15.6" rx="1.1" fill="#fff" />
      <rect x="11.7" y="3.6" width="2.2" height="16.8" rx="1.1" fill="#fff" />
      <rect x="15.8" y="4.6" width="2.2" height="14.8" rx="1.1" fill="#fff" />
      <rect x="19.9" y="6.2" width="2.2" height="11.6" rx="1.1" fill="#fff" />
    </svg>
  );
}

function Avatar() {
  // Replace this with your real avatar image later if you want.
  // This keeps the layout pixel-perfect (40×40 circle) like the screenshot.
  return (
    <div className="relative h-[40px] w-[40px] overflow-hidden rounded-full ring-1 ring-black/10">
      <div className="absolute inset-0 bg-[conic-gradient(from_210deg,#FF9A4A_0_48%,#111111_48%_100%)]" />
      <div className="absolute inset-[3px] rounded-full bg-white/95" />
      {/* simple head silhouette */}
      <div className="absolute inset-0 grid place-items-center">
        <Image
          src="https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66fe19a50d7885244b82e491_Frame%2010123293.avif"
          alt="Avatar"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
