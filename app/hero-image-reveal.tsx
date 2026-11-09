"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const pieces = Array.from({ length: 9 }, (_, index) => {
  const row = Math.floor(index / 3);
  const column = index % 3;
  const edge = 100 / 3;

  return {
    index,
    row,
    column,
    clipPath: `inset(${row * edge}% ${100 - (column + 1) * edge}% ${100 - (row + 1) * edge}% ${column * edge}%)`,
    offsetX: `${(column - 1) * 64}px`,
    offsetY: `${(row - 1) * 56}px`,
    rotation: `${index % 2 === 0 ? -8 : 8}deg`,
    delay: `${(row + column) * 55}ms`,
  };
});

export default function HeroImageReveal({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  const [phase, setPhase] = useState<"waiting" | "assembling" | "assembled">(
    "waiting",
  );
  const finishTimer = useRef<number | null>(null);

  useEffect(() => {
    const startAssembly = () => {
      setPhase("assembling");

      if (finishTimer.current !== null) {
        window.clearTimeout(finishTimer.current);
      }

      finishTimer.current = window.setTimeout(() => {
        setPhase("assembled");
      }, 1400);
    };

    window.addEventListener("elevated:loader-complete", startAssembly);
    return () => {
      window.removeEventListener("elevated:loader-complete", startAssembly);
      if (finishTimer.current !== null) {
        window.clearTimeout(finishTimer.current);
      }
    };
  }, []);

  return (
    <div className={`hero-image-reveal phase-${phase}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        unoptimized
        preload
        className="cover-image hero-reveal-base"
      />
      <div className="hero-image-pieces" aria-hidden="true">
        {pieces.map((piece) => (
          <span
            className="hero-image-piece"
            key={piece.index}
            style={
              {
                backgroundImage: `url("${src}")`,
                clipPath: piece.clipPath,
                zIndex: piece.index + 1,
                "--piece-x": piece.offsetX,
                "--piece-y": piece.offsetY,
                "--piece-rotation": piece.rotation,
                "--piece-delay": piece.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
