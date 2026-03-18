"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const isDefensePage = pathname.includes("/defense-engineering");

  const sectionTitleClass = cn(
    "mb-4 text-sm font-semibold",
    isDefensePage && "text-slate-100"
  );

  const linkClass = cn(
    "text-muted-foreground transition-colors hover:text-foreground",
    isDefensePage && "text-slate-300 hover:text-white"
  );

  return (
    <footer
      className={cn(
        "border-t",
        isDefensePage
          ? "relative overflow-hidden border-slate-700/70 bg-slate-950 text-slate-100"
          : "bg-muted/40"
      )}
    >
      {isDefensePage && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,24,54,0.96)_0%,rgba(6,20,46,0.98)_55%,rgba(4,14,34,1)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(78,143,255,0.2),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(102,186,255,0.14),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(35,82,168,0.24),transparent_36%)]" />
        </>
      )}

      <div className="container relative mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3
              className={cn(
                "mb-4 text-lg font-bold",
                isDefensePage && "text-white"
              )}
            >
              InterMax
            </h3>
            <p
              className={cn(
                "text-sm text-muted-foreground",
                isDefensePage && "text-slate-300"
              )}
            >
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className={sectionTitleClass}>{t("footer.industries")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/constructii`} className={linkClass}>
                  {t("nav.construction")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/defense-engineering`}
                  className={linkClass}
                >
                  {t("nav.defense")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/agricultura`} className={linkClass}>
                  {t("nav.agriculture")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={sectionTitleClass}>{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/portofoliu`} className={linkClass}>
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/despre`} className={linkClass}>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className={linkClass}>
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={sectionTitleClass}>{t("footer.legal")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className={linkClass}>
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className={cn("my-8", isDefensePage && "bg-white/12")} />

        <div
          className={cn(
            "text-center text-sm text-muted-foreground",
            isDefensePage && "text-slate-300"
          )}
        >
          &copy; {currentYear} InterMax. {t("footer.allRightsReserved")}
        </div>
      </div>
    </footer>
  );
}
