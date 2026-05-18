"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Phone, Mail, Menu, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { AlertisLogo } from "./alertis-logo";
import { mainNav, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader({
  ratingSlot,
}: {
  /** Bloc note Google injecté depuis un server component parent. */
  ratingSlot?: React.ReactNode;
}) {
  const pathname = usePathname();
  const [menuValue, setMenuValue] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Close mega-menu, mobile sheet and contact dropdown on route change
  useEffect(() => {
    setMenuValue(null);
    setMobileOpen(false);
    setContactOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Main bar */}
      <div className="border-b border-[color:var(--brand-gray-medium)]/15 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="mx-auto max-w-7xl px-4 lg:px-10 flex h-20 items-center justify-between gap-6">
          <AlertisLogo priority />

          {/* Desktop nav */}
          <NavigationMenu
            className="hidden lg:flex"
            value={menuValue}
            onValueChange={setMenuValue}
          >
            <NavigationMenuList className="gap-0.5">
              {mainNav.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.href} value={item.href}>
                    <NavigationMenuTrigger className="text-sm font-medium text-[color:var(--brand-charcoal)] hover:text-[color:var(--brand-red)] data-[state=open]:text-[color:var(--brand-red)] bg-transparent">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[560px] grid-cols-12 p-2 gap-2">
                        <div className="col-span-5 bg-[color:var(--brand-cream)] p-5 rounded-sm flex flex-col">
                          <span className="eyebrow !text-[10px]">
                            Catalogue
                          </span>
                          <h3 className="mt-3 text-2xl leading-tight">
                            61 formations
                          </h3>
                          <p className="mt-2 text-xs text-[color:var(--brand-gray-medium)] leading-relaxed">
                            Du SST aux habilitations BR, en passant par le
                            Safety Day. Conformes au Code du travail.
                          </p>
                          <NavigationMenuLink
                            render={
                              <Link
                                href={item.href}
                                onClick={() => setMenuValue(null)}
                                className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-red)]"
                              >
                                <span>Voir tout</span>
                                <ArrowUpRight className="size-4" />
                              </Link>
                            }
                          />
                        </div>
                        <ul className="col-span-7 grid grid-cols-1 gap-0.5">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink
                                render={
                                  <Link
                                    href={child.href}
                                    onClick={() => setMenuValue(null)}
                                    className="group flex items-start gap-3 rounded-sm p-3 hover:bg-[color:var(--brand-cream)] transition-colors"
                                  >
                                    <div className="flex-1">
                                      <div className="text-sm font-semibold text-[color:var(--brand-charcoal)] group-hover:text-[color:var(--brand-red)] transition-colors">
                                        {child.label}
                                      </div>
                                      {child.description && (
                                        <p className="mt-0.5 text-xs text-[color:var(--brand-gray-medium)] leading-snug">
                                          {child.description}
                                        </p>
                                      )}
                                    </div>
                                    <ArrowUpRight className="size-4 text-[color:var(--brand-gray-medium)] group-hover:text-[color:var(--brand-red)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                                  </Link>
                                }
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.href} value={item.href}>
                    <NavigationMenuLink
                      render={
                        <Link
                          href={item.href}
                          onClick={() => setMenuValue(null)}
                          className="inline-flex h-9 items-center px-3 text-sm font-medium text-[color:var(--brand-charcoal)] hover:text-[color:var(--brand-red)] transition-colors"
                        >
                          {item.label}
                        </Link>
                      }
                    />
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <DropdownMenu open={contactOpen} onOpenChange={setContactOpen}>
              <DropdownMenuTrigger
                render={
                  <Button
                    size="lg"
                    variant="outline"
                    className="uppercase tracking-wider font-medium"
                  >
                    <span>Contact</span>
                  </Button>
                }
              />
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-[300px] p-2 bg-white border border-[color:var(--brand-gray-medium)]/15 rounded-sm shadow-lg"
              >
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="group flex items-start gap-3 rounded-sm p-3 hover:bg-[color:var(--brand-cream)] transition-colors"
                >
                  <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] group-hover:bg-[color:var(--brand-red)] group-hover:text-white transition-colors">
                    <Phone className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold">
                      Téléphone
                    </div>
                    <div className="text-sm font-semibold text-[color:var(--brand-charcoal)] group-hover:text-[color:var(--brand-red)] transition-colors">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-start gap-3 rounded-sm p-3 hover:bg-[color:var(--brand-cream)] transition-colors"
                >
                  <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] group-hover:bg-[color:var(--brand-red)] group-hover:text-white transition-colors">
                    <Mail className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold">
                      Email
                    </div>
                    <div className="text-sm font-semibold text-[color:var(--brand-charcoal)] group-hover:text-[color:var(--brand-red)] transition-colors break-all">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>
                <a
                  href={siteConfig.contact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-sm p-3 hover:bg-[color:var(--brand-cream)] transition-colors"
                >
                  <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] group-hover:bg-[color:var(--brand-red)] group-hover:text-white transition-colors">
                    <MapPin className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold">
                      Adresse
                    </div>
                    <div className="text-sm font-semibold text-[color:var(--brand-charcoal)] group-hover:text-[color:var(--brand-red)] transition-colors leading-snug">
                      {siteConfig.contact.address.street}, {siteConfig.contact.address.city}
                    </div>
                  </div>
                </a>
                <div className="flex items-start gap-3 rounded-sm p-3">
                  <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-[color:var(--brand-cream)] text-[color:var(--brand-red)]">
                    <Clock className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-widest text-[color:var(--brand-gray-medium)] font-semibold mb-0.5">
                      Horaires
                    </div>
                    <ul className="text-xs text-[color:var(--brand-charcoal)] leading-snug space-y-0.5">
                      {siteConfig.contact.hours.map((h) => (
                        <li key={h.days}>
                          <span className="font-medium">{h.days}</span>{" "}
                          <span className="text-[color:var(--brand-gray-medium)]">
                            {h.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {ratingSlot && (
                  <div className="mt-1 pt-2 border-t border-[color:var(--brand-gray-medium)]/15">
                    {ratingSlot}
                  </div>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              size="lg"
              nativeButton={false}
              className="uppercase tracking-wider font-medium"
              render={
                <Link href="/contact">
                  <span>Demander un devis</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              }
            />
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="lg:hidden"
                  aria-label="Ouvrir le menu"
                >
                  <Menu className="size-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle>
                  <AlertisLogo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Menu de navigation principal
                </SheetDescription>
              </SheetHeader>
              <nav className="px-4 pb-6 flex flex-col gap-1 overflow-y-auto">
                {mainNav.map((item) => (
                  <div key={item.href} className="flex flex-col">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 text-base font-medium text-[color:var(--brand-charcoal)] hover:text-[color:var(--brand-red)]"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <ul className="ml-3 mb-2 flex flex-col gap-1 border-l border-[color:var(--brand-gray-medium)]/20 pl-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1.5 text-sm text-[color:var(--brand-gray-medium)] hover:text-[color:var(--brand-red)]"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-[color:var(--brand-gray-medium)]/20 flex flex-col gap-3">
                  <a
                    href={`tel:${siteConfig.contact.phoneE164}`}
                    className="inline-flex items-center gap-2 text-sm text-[color:var(--brand-charcoal)]"
                  >
                    <Phone className="size-4" />
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center gap-2 text-sm text-[color:var(--brand-charcoal)]"
                  >
                    <Mail className="size-4" />
                    {siteConfig.contact.email}
                  </a>
                  <Button
                    size="lg"
                    nativeButton={false}
                    className="mt-2 uppercase tracking-wider"
                    render={
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span>Demander un devis</span>
                        <ArrowUpRight className="size-4" />
                      </Link>
                    }
                  />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
