"use client";

import AppIcon from "@/UIComponents/AppIcon";
import Container from "@/UIComponents/Container";
import FadeIn from "@/UIComponents/FadeIn";
import { motion } from "framer-motion";

const float = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const },
};

export default function ProofNumbers() {
  const icons = [
    "mdi:star-four-points-outline",
    "mdi:rocket-launch-outline",
    "mdi:lightning-bolt-outline",
    "mdi:chart-line",
    "mdi:message-text-outline",
    "mdi:account-group-outline",
  ];

  return (
    <section className="bg-beige">
      <Container className="py-14">
        <FadeIn>
          <div className="relative rounded-3xl bg-white/60 p-10 text-center">
            {icons.map((ic, i) => (
              <motion.div
                key={ic + i}
                {...float}
                className="absolute hidden md:block"
                style={{
                  top: `${10 + (i % 3) * 28}px`,
                  left: i < 3 ? `${40 + i * 120}px` : undefined,
                  right: i >= 3 ? `${40 + (i - 3) * 120}px` : undefined,
                }}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5">
                  <AppIcon name={ic} className="h-5 w-5 text-black/55" />
                </span>
              </motion.div>
            ))}

            <div className="font-serif text-3xl font-semibold text-black md:text-4xl">
              Thousands of campaigns launched to date
            </div>
            <div className="mt-3 text-sm font-semibold text-black/60">
              Social • Video • Newsletters • Podcasts
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
