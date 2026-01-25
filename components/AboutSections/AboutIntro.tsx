// components/AboutIntroSection.tsx
import Image from "next/image";

type Props = {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
};

export default function AboutIntroSection({
  imageSrc = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
  title = "Helping creators and\nbrands to grow",
  subtitle = "All-in-one platform to collaborate, manage partnerships, and grow revenue—without the messy spreadsheets.",
}: Props) {
  return (
    <section className="bg-[#F6F2E8]">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16 text-center md:py-24">
        <div className="relative mb-10 h27.5 w-45 md:h-35 md:w-[220px]">
          <Image
            src={imageSrc}
            alt="Creators and brands illustration"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="whitespace-pre-line font-serif text-4xl leading-[1.05] tracking-tight text-neutral-900 md:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-800 md:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
