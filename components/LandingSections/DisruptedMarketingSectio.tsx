// components/DisruptedMarketingSection.tsx
import Image from "next/image";

const BG_IMAGE =
    "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6800e82170ad2b4c5ecec7cb_pf%20%20(1).webp";

const ART_IMAGE =
    "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f52812e168c74898afd362_image%20(48)%20(1).avif";

export default function DisruptedMarketingSection() {
    return (
        <section className="relative isolate h-[870px] w-full overflow-hidden bg-[#1e1f1f]">
            {/* BG image */}
                <Image
                    src={BG_IMAGE}
                    alt=""
                    // fill
                    width={600}
                    height={600}
                    // priority
                    // sizes="10vw"
                    className="object-cover absolute -bottom-14 right-0 -z-20"
                />

            {/* Dark vignette / contrast */}
            {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-black/30" /> */}
            {/* <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.22)_55%,rgba(0,0,0,0.65)_100%)]" /> */}

            {/* Foreground illustration (pixel placement like screenshot) */}
            

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 pt-[62px]">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="font-serif text-[48px]  leading-[1.08] tracking-[-0.01em] text-white">
                        Traditional marketing is
                        <br />
                        being disrupted
                    </h2>
                    <p className="mt-4 text-[20px] font-medium text-white/85">
                        We&apos;re entering a new era of personality-led growth.
                    </p>
                </div>

                {/* Two columns */}
                <div className="mt-[78px] grid grid-cols-2 gap-x-[180px]">
                    <div className="max-w-[420px]">
                        <h3 className="font-serif text-[26px] font-semibold text-white">
                            The Old Way
                        </h3>
                        <p className="mt-3 text-[18px] leading-[1.65] text-white/85">
                            Marketers try to build their brand through paid search, outbound,
                            and SEO - but the channels have become crowded and expensive.
                        </p>
                    </div>

                    <div className="max-w-[440px]">
                        <h3 className="font-serif text-[26px] font-semibold text-white">
                            The New Way
                        </h3>
                        <p className="mt-3 text-[18px] leading-[1.65] text-white/85">
                            Hyper-scale your brand and top-of-funnel growth through trusted
                            creator audiences. Cut through the noise and build quality inbound.
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <Image
                    src={ART_IMAGE}
                    alt=""
                    //   fill
                    width={500}
                    height={500}
                    priority
                    sizes="100vw"
                    className={[
                        "object-contain object-bottom ms-14 mt-5",
                        // ✅ tune these to match perfectly on your layout
                        "translate-x-[210px] translate-y-[32px] scale-[1.12]",
                        "lg:translate-x-[250px] lg:translate-y-[36px] lg:scale-[1.14]",
                    ].join(" ")}
                />
            </div>
        </section>
    );
}
