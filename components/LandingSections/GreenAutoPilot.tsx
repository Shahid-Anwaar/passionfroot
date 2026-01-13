import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";
import MockShot from "@/UIComponents/MockShot";


export default function GreenAutopilot() {
  return (
    <section className="bg-beige">
      <Container className="py-16">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl font-semibold text-black md:text-4xl">
            Put payments and results on autopilot
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-12 md:items-stretch">
            <div className="md:col-span-7 rounded-3xl bg-[#e9fbf1] p-6">
              <MockShot tone="green" className="min-h-[240px]" />
              <div className="mt-4 text-xs text-black/55">
                Placeholder green “workflow” panel (replace with your product UI later).
              </div>
            </div>

            <div className="md:col-span-5 rounded-3xl bg-white/70 p-6">
              <div className="h-14 w-14 rounded-2xl bg-black/10" />
              <p className="mt-4 text-sm leading-6 text-black/70">
                “We standardized payments + reporting and saved hours every week.”
              </p>
              <div className="mt-5 text-sm font-bold text-black">Customer Name</div>
              <div className="text-xs text-black/55">Role • Company</div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
