import Image from "next/image";
import React from "react";

export default function TrustedLogosAnimation({
  logos = [],
  imageKey = "trusted_company_image",
  imgClass = "h-8 md:h-10",
  wrapperHeight = "h-12 md:h-14",
}: any) {
  const logoCount = logos.length || 1;
  const secondsPerLogo = 5.5;
  const animationDuration = `${logoCount * secondsPerLogo}s`;

  return (
    <div className={`group marquee flex-1 pt-2 min-w-0 w-full ps-3 ${wrapperHeight}`}>
      <div
        className="marquee-track group-hover:[animation-play-state:paused]"
        style={
          {
            "--marquee-duration": animationDuration,
          } as React.CSSProperties
        }
      >
        <div className={`marquee-row flex items-center ${imgClass}`}>
          {logos.map((src: any, i: number) => (
            <Image
              key={`logo-a-${i}`}
              src={src?.[imageKey] || ""}
              alt={`Company ${i + 1}`}
              width={900}
              height={140}
              loading="lazy"
              className={`${imgClass} w-auto object-contain opacity-85 hover:opacity-100 transition-opacity`}
            />
          ))}
        </div>

        <div className={`marquee-row flex items-center ${imgClass}`} aria-hidden="true">
          {logos.map((src: any, i: number) => (
            <Image
              key={`logo-b-${i}`}
              src={src?.[imageKey] || ""}
              alt={`logo-b-${i}`}
              width={200}
              height={140}
              loading="lazy"
              className={`${imgClass} w-auto object-contain opacity-85 hover:opacity-100 transition-opacity`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
