"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { SiteLogo } from "@/components/layout/site-logo";

export function SiteFooter() {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container relative mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <SiteLogo size="footer" />
            </div>
            <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">{t("footer.industries")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/constructii`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.construction")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/defense-engineering`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.defense")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/agricultura`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.agriculture")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/portofoliu`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/despre`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">{t("footer.legal")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} InterMax. {t("footer.allRightsReserved")}
        </div>
      </div>
    </footer>
  );
}
