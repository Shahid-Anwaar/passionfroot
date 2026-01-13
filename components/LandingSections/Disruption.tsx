import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";


export default function Disruption() {
  return (
    <section className="bg-[#151515]">
      <Container className="py-16">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/10 to-transparent p-10">
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-6">
                <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
                  Traditional marketing is being disrupted
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  Attention is fragmenting. Trusted creators are becoming the fastest way to build demand.
                </p>

                <div className="mt-6 grid gap-3">
                  {["Rising CAC on crowded channels", "Lower trust in generic ads", "Creators bring targeted audiences"].map(
                    (t) => (
                      <div key={t} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                        {t}
                      </div>
                    )
                  )}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="h-32 rounded-xl bg-white/5" />
                  <div className="mt-2 text-xs text-white/60">Placeholder “performance chart” card</div>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  {/* angled orange ribbon */}
                  <div className="absolute -right-24 top-10 h-[420px] w-[520px] rotate-12 bg-[#ff9b64]" />
                  <div className="absolute inset-0 p-6">
                    <div className="text-sm font-semibold text-white/80">Creator ecosystem</div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-10 rounded-xl bg-black/10" />
                      ))}
                    </div>
                    <div className="absolute bottom-6 left-6 text-xs text-white/60">
                      (Replace with your own illustration later)
                    </div>
                  </div>
                </div>
_toggle ribbon angle/size if you want it tighter_
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
