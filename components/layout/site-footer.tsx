import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  const t = useTranslations();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">InterMax</h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">
              {t("footer.industries")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/constructii`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.construction")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/defense-engineering`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.defense")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/agricultura`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.agriculture")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">
              {t("footer.company")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/portofoliu`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/despre`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {currentYear} InterMax. {t("footer.allRightsReserved")}
        </div>
      </div>
    </footer>
  );
}
