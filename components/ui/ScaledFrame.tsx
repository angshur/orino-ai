"use client";
import { useRef, useState, useEffect } from "react";

const FRAME_W = 1440;
const FRAME_H = 720;

export function ScaledFrame({ src, title }: { src: string; title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / FRAME_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-card border border-[rgba(26,26,26,0.08)] shadow-card"
      style={{ height: `${FRAME_H * scale}px` }}
    >
      <iframe
        src={src}
        title={title}
        scrolling="no"
        style={{
          width: `${FRAME_W}px`,
          height: `${FRAME_H}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          border: "none",
          pointerEvents: "none",
          display: "block",
        }}
      />
    </div>
  );
}
