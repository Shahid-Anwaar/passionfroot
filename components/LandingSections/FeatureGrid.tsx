// components/CampaignFeatureGridSection.tsx
import { EmptySkelton } from "@/CustomComponents/EmptySkeletons";
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
        <h2 className="text-center font-serif font-semibold leading-[1.15] text-[#111] text-[26px] sm:text-[34px] lg:text-[40px]">
          Build and run your <br className="hidden sm:block" />
          campaign – at scale.
        </h2>

        <div className="mt-10 grid grid-cols-12 gap-6 md:grid-cols-12">
          {FEATURES.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-[12px] col-span-12 bg-white p-5 shadow-[0_2px_0_rgba(0,0,0,0.06)] ring-1 ring-black/5  ${idx === 0 || idx === 3 ? "md:col-span-7" : "md:col-span-5"}`}
            >
              {/* <div className="relative group overflow-hidden rounded-[10px] min-h-[380px] bg-[#77e980]  ring-1 ring-black/5">
                <div className="h-full w-full flex justify-center items-center">
                  <Image
                    src={"https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67061c285f69a857cc8bab68_Frame%20427323439.png"}
                    alt={item.title}
                    width={1200}
                    height={650}
                    className={[
                      "w-full object-fill z-10 max-w-md sm:max-w-xs group-hover:scale-105 transition-all duration-200",
                      "h-[140px] sm:h-[180px] md:h-[200px] my-12 rounded-lg",
                    ].join(" ")}
                  />
                </div>
                <div className="absolute w-full h-full bg-[#68bcfc]">
                  <EmptySkelton classes="top-0" />
                  <EmptySkelton classes="top-20" isReplaced={false} />
                  <EmptySkelton classes="top-40" />
                  <EmptySkelton classes="top-60" isReplaced={false} />
                  <EmptySkelton classes="top-80" />
                  <EmptySkelton classes="top-100" isReplaced={false} />
                </div>
              </div> */}
              <div className="relative group overflow-hidden rounded-[10px] bg-[#68bbfc] ring-1 ring-black/5">
                              <div className="absolute w-full h-full bg-[#68bbfc]">
                                  <EmptySkelton classes="top-0" />
                                  <EmptySkelton classes="top-20" isReplaced={false} />
                                  <EmptySkelton classes="top-40" />
                                  <EmptySkelton classes="top-60" isReplaced={false} />
                                  <EmptySkelton classes="top-80" />
                                  <EmptySkelton classes="top-100" isReplaced={false} />
                              </div>
                              <div className="h-full w-full flex justify-center items-center">
                                  <Image
                                      src={"https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67061c285f69a857cc8bab68_Frame%20427323439.png"}
                                      alt={item.title}
                                      width={1200}
                                      height={650}
                                      className={[
                                          "w-full object-fill z-10 max-w-md sm:max-w-xs group-hover:scale-105 transition-all duration-200",
                                          "h-[160px] sm:h-[210px] md:h-[250px] my-12 rounded-lg",
                                      ].join(" ")}
                                  />
                              </div>
                              {/* {children} */}
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
