// components/DisruptedMarketingSection.tsx
import Image from "next/image";

const BG_IMAGE =
    "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6800e82170ad2b4c5ecec7cb_pf%20%20(1).webp";

const ART_IMAGE =
    "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/66f52812e168c74898afd362_image%20(48)%20(1).avif";

export default function DisruptedMarketingSection() {
    return (
        <section
            className={[
                "relative isolate w-full overflow-hidden bg-[#1e1f1f]",
                // ✅ keep your exact large-screen height
                "lg:h-[870px]",
                // ✅ make it responsive below lg
                "py-12 sm:py-14 lg:py-0",
            ].join(" ")}
        >
            {/* BG image */}
            <Image
                src={BG_IMAGE}
                alt=""
                width={600}
                height={600}
                className={[
                    "object-cover absolute right-0 -z-20",
                    // ✅ keep your exact large-screen placement
                    "lg:-bottom-14",
                    // ✅ responsive below lg
                    "bottom-0 opacity-80 sm:opacity-90",
                ].join(" ")}
            />

            {/* Content */}
            <div
                className={[
                    "relative z-10 mx-auto w-full max-w-[1300px]",
                    // ✅ keep your exact large-screen padding
                    "lg:px-6 lg:pt-[62px]",
                    // ✅ responsive below lg
                    "px-4 sm:px-6 pt-6 sm:pt-10",
                ].join(" ")}
            >
                {/* Heading */}
                <div className="text-center">
                    <h2
                        className={[
                            "font-serif leading-[1.08] tracking-[-0.01em] text-white",
                            // ✅ keep your exact large-screen size
                            "lg:text-[48px]",
                            // ✅ responsive below lg
                            "text-[28px] sm:text-[36px] md:text-[42px]",
                        ].join(" ")}
                    >
                        Traditional marketing is
                        <br className="hidden sm:block lg:block" />
                        being disrupted
                    </h2>

                    <p
                        className={[
                            "font-medium text-white/85",
                            // ✅ keep your exact large-screen size
                            "lg:mt-4 lg:text-[20px]",
                            // ✅ responsive below lg
                            "mt-3 text-[15px] sm:text-[17px] md:text-[18px]",
                        ].join(" ")}
                    >
                        We&apos;re entering a new era of personality-led growth.
                    </p>
                </div>

                {/* Two columns */}
                <div
                    className={[
                        // ✅ keep your exact large-screen layout
                        "lg:mt-[78px] lg:grid lg:grid-cols-2 lg:gap-x-[180px]",
                        // ✅ responsive below lg (stack)
                        "mt-8 sm:mt-10 grid grid-cols-1 gap-8 md:gap-10 lg:gap-0",
                    ].join(" ")}
                >
                    <div className="max-w-[520px] lg:max-w-[420px] mx-auto lg:mx-0">
                        <h3
                            className={[
                                "font-serif font-semibold text-white",
                                // ✅ keep your exact large-screen size
                                "lg:text-[26px]",
                                // ✅ responsive below lg
                                "text-[20px] sm:text-[22px] md:text-[24px]",
                            ].join(" ")}
                        >
                            The Old Way
                        </h3>

                        <p
                            className={[
                                "text-white/85 leading-[1.65]",
                                // ✅ keep your exact large-screen size
                                "lg:mt-3 lg:text-[18px]",
                                // ✅ responsive below lg
                                "mt-2 text-[14px] sm:text-[16px] md:text-[17px]",
                            ].join(" ")}
                        >
                            Marketers try to build their brand through paid search, outbound,
                            and SEO - but the channels have become crowded and expensive.
                        </p>
                    </div>

                    <div className="max-w-[520px] lg:max-w-[440px] mx-auto lg:mx-0">
                        <h3
                            className={[
                                "font-serif font-semibold text-white",
                                "lg:text-[26px]",
                                "text-[20px] sm:text-[22px] md:text-[24px]",
                            ].join(" ")}
                        >
                            The New Way
                        </h3>

                        <p
                            className={[
                                "text-white/85 leading-[1.65]",
                                "lg:mt-3 lg:text-[18px]",
                                "mt-2 text-[14px] sm:text-[16px] md:text-[17px]",
                            ].join(" ")}
                        >
                            Hyper-scale your brand and top-of-funnel growth through trusted
                            creator audiences. Cut through the noise and build quality inbound.
                        </p>
                    </div>
                </div>
            </div>

            {/* ART IMAGE */}
            <div
                className={[
                    // ✅ responsive below lg: center the art and avoid overflow
                    "mt-8 sm:mt-10 flex justify-center lg:block lg:mt-0",
                ].join(" ")}
            >
                <Image
                    src={ART_IMAGE}
                    alt=""
                    width={500}
                    height={500}
                    priority
                    sizes="(max-width: 1024px) 92vw, 500px"
                    className={[
                        "object-contain object-bottom",
                        // ✅ keep your exact large-screen styling (unchanged)
                        "lg:ms-14 lg:mt-5 lg:translate-x-[210px] lg:translate-y-[32px] lg:scale-[1.12]",
                        "lg:lg:translate-x-[250px] lg:translate-y-[36px] lg:scale-[1.14]",
                        // ✅ below lg: simple responsive behavior
                        "w-[92%] max-w-[520px] translate-x-0 translate-y-0 scale-100",
                    ].join(" ")}
                />
            </div>
        </section>
    );
}
