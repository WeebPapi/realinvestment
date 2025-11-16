"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import Lenis from "lenis";

type SmoothScrollProps = {
  children: ReactNode;
};

type LenisInstance = InstanceType<typeof Lenis>;

const LenisContext = createContext<LenisInstance | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [lenis, setLenis] = useState<LenisInstance | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      smoothWheel: true,
    });

    const initFrame = requestAnimationFrame(() => {
      setLenis(instance);
    });

    let animationFrame: number | null = null;

    const raf = (time: number) => {
      instance.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
      cancelAnimationFrame(initFrame);
      instance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
