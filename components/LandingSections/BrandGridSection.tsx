// components/BrandWallSection.tsx
import Image from "next/image";
import { Icon } from "@iconify/react";

type TileBase = {
    id: string;
    colSpan?: string; // tailwind col-span classes
    bg?: string; // tailwind bg class
};

type PhotoTile = TileBase & {
    type: "photo";
    name: string;
    img: string;
};

type LogoTile = TileBase & {
    type: "logo";
    // use either iconify logo icon or plain text
    icon?: string;
    text?: string;
    iconSize?: number;
};

type QuoteTile = TileBase & {
    type: "quote";
    quote: string;
    name: string;
    role: string;
};

type Tile = PhotoTile | LogoTile | QuoteTile;

const tiles: Tile[] = [
    // Row 1
    {
        id: "carter",
        type: "photo",
        name: "Carter",
        img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&auto=format&fit=crop&q=60",
        bg: "bg-[#FFB07B]",
    },
    { id: "figma", type: "logo", icon: "logos:figma", text: "Figma", iconSize: 28 },
    {
        id: "quote-yellow",
        type: "quote",
        bg: "!bg-[#ffea62]",
        colSpan: "col-span-2",
        quote:
            "Partnering with creators through Passionfroot has been a game-changer for Intercom’s Startup program. By collaborating with top newsletters, we’ve reached thousands of founders",
        name: "John Park",
        role: "Head of Partnerships · Intercom",
    },

    // Row 2
    { id: "hubspot", type: "logo", icon: "logos:hubspot-icon", text: "HubSpot", iconSize: 26 },
    {
        id: "munch",
        type: "photo",
        name: "Munch",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60",
        bg: "bg-[#8EEBFF]",
    },
    {
        id: "freshbooks",
        type: "photo",
        name: "Freshbooks",
        img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
        bg: "bg-[#63E38A]",
    },
    { id: "intercom", type: "logo", icon: "logos:intercom-icon", text: "INTERCOM", iconSize: 26 },

    // Row 3
    {
        id: "quote-purple",
        type: "quote",
        bg: "!bg-[#B58BFF]",
        colSpan: "col-span-2",
        quote:
            "Passionfroot really helped us level up our creator program into a strong growth channel. Instead of scouring the internet, their AI search enabled us to find and book the best creators in PLG.",
        name: "Alex Vale",
        role: "Head of Growth · Attio",
    },
    { id: "framer", type: "logo", icon: "logos:framer", text: "Framer", iconSize: 28 },
    {
        id: "replit",
        type: "photo",
        name: "Replit",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60",
        bg: "bg-[#141414]",
    },

    // Row 4
    {
        id: "nebius",
        type: "photo",
        name: "Nebius",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&h=800&w=600",
        bg: "bg-[#5AA7FF]",
    },
    { id: "pika", type: "logo", text: "Pika" },
    {
        id: "guidde",
        type: "photo",
        name: "Guidde",
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60",
        bg: "bg-[#FF5C6A]",
    },
    { id: "elevenlabs", type: "logo", text: "ElevenLabs" },
];

function PlusDot({ isDark }: { isDark?: boolean }) {
    return (
        <span className={`absolute bottom-3 right-3 inline-flex h-6 w-6 items-center justify-center rounded-full ${isDark ? "bg-gray-900 shadow-[0_10px_18px_rgba(0,0,0,0.18)] ring-1 ring-black/10" : "bg-gray-100 shadow-[0_10px_18px_rgba(0,0,0,0.18)] ring-1 ring-white/10"}`}>
            <Icon icon="mdi:plus" className={`text-[16px] ${isDark ? "text-white" : "text-gray-900"}`} />
        </span>
    );
}

function TileCard({ tile }: { tile: Tile }) {
    const base =
        "relative overflow-hidden rounded-[12px] border border-black/20 bg-white shadow-[0_12px_26px_rgba(0,0,0,0.08)]";

    const height = "h-[200px] sm:h-[250px]"; // matches screenshot tile height feel

    if (tile.type === "logo") {
        return (
            <div className={`${base} ${height} flex items-center justify-center ${tile.colSpan ?? ""}`}>
                <div className="flex items-center gap-2 text-[#141414]">
                    {tile.icon ? (
                        <Icon icon={tile.icon} className="text-[#141414]" style={{ fontSize: tile.iconSize ?? 26 }} />
                    ) : null}
                    {tile.text ? (
                        <span
                            className={
                                tile.text === "Pika"
                                    ? "text-[48px] font-semibold tracking-[-0.02em]"
                                    : "text-[32px] font-semibold tracking-[-0.01em]"
                            }
                        >
                            {tile.text}
                        </span>
                    ) : null}
                </div>
                {/* <PlusDot /> */}
            </div>
        );
    }

    if (tile.type === "photo") {
        return (
            <div className={`${base} ${height} ${tile.bg ?? ""} ${tile.colSpan ?? ""}`}>
                <Image
                    src={tile.img}
                    alt={tile.name}
                    fill
                    sizes="(min-width: 640px) 220px, 50vw"
                    className="object-cover"
                />
                {/* subtle fade like screenshot */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 text-[12px] font-semibold text-white drop-shadow">
                    {tile.name}
                </div>
                <PlusDot isDark={false} />
            </div>
        );
    }

    // Quote tile
    return (
        <div className={`${base} ${height} ${tile.bg} ${tile.colSpan ?? ""} px-5 py-4`}>
            <div className="font-serif text-[44px] leading-none text-[#141414]">“</div>
            <p className="mt-1 text-[20px] font-semibold leading-[1.55] text-[#141414]/80 line-clamp-3">
                {tile.quote}
            </p>
            <div className="mt-3 text-[16px] text-[#141414]">{tile.name}</div>
            <div className="text-[12px] font-semibold text-[#141414]/70">{tile.role}</div>
            <PlusDot isDark={true} />
        </div>
    );
}

export default function BrandWallSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-16">
                <h2 className="text-center font-serif text-[32px] sm:text-[44px] font-semibold leading-[1.15] text-[#141414]">
                    Powering the people building
                    <br />
                    category-defining brands
                </h2>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                    {tiles.map((t) => (
                        <div key={t.id} className={t.colSpan ?? ""}>
                            <TileCard tile={t} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
