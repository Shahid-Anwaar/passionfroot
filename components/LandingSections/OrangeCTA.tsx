import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";
import Link from "next/link";

export default function OrangeCTA() {
  return (
    <section className="bg-beige">
      <Container className="py-14">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl bg-[#ff9b64]">
            <div className="p-10 text-center">
              <h3 className="font-serif text-3xl font-semibold text-black md:text-4xl">
                Let’s make creators your next growth channel
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm text-black/70">
                Launch faster, manage everything in one place, and measure what matters.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/get-access" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition">
                  Get access →
                </Link>
                <Link href="/talk" className="rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-black hover:bg-white transition">
                  Talk to us
                </Link>
              </div>
            </div>

            {/* doodle-ish bottom strip */}
            <div className="h-16 bg-black/10" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
