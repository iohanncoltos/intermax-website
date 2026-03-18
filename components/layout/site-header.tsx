"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const verticals = [
  {
    key: "construction",
    href: "/constructii",
  },
  {
    key: "defense",
    href: "/defense-engineering",
  },
  {
    key: "agriculture",
    href: "/agricultura",
  },
];

export function SiteHeader() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const localeNames: Record<string, string> = {
    ro: "RO",
    en: "EN",
    fr: "FR",
  };

  const isDefensePage = pathname.includes("/defense-engineering");
  const defenseNavClass =
    "bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-open:bg-white/10 data-popup-open:bg-white/10";
  const defenseDropdownClass =
    "border border-white/15 bg-slate-950/95 text-slate-100 shadow-2xl ring-white/10 backdrop-blur";

  return (
    <header
      className={cn(
        "z-50 w-full transition-colors",
        isDefensePage
          ? "absolute inset-x-0 top-0"
          : "sticky top-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <span
            className={cn(
              "text-2xl font-semibold tracking-tight",
              isDefensePage
                ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
                : "text-foreground"
            )}
          >
            InterMax
          </span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={isDefensePage ? defenseNavClass : undefined}
                >
                  {t("nav.industries")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px]">
                    {verticals.map((vertical) => (
                      <Link
                        key={vertical.key}
                        href={`/${locale}${vertical.href}`}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {t(`nav.${vertical.key}`)}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {t(`home.verticals.${vertical.key}.description`)}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href={`/${locale}/portofoliu`}
                  className={
                    isDefensePage
                      ? cn(navigationMenuTriggerStyle(), defenseNavClass)
                      : navigationMenuTriggerStyle()
                  }
                >
                  {t("nav.portfolio")}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href={`/${locale}/despre`}
                  className={
                    isDefensePage
                      ? cn(navigationMenuTriggerStyle(), defenseNavClass)
                      : navigationMenuTriggerStyle()
                  }
                >
                  {t("nav.about")}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href={`/${locale}/contact`}
                  className={
                    isDefensePage
                      ? cn(navigationMenuTriggerStyle(), defenseNavClass)
                      : navigationMenuTriggerStyle()
                  }
                >
                  {t("nav.contact")}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <DropdownMenu>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-2",
                isDefensePage && "text-white hover:bg-white/10 hover:text-white"
              )}
              asChild
            >
              <DropdownMenuTrigger>
                <Globe className="h-4 w-4" />
                {localeNames[locale]}
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent
              align="end"
              className={isDefensePage ? defenseDropdownClass : undefined}
            >
              <DropdownMenuItem onClick={() => switchLocale("ro")}>
                Romana (RO)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale("en")}>
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale("fr")}>
                Francais (FR)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <DropdownMenu>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "gap-2",
                isDefensePage && "text-white hover:bg-white/10 hover:text-white"
              )}
              asChild
            >
              <DropdownMenuTrigger>
                <Globe className="h-4 w-4" />
                {localeNames[locale]}
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent
              align="end"
              className={isDefensePage ? defenseDropdownClass : undefined}
            >
              <DropdownMenuItem onClick={() => switchLocale("ro")}>
                Romana (RO)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale("en")}>
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale("fr")}>
                Francais (FR)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                isDefensePage && "text-white hover:bg-white/10 hover:text-white"
              )}
              asChild
            >
              <DropdownMenuTrigger>
                <Menu className="h-5 w-5" />
              </DropdownMenuTrigger>
            </Button>
            <DropdownMenuContent
              align="end"
              className={cn("w-48", isDefensePage && defenseDropdownClass)}
            >
              <DropdownMenuItem>
                <Link href={`/${locale}/constructii`} className="w-full">
                  {t("nav.construction")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${locale}/defense-engineering`} className="w-full">
                  {t("nav.defense")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${locale}/agricultura`} className="w-full">
                  {t("nav.agriculture")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${locale}/portofoliu`} className="w-full">
                  {t("nav.portfolio")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${locale}/despre`} className="w-full">
                  {t("nav.about")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/${locale}/contact`} className="w-full">
                  {t("nav.contact")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
