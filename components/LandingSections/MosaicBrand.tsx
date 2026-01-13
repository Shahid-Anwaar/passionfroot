import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";


const tiles = [
  { type: "video", title: "Short testimonial", bg: "#222" },
  { type: "logo", title: "Brand Logo", bg: "#fff" },
  { type: "quote", title: "A longer quote block goes here.", bg: "#ffd24a" },
  { type: "video", title: "Short testimonial", bg: "#111" },
  { type: "logo", title: "Brand Logo", bg: "#fff" },
  { type: "video", title: "Short testimonial", bg: "#111" },
  { type: "logo", title: "Brand Logo", bg: "#fff" },
  { type: "logo", title: "Brand Logo", bg: "#fff" },
];

export default function MosaicBrands() {
  return (
    <section className="bg-beige">
      <Container className="py-16">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl font-semibold text-black md:text-4xl">
            Powering the teams building category-defining brands
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-12">
            {tiles.map((t, i) => (
              <div
                key={i}
                className={`rounded-3xl border border-black/10 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md
                  ${i % 4 === 0 ? "md:col-span-4" : i % 4 === 1 ? "md:col-span-4" : "md:col-span-4"}`}
                style={{ background: t.bg }}
              >
                <div className={`${t.bg === "#fff" ? "text-black" : "text-white"}`}>
                  <div className="text-xs font-semibold opacity-70">{t.type.toUpperCase()}</div>
                  <div className="mt-3 text-sm font-bold">{t.title}</div>
                  <div className="mt-6 h-24 rounded-2xl bg-black/10" />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
