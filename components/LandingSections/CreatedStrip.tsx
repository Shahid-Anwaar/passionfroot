import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";


const cards = [
  { name: "Creator A", bg: "#ff5aa5" },
  { name: "Creator B", bg: "#ff9b64" },
  { name: "Creator C", bg: "#9b7bff" },
  { name: "Creator D", bg: "#47d18c" },
  { name: "Creator E", bg: "#3cb6ff" },
  { name: "Creator F", bg: "#ffd24a" },
  { name: "Creator G", bg: "#ff6b6b" },
];

export default function CreatorStrip() {
  return (
    <section className="bg-beige">
      <Container className="py-14">
        <FadeIn>
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-black md:text-4xl">
              Get access to high-fit creators — on every platform
            </h2>
            <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 text-left sm:grid-cols-3">
              {[
                { big: "300M", small: "audience reach" },
                { big: "2B", small: "monthly impressions" },
                { big: "60%", small: "lower CPC potential*" },
              ].map((s) => (
                <div key={s.small} className="rounded-2xl border border-black/10 bg-white/70 p-5">
                  <div className="text-3xl font-extrabold text-black">{s.big}</div>
                  <div className="mt-1 text-xs font-semibold text-black/60">{s.small}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-black/45">
              *Use your own verified benchmarks before publishing numeric claims.
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#f6f2ea] to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#f6f2ea] to-transparent" />

              <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {cards.concat(cards).map((c, idx) => (
                  <div
                    key={idx}
                    className="min-w-[220px] snap-start rounded-2xl border border-black/10 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="h-28 rounded-xl" style={{ background: c.bg }} />
                    <div className="mt-3 text-sm font-bold text-black">{c.name}</div>
                    <div className="mt-1 text-xs text-black/60">Audience • Platform • Fit score</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
