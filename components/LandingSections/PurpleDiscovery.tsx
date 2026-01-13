import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";
import MockShot from "@/UIComponents/MockShot";

export default function PurpleDiscovery() {
  return (
    <section className="bg-beige">
      <Container className="py-16">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl font-semibold text-black md:text-4xl">
            Find the best creators for your brand — fast
          </h2>

          <div className="mt-10 rounded-3xl bg-[#efe9ff] p-6">
            <div className="grid gap-4 md:grid-cols-3">
              <MockShot tone="purple" />
              <MockShot tone="purple" />
              <MockShot tone="purple" />
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-5 text-black/55">
            “This section is a safe clone of the layout style (purple product blocks), using placeholder UI.”
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
