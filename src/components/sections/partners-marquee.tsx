"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Partner = { name: string; src: string };

const partners: Partner[] = [
  { name: "EDF", src: "/partners/edf.png" },
  { name: "SNCF", src: "/partners/sncf.png" },
  { name: "Engie", src: "/partners/engie.png" },
  { name: "Veolia", src: "/partners/veolia.png" },
  { name: "Suez", src: "/partners/suez.png" },
  { name: "Caisse d'Épargne", src: "/partners/caisse_d_epargne.png" },
  { name: "E.Leclerc", src: "/partners/eleclerc.png" },
  { name: "Pathé", src: "/partners/pathe.png" },
  { name: "First Stop", src: "/partners/firststop.png" },
  { name: "People & Baby", src: "/partners/people-and-baby.png" },
  { name: "Sésame Autisme Rhône-Alpes", src: "/partners/sesame-autisme.png" },
];

// Duplicated 4× so the seamless loop has enough content
const displayList: Partner[] = [
  ...partners,
  ...partners,
  ...partners,
  ...partners,
];

const AUTO_SPEED = 0.6; // px per frame ≈ 36px/s — accumulated virtually so sub-pixel increments are not lost to scrollLeft integer rounding

export function PartnersMarquee() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // — Setup: 4 copies of the list → keep user inside copies 2-3, with
    // copies 1 and 4 as wrap-around buffers in both directions.
    let raf = 0;
    let paused = false;
    let isDragging = false;
    let startX = 0;
    let startScroll = 0;
    let didMove = false;
    // Virtual sub-pixel accumulator — scrollLeft is rounded to an integer on
    // read-back in Chromium on standard-DPI displays, so AUTO_SPEED < 1 would
    // round-trip to the same value every frame and freeze the marquee.
    let pendingDelta = 0;

    // Initialize at start of copy 2 so user has room to drag left
    const block = () => el.scrollWidth / 4;
    const placeInMiddle = () => {
      el.scrollLeft = block();
    };
    placeInMiddle();

    const normalize = () => {
      const b = block();
      if (b === 0) return;
      // Going right past copy 3 → jump back by 2 copies
      if (el.scrollLeft >= 3 * b) {
        el.scrollLeft -= 2 * b;
      }
      // Going left below copy 2 start → jump forward by 2 copies
      else if (el.scrollLeft <= b) {
        el.scrollLeft += 2 * b;
      }
    };

    const tick = () => {
      if (!paused && !isDragging) {
        pendingDelta += AUTO_SPEED;
        if (pendingDelta >= 1) {
          const step = Math.floor(pendingDelta);
          el.scrollLeft += step;
          pendingDelta -= step;
          normalize();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // — Pause on hover —
    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
      isDragging = false;
      el.classList.remove("is-dragging");
    };

    // — Drag-to-scroll —
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isDragging = true;
      didMove = false;
      el.classList.add("is-dragging");
      startX = e.pageX - el.offsetLeft;
      startScroll = el.scrollLeft;
      // Capture the pointer so pointerup fires reliably even if the user
      // releases outside the element — otherwise isDragging stays true and
      // the marquee freezes forever.
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* no-op: some browsers reject capture during a passive listener */
      }
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) > 4) didMove = true;
      el.scrollLeft = startScroll - walk;
      // Wrap during drag: jump to the equivalent position in another copy
      // and re-anchor the drag origin so the next move event continues smoothly.
      const b = block();
      if (b > 0) {
        let jumped = false;
        if (el.scrollLeft >= 3 * b) {
          el.scrollLeft -= 2 * b;
          jumped = true;
        } else if (el.scrollLeft <= b) {
          el.scrollLeft += 2 * b;
          jumped = true;
        }
        if (jumped) {
          startX = x;
          startScroll = el.scrollLeft;
        }
      }
    };
    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;
      el.classList.remove("is-dragging");
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* no-op */
      }
    };
    // Prevent click on logos if user actually dragged
    const onClickCapture = (e: MouseEvent) => {
      if (didMove) {
        e.stopPropagation();
        e.preventDefault();
        didMove = false;
      }
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("click", onClickCapture, true);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="partners-marquee overflow-x-auto overflow-y-visible cursor-grab active:cursor-grabbing select-none py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <ul className="flex items-center gap-16 md:gap-24 w-max">
        {displayList.map((p, i) => (
          <li
            key={`${p.name}-${i}`}
            className="relative h-12 md:h-14 w-32 md:w-40 flex items-center justify-center shrink-0 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:drop-shadow-md"
            aria-hidden={i >= partners.length}
          >
            <Image
              src={p.src}
              alt={
                i < partners.length
                  ? `Logo ${p.name} — client Alertis Formation`
                  : ""
              }
              fill
              sizes="160px"
              draggable={false}
              className="object-contain pointer-events-none"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
