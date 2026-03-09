import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/sections/section";

export const metadata: Metadata = {
  title: "Portofoliu",
};

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("portfolio");

  return (
    <>
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-muted-foreground">
            {t("comingSoon")}
          </p>
        </div>
      </Section>
    </>
  );
}
