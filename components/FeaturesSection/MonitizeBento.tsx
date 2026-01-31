"use client";

import Image from "next/image";

type TileProps = {
    title: string;
    imageUrl: string;
    imageAlt: string;
    className?: string;
    imageClassName?: string;
};

function Tile({ title, imageUrl, imageAlt, className = "", imageClassName = "w-20" }: TileProps) {
    return (
        <div
            className={[
                "flex flex-col justify-center h-auto items-center rounded-xl bg-[#faf9f4]",
                // "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
                "p-6",
                className,
            ].join(" ")}
        >
            <div className="relative w-full text-center overflow-hidden rounded-xl">
                <div className="relative w-full">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        width={500}
                        height={500}
                        className={["mx-auto w-auto rounded-xl overflow-hidden", imageClassName].join(" ")}
                        // sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={false}
                    />
                </div>
            </div>

            <div className="mt-4 text-center text-sm font-semibold text-black/80">
                {title}
            </div>
        </div>
    );
}

export default function MonetizeBentoSection() {
    const MONETIZE_IMAGES: string[] = [
        "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670512325a606cf068697065_Frame%20427323431.png",
        "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670517a4c50d09af578b4167_Frame%20427323454.png",
        "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670516afaba8846e6e4375a3_pf-monetize-bento-2.png",
        "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67051905c5ec17369b92897c_Graphic.png",
        "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/67051888c9b4a63f9eb98b2e_Frame%20427323455.png",
        "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/670524e8fd82d6920a2e5e33_SystemMessage%20v2.png",
        "https://cdn.prod.website-files.com/6340255dae4cf91cdda9ff9f/6708de5e13819d598023580e_Frame%20427323494%20(2)%20(1).avif",
    ];
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-350 px-4 py-14 md:py-16">
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                    {/* LEFT column */}
                    <div className="lg:col-span-5">
                        <h2 className="text-4xl leading-[1.05] tracking-tight text-black md:text-5xl font-serif">
                            Monetize your <br /> content.
                        </h2>
                        <p className="mt-3 text-base text-black/70">
                            Wherever you create.
                        </p>

                        <div className="mt-7 space-y-6 ">
                            <Tile
                                title="Get sponsored by our ad network"
                                // imageUrl={images.bigLeft}
                                imageUrl={MONETIZE_IMAGES[0]}
                                imageAlt="Sponsored network"
                                className="p-7"
                                imageClassName="w-96 h-40"
                            />

                            <Tile
                                title="Discover paid brand partnership opportunities"
                                imageUrl={MONETIZE_IMAGES[1]}
                                imageAlt="Brand partnership opportunities"
                                className="p-7"
                                imageClassName="w-96 h-40"
                            />
                        </div>
                    </div>

                    {/* RIGHT bento grid */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Top row */}
                            <Tile
                                title="Launch a professional media kit in minutes"
                                imageUrl={MONETIZE_IMAGES[2]}
                                imageAlt="Media kit"
                                imageClassName="w-96 h-48"
                            />
                            <Tile
                                title="Instant payments"
                                imageUrl={MONETIZE_IMAGES[4]}
                                imageAlt="Instant payments"
                                imageClassName="w-96 h-44"
                            />

                            {/* Middle (calendar spans 2 rows on md+) */}
                            <div className="md:row-span-2">
                                <Tile
                                    title="Automatic calendar & scheduling"
                                    imageUrl={MONETIZE_IMAGES[3]}
                                    imageAlt="Calendar and scheduling"
                                    className="h-full"
                                    imageClassName="w-96 h-48"
                                />
                            </div>

                            {/* Right column middle */}
                            <Tile
                                title="Workflows to accelerate collaborations"
                                imageUrl={MONETIZE_IMAGES[5]}
                                imageAlt="Workflows"
                                imageClassName="w-96 h-18"
                            />

                            {/* Right column bottom (graphic) */}
                            <div className="rounded-2xl">
                                <div className="relative w-full overflow-hidden rounded-xl bg-white/0">
                                    <div className="relative aspect-[16/9] w-full">
                                        <Image
                                            src={MONETIZE_IMAGES[6]}
                                            alt="Platform icons graphic"
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* NOTE: you can also put a caption under the graphic if you want */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
