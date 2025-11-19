"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const featureCards = [
    {
      title: "Sourcing & due diligence",
      description:
        "We partner with Georgian real estate experts to identify high-growth apartments and validate every assumption before a raise.",
      points: [
        "On-the-ground valuation walkthrough",
        "Legal & technical inspection dossier",
        "Projected rental and exit modelling",
      ],
    },
    {
      title: "Legal setup & onboarding",
      description:
        "Each property lives inside its own Georgian SPV (ShPS) so investors purchase equity in a single-asset company with clean governance.",
      points: [
        "SPV incorporation and banking",
        "Mandatory KYC via national ID",
        "Linked personal bank account for payouts",
      ],
    },
    {
      title: "Fundraising window & escrow",
      description:
        "Investors commit during a one-week window. Funds land directly in a licensed escrow account and unlock only when the round succeeds.",
      points: [
        "Direct bank checkout (TBC/Bog)",
        "Segregated escrow accounts",
        "Automatic refunds if targets miss",
      ],
    },
  ];

  useGSAP(
    () => {
      if (!titleRef.current || !sectionRef.current) return;

      // Set initial states
      gsap.set(titleRef.current, { y: "100vh", opacity: 0 });
      gsap.set(sectionRef.current, { y: "100vh", opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          pinSpacing: true,
        },
      });

      // Sequence 1: Title comes up from below to center
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      })
        // Sequence 2: Hold the title in center briefly
        .to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
        })
        // Sequence 3: Title exits upward completely
        .to(titleRef.current, {
          y: "-100vh",
          opacity: 0,
          duration: 1.5,
          ease: "power2.in",
        })
        // Sequence 4: Main section slides in from below (AFTER title is gone)
        .to(sectionRef.current, {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Full-Screen Title Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          ref={titleRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight text-center px-4"
        >
          What we offer
        </h2>
      </div>

      {/* Main Section */}
      <section
        ref={sectionRef}
        id="how-it-works"
        className="rounded-[3rem] border border-white/10 bg-white/5 p-10 shadow-[0_25px_70px_rgba(12,123,89,0.17)] backdrop-blur w-full max-w-7xl mx-4"
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/80">
              Fundraising & acquisition
            </p>
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Three guardrails before a single lari moves
            </h3>
            <p className="text-base text-white/70">
              Each apartment is locked to its own Georgian SPV, investors pass
              national ID verification, and contributions flow directly into
              escrow until the raise succeeds. If the goal isn&apos;t met, the
              bank reverses funds back to every investor automatically.
            </p>
          </div>
          <button
            type="button"
            className="self-start rounded-full border border-white/15 px-6 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Download diligence sample
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-linear-to-br from-white/8 via-neutral-900/70 to-neutral-900/90 p-6 transition duration-300 hover:border-emerald-300/40 hover:shadow-[0_40px_80px_rgba(134,239,172,0.18)]"
            >
              <div>
                <h4 className="text-xl font-semibold text-white">
                  {feature.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-emerald-200/90">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-left">
                    <span className="h-1.5 w-6 rounded-full bg-emerald-300/70 transition group-hover:w-8" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
