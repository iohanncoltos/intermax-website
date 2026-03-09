"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
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
    // Get the current path without the locale
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  const localeNames: Record<string, string> = {
    ro: "RO",
    en: "EN",
    fr: "FR",
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center space-x-2">
          <span className="text-2xl font-bold">InterMax</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Industries Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
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

              {/* Other Nav Items */}
              <NavigationMenuItem>
                <Link href={`/${locale}/portofoliu`} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t("nav.portfolio")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={`/${locale}/despre`} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t("nav.about")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href={`/${locale}/contact`} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t("nav.contact")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                {localeNames[locale]}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => switchLocale("ro")}>
                Română (RO)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale("en")}>
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale("fr")}>
                Français (FR)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                {localeNames[locale]}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => switchLocale("ro")}>
                Română (RO)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale("en")}>
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale("fr")}>
                Français (FR)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
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
