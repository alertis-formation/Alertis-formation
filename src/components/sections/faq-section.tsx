"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Quel financement pour vos formations ?",
    a: "Nos formations sont prises en charge directement par l'employeur ou en fonds propres. Nous accompagnons nos clients sur les démarches administratives et la documentation nécessaire pour intégrer la formation au plan de développement des compétences.",
  },
  {
    q: "Pouvez-vous organiser une formation directement dans nos locaux ?",
    a: "Absolument. La majorité de nos sessions se déroulent en intra-entreprise : nous nous déplaçons sur l'ensemble du territoire avec le matériel pédagogique nécessaire (extincteurs, bac à feu, mannequins SST, etc.).",
  },
  {
    q: "Quelle est la durée de validité d'une formation SST ?",
    a: "La certification SST est valable 24 mois. Au terme de cette période, un Maintien et Actualisation des Compétences (MAC SST) de 7 heures est nécessaire pour conserver la certification.",
  },
  {
    q: "Combien de personnes peuvent participer à une session ?",
    a: "Le nombre varie selon le type de formation : de 4 à 10 stagiaires pour le SST, jusqu'à 12 pour les formations incendie et manipulation d'extincteurs, sur-mesure pour les Safety Days.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-16 left-4 lg:left-12 select-none pointer-events-none">
        <span className="section-number">05</span>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              {/* Editorial image leads the column — desktop only */}
              <div className="hidden lg:block relative aspect-[16/10] overflow-hidden rounded-sm mb-8">
                <Image
                  src="/images/formateurs.jpg"
                  alt="Session de formation Alertis — exercice d'évacuation incendie"
                  fill
                  sizes="(max-width: 1024px) 0px, 420px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <span className="eyebrow">Foire aux questions</span>
              <h2 className="mt-4">
                Tout ce qu&apos;il faut savoir{" "}
                <span className="italic font-bold text-[color:var(--brand-red)]">
                  avant
                </span>{" "}
                de vous lancer.
              </h2>
              <p className="mt-6 text-[color:var(--brand-gray-medium)] leading-relaxed text-base">
                Les questions les plus fréquentes de nos clients sur le
                déroulement, le financement et la validité de nos formations.
              </p>
              <Button
                variant="outline"
                className="uppercase tracking-wider mt-8"
                render={
                  <Link href="/faq">
                    <span>Voir toute la FAQ</span>
                    <ArrowUpRight />
                  </Link>
                }
              />
            </div>
          </div>

          {/* Right: questions */}
          <div className="lg:col-span-8">
            <ul className="border-t border-[color:var(--brand-gray-medium)]/20">
              {faqs.map((f, i) => {
                const isOpen = openIndex === i;
                return (
                  <li
                    key={i}
                    className="border-b border-[color:var(--brand-gray-medium)]/20"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-start gap-6 py-7 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--brand-red)] pt-1.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-xl md:text-2xl text-[color:var(--brand-charcoal)] leading-tight group-hover:text-[color:var(--brand-red)] transition-colors">
                        {f.q}
                      </span>
                      <span className="size-9 shrink-0 inline-flex items-center justify-center rounded-full border border-[color:var(--brand-gray-medium)]/30 text-[color:var(--brand-charcoal)] group-hover:bg-[color:var(--brand-red)] group-hover:border-[color:var(--brand-red)] group-hover:text-white transition-colors mt-0.5">
                        {isOpen ? (
                          <Minus className="size-4" />
                        ) : (
                          <Plus className="size-4" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] pb-7"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pl-[3.25rem] pr-12 text-[color:var(--brand-gray-medium)] leading-[1.7] max-w-3xl">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
