"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

type Slide = [string, string];

interface TransitionState {
  nextSlide: number;
  direction: "next" | "prev";
  animate: boolean;
  initialOffset: number;
}

export default function AboutHero() {
  const slides: Slide[] = [
    ["hero.jpg", "Hero 1"],
    ["hero2.jpg", "Hero 2"],
    ["hero3.jpg", "Hero 3"],
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [transition, setTransition] = useState<TransitionState | null>(null);

  const triggerNext = useCallback((offset: number) => {
    if (transition) return;
    setTransition({
      nextSlide: (activeSlide + 1) % slides.length,
      direction: "next",
      animate: false,
      initialOffset: offset,
    });
  }, [activeSlide, slides.length, transition]);

  const triggerPrev = useCallback((offset: number) => {
    if (transition) return;
    setTransition({
      nextSlide: (activeSlide - 1 + slides.length) % slides.length,
      direction: "prev",
      animate: false,
      initialOffset: offset,
    });
  }, [activeSlide, slides.length, transition]);

  useEffect(() => {
    if (!transition) {
      const timer = setTimeout(() => {
        triggerNext(0);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [activeSlide, transition, triggerNext]);

  useEffect(() => {
    if (transition && !transition.animate) {
      const timer = setTimeout(() => {
        setTransition((prev) => (prev ? { ...prev, animate: true } : null));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transition]);

  useEffect(() => {
    if (transition?.animate) {
      const timer = setTimeout(() => {
        setActiveSlide(transition.nextSlide);
        setTransition(null);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [transition]);

  return (
    <section className="relative h-[65vh] w-full overflow-hidden group">
      {!transition && (
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={`/${slides[activeSlide][0]}`}
            alt={slides[activeSlide][1]}
            fill
            className="object-cover"
          />
        </div>
      )}

      {transition && (
        <>
          <div
            className="absolute top-0 left-0 w-full h-full transition-transform duration-[1200ms]"
            style={{
              transform: transition.animate
                ? transition.direction === "next"
                  ? "translateX(-100%)"
                  : "translateX(100%)"
                : `translateX(${transition.initialOffset}px)`,
            }}
          >
            <Image
              src={`/${slides[activeSlide][0]}`}
              alt={slides[activeSlide][1]}
              fill
              className="object-cover"
            />
          </div>

          <div
            className="absolute top-0 left-0 w-full h-full transition-transform duration-[600ms]"
            style={{
              transform: transition.animate
                ? "translateX(0)"
                : transition.direction === "next"
                ? `translateX(calc(100% + ${transition.initialOffset}px))`
                : `translateX(calc(-100% + ${transition.initialOffset}px))`,
            }}
          >
            <Image
              src={`/${slides[transition.nextSlide][0]}`}
              alt={slides[transition.nextSlide][1]}
              fill
              className="object-cover"
            />
          </div>
        </>
      )}

      <button
        onClick={() => triggerPrev(0)}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/70 text-white py-1 px-3 z-10 rounded-full transition-all duration-300 xl:opacity-0 xl:group-hover:opacity-100 hover:bg-white outline-none"
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="text-black/40 hover:text-black/60 text-lg xl:text-md transition-colors duration-300 mt-1"
        />
      </button>
      <button
        onClick={() => triggerNext(0)}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/70 text-white py-1 px-3 z-10 rounded-full transition-all duration-300 xl:opacity-0 xl:group-hover:opacity-100 hover:bg-white outline-none"
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-black/40 hover:text-black/60 text-lg xl:text-md transition-colors duration-300 mt-1"
        />
      </button>

      <div className="absolute top-0 w-full h-full bg-black/30 text-black flex items-center justify-center">
        <h1 className="text-6xl xl:text-8xl font-Atma text-white">About</h1>
      </div>
    </section>
  );
}
