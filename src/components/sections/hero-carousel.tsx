"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

type Slide = {
  image: string;
  label: string;
  description: string;
  href: string;
};

const slides: Slide[] = [
  {
    image: "/categories/securite-incendie.jpg",
    label: "Sécurité incendie",
    description: "EPI, guide-file, manipulation d'extincteurs, évacuation",
    href: "/formations-securite-incendie",
  },
  {
    image: "/categories/secourisme.jpg",
    label: "Secourisme",
    description: "SST, MAC SST, PSC, AFGSU, défibrillateur",
    href: "/formations-secourisme",
  },
  {
    image: "/categories/habilitation-electrique.jpg",
    label: "Habilitation électrique",
    description: "B0, BS, BE, H0, BR, BC, BF, HF, BP photovoltaïque",
    href: "/formations-habilitation-electrique",
  },
  {
    image: "/categories/ergonomie.jpg",
    label: "Ergonomie",
    description: "Gestes et postures, PRAP, prévention TMS",
    href: "/formations-ergonomie",
  },
  {
    image: "/categories/prevention.jpg",
    label: "Prévention",
    description: "CSE, DUERP, RPS, hygiène, travaux en hauteur",
    href: "/formations-prevention",
  },
  {
    image: "/categories/safety-day.jpg",
    label: "Safety Day",
    description: "Journée sécurité sur-mesure dans vos locaux",
    href: "/formations-safety-day",
  },
];

const AUTOPLAY_MS = 5000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const goPrev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[color:var(--brand-slate)] shadow-[0_30px_80px_-30px_rgba(72,83,105,0.5)]">
        {/* Slides */}
        {slides.map((slide, i) => (
          <Link
            key={slide.href}
            href={slide.href}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
            className={`group absolute inset-0 transition-opacity duration-700 ${
              i === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={`Formation ${slide.label} — Alertis Formation`}
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover transition-transform duration-[6000ms] group-hover:scale-[1.03]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-charcoal)]/85 via-[color:var(--brand-charcoal)]/20 to-transparent"
            />

            <div className="absolute bottom-6 left-6 right-6 text-white pr-2">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--brand-mint)] mb-2">
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")} · Catégorie
              </div>
              <div className="text-2xl md:text-[1.7rem] leading-[1.1] font-medium mb-1.5">
                {slide.label}
              </div>
              <div className="text-sm text-white/80 leading-snug max-w-[28ch] mb-4">
                {slide.description}
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold border-b-2 border-[color:var(--brand-red)] pb-1 group-hover:gap-3 transition-all">
                Découvrir
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </Link>
        ))}

        {/* Auto-progress bar (top) */}
        <div className="absolute top-0 inset-x-0 z-20 h-1 bg-white/15">
          <div
            key={index}
            className="h-full bg-[color:var(--brand-red)] origin-left"
            style={{
              animation: `hero-progress ${AUTOPLAY_MS}ms linear forwards`,
            }}
          />
        </div>

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Catégorie précédente"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 inline-flex size-11 items-center justify-center rounded-full bg-white/95 text-[color:var(--brand-charcoal)] shadow-lg ring-1 ring-black/5 hover:bg-[color:var(--brand-red)] hover:text-white transition-colors"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Catégorie suivante"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex size-11 items-center justify-center rounded-full bg-white/95 text-[color:var(--brand-charcoal)] shadow-lg ring-1 ring-black/5 hover:bg-[color:var(--brand-red)] hover:text-white transition-colors"
        >
          <ChevronRight className="size-5" />
        </button>

        {/* Dot pagination — bigger and more visible */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[color:var(--brand-charcoal)]/40 backdrop-blur px-3 py-2 rounded-full">
          {slides.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIndex(i);
              }}
              aria-label={`Aller à la catégorie ${s.label}`}
              aria-current={i === index}
              className={`size-2 rounded-full transition-all ${
                i === index
                  ? "bg-white w-8"
                  : "bg-white/60 hover:bg-white/90"
              }`}
            />
          ))}
        </div>

        {/* Top-left index counter */}
        <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 bg-white/95 backdrop-blur px-2.5 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-widest text-[color:var(--brand-charcoal)]">
          <span className="size-1.5 rounded-full bg-[color:var(--brand-red)] animate-pulse" />
          {slides.length} domaines
        </div>
      </div>

      {/* Floating accreditation badge */}
      <div className="absolute -top-4 -left-4 lg:-left-8 rotate-[-4deg] bg-white shadow-xl ring-1 ring-black/5 px-4 py-3 rounded-sm z-30 pointer-events-none">
        <div className="flex items-center gap-2.5">
          <div className="inline-flex size-8 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-white">
            <ShieldCheck className="size-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)]">
              Formateurs
            </div>
            <div className="font-semibold text-sm text-[color:var(--brand-charcoal)]">
              Issus du terrain
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
