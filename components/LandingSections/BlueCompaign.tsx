import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";
import MockShot from "@/UIComponents/MockShot";

export default function BlueCampaign() {
  return (
    <section className="bg-beige">
      <Container className="py-16">
        <FadeIn>
          <h2 className="text-center font-serif text-3xl font-semibold text-black md:text-4xl">
            Build and run your campaigns — at scale
          </h2>

          <div className="mt-10 rounded-3xl bg-[#e8f3ff] p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <MockShot tone="blue" className="min-h-[220px]" />
              <MockShot tone="blue" className="min-h-[220px]" />
              <MockShot tone="blue" className="min-h-[220px]" />
              <MockShot tone="blue" className="min-h-[220px]" />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
