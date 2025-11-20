"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LocationModel } from "./LocationModel";

export function Location() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useGSAP(
    () => {
      if (typeof window === "undefined") {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=180%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => setScrollProgress(self.progress),
        },
      });

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, ease: "power2.out" },
          0.65
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen min-h-[100svh] w-screen items-center justify-center overflow-hidden bg-neutral-950"
    >
      <LocationModel progress={scrollProgress} />
      <div
        ref={textRef}
        className="relative z-10 space-y-2 px-6 text-center opacity-0"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-white/70">
          white square
        </p>
        <p className="text-xs text-white/60">
          Tbilisi, Varketili III Microdistrict, III Block – Shuamta Street #40
        </p>
        <p className="text-xs text-white/50">March 2028</p>
      </div>
    </section>
  );
}
