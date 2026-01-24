// components/ContextSection.tsx
import Image from "next/image";

export type ContextItem = {
  image: string; // full illustration image for each column
  title: string;
  description: string;
};

type Props = {
  heading: React.ReactNode;
  subheading?: string;
  items: ContextItem[];
  className?: string;
};

export default function ContextSection({
  heading,
  subheading,
  items,
  className = "",
}: Props) {
  return (
    <section className={["w-full bg-white py-12 sm:py-16", className].join(" ")}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="tracking-[-0.02em] text-center font-serif text-[26px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.12] text-[#111] sm:leading-[1.12]">
            {heading}
          </h2>

          {subheading ? (
            <p className="mt-3 sm:mt-4 text-[14px] sm:text-[18px] font-medium text-neutral-500">
              {subheading}
            </p>
          ) : null}
        </div>

        {/* Items */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="relative">
              {/* ✅ Image (full, not icon) */}
              <div className="relative mx-auto h-[160px] w-full max-w-[360px] sm:h-[190px] md:h-[210px]">
                <Image
                  src={item.image}
                  alt={`${item.title} illustration`}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 92vw, 360px"
                  draggable={false}
                  className="select-none object-contain"
                />
              </div>

              {/* Text + connector */}
              <div className="relative mt-8 pl-8 sm:pl-9">
                {/* connector: small vertical + diagonal + long vertical */}
                <span className="absolute left-3 -top-10 h-10 w-px bg-neutral-200 sm:-top-12 sm:h-12" />
                <span className="absolute left-3 -top-10 h-px w-12 -rotate-45 origin-left bg-neutral-200 sm:-top-12 sm:w-14" />
                <span className="absolute left-3 top-0 bottom-0 w-px bg-neutral-200/80" />

                <h3 className="text-[20px] sm:text-[22px] font-semibold tracking-[-0.01em] text-neutral-900">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[32ch] text-[14px] sm:text-[16px] leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
