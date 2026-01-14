// components/CampaignFeatureGridSection.tsx
import Image from "next/image";

type FeatureItem = {
  image: string; // e.g. "/f1.png" (place in /public/images)
  title: string;
  description: string;
};

// ✅ Static content (only image, title, description)
const FEATURES: FeatureItem[] = [
  {
    image: "/f1.png",
    title: "Design and run your campaign",
    description:
      "Build your creator roster, then deploy and manage your creator campaign at scale from one integrated cockpit.",
  },
  {
    image: "/f2.png",
    title: "Publish your own live campaign",
    description:
      "Tired of outreach? Publish your campaign with your creator requirements and let relevant creators apply and come to you!",
  },
  {
    image: "/f3.png",
    title: "Book ad slots directly",
    description:
      "Skip the scheduling back-and-forth – book open slots directly in creators’ calendars.",
  },
  {
    image: "/f4.png",
    title: "Scale your outreach and connect directly in-app",
    description:
      "Passionfroot is not a database; it’s the largest B2B creator network in the world. This means you can book all creators directly from your campaign. No more email outreach or ghosted DMs.",
  },
];

export default function CampaignFeatureGridSection() {
  return (
    <section className="w-full bg-linear-to-b from-[#f5f3ea] to-[#FAFAF7] py-14">
      <div className="mx-auto w-full max-w-[1400px] px-6">
        <h2 className="text-center font-serif text-[34px] font-semibold leading-[1.15] text-[#111] sm:text-[40px]">
          Build and run your <br />
          campaign – at scale.
        </h2>

        <div className="mt-10 grid grid-cols-12 gap-6 md:grid-cols-12">
          {FEATURES.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-[12px] col-span-12 bg-white p-5 shadow-[0_2px_0_rgba(0,0,0,0.06)] ring-1 ring-black/5  ${idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5"}`}
            >
              <div className="rounded-[10px] bg-[#DCEEFF]  ring-1 ring-black/5">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="h-auto w-full rounded-[8px]"
                  priority={idx < 2}
                />
              </div>

              <h3 className="mt-5 text-[16px] font-semibold leading-snug text-[#111]">
                {item.title}
              </h3>
              <p className="mt-2 text-[12.5px] leading-[1.55] text-[#111]/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
