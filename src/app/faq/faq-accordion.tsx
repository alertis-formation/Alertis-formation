"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = {
  q: string;
  a: string;
  links?: { label: string; href: string }[];
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion
      multiple={false}
      className="rounded-xl bg-white ring-1 ring-border overflow-hidden"
    >
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          className="border-b border-border last:border-0 px-6"
        >
          <AccordionTrigger className="text-left text-base font-semibold text-[color:var(--brand-gray)] hover:no-underline py-5">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-[color:var(--brand-gray-medium)] leading-relaxed pb-5 text-sm whitespace-pre-line">
            {item.a}
            {item.links && item.links.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-2 not-prose whitespace-normal">
                {item.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-cream)] px-3 py-1.5 text-xs font-semibold text-[color:var(--brand-red)] hover:bg-[color:var(--brand-red)] hover:text-white transition-colors"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                ))}
              </div>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
