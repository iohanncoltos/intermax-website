import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/sections/section";
import { VerticalCards } from "@/components/sections/vertical-cards";
import { CapabilitiesGrid } from "@/components/sections/capabilities-grid";
import { CTABand } from "@/components/sections/cta-band";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Building2,
  Shield,
  Sprout,
  Cog,
  Wrench,
  CheckCircle,
  HeadphonesIcon,
  Award,
  Lightbulb,
} from "lucide-react";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  const verticals = [
    {
      title: t("home.verticals.construction.title"),
      description: t("home.verticals.construction.description"),
      bullets: [
        t("home.verticals.construction.bullets.0"),
        t("home.verticals.construction.bullets.1"),
        t("home.verticals.construction.bullets.2"),
      ],
      href: `/${locale}/constructii`,
      cta: t("common.learnMore"),
    },
    {
      title: t("home.verticals.defense.title"),
      description: t("home.verticals.defense.description"),
      bullets: [
        t("home.verticals.defense.bullets.0"),
        t("home.verticals.defense.bullets.1"),
        t("home.verticals.defense.bullets.2"),
      ],
      href: `/${locale}/defense-engineering`,
      cta: t("common.learnMore"),
    },
    {
      title: t("home.verticals.agriculture.title"),
      description: t("home.verticals.agriculture.description"),
      bullets: [
        t("home.verticals.agriculture.bullets.0"),
        t("home.verticals.agriculture.bullets.1"),
        t("home.verticals.agriculture.bullets.2"),
      ],
      href: `/${locale}/agricultura`,
      cta: t("common.learnMore"),
    },
  ];

  const competencies = [
    {
      title: t("home.competencies.engineering.title"),
      description: t("home.competencies.engineering.description"),
      icon: <Cog className="h-8 w-8 text-primary" />,
    },
    {
      title: t("home.competencies.manufacturing.title"),
      description: t("home.competencies.manufacturing.description"),
      icon: <Wrench className="h-8 w-8 text-primary" />,
    },
    {
      title: t("home.competencies.integration.title"),
      description: t("home.competencies.integration.description"),
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: t("home.competencies.support.title"),
      description: t("home.competencies.support.description"),
      icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
    },
    {
      title: t("home.competencies.compliance.title"),
      description: t("home.competencies.compliance.description"),
      icon: <Award className="h-8 w-8 text-primary" />,
    },
    {
      title: t("home.competencies.innovation.title"),
      description: t("home.competencies.innovation.description"),
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero title={t("home.hero.title")} subtitle={t("home.hero.subtitle")}>
        <Button asChild size="lg">
          <Link href={`#verticals`}>{t("home.hero.cta1")}</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={`/${locale}/portofoliu`}>{t("home.hero.cta2")}</Link>
        </Button>
      </Hero>

      {/* Verticals Section */}
      <Section id="verticals" title={t("home.verticals.title")}>
        <VerticalCards verticals={verticals} />
      </Section>

      {/* Core Competencies */}
      <Section
        className="bg-muted/40"
        title={t("home.competencies.title")}
      >
        <CapabilitiesGrid capabilities={competencies} />
      </Section>

      {/* Case Studies Preview */}
      <Section title={t("home.caseStudies.title")}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video bg-muted" />
              <CardHeader>
                <CardTitle>Project {i}</CardTitle>
                <CardDescription>
                  Case study placeholder - content coming soon
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href={`/${locale}/portofoliu`}>
              {t("home.caseStudies.viewAll")}
            </Link>
          </Button>
        </div>
      </Section>

      {/* Compliance */}
      <Section
        className="bg-muted/40"
        title={t("home.compliance.title")}
      >
        <p className="mx-auto max-w-3xl text-center text-muted-foreground">
          {t("home.compliance.description")}
        </p>
      </Section>

      {/* CTA Band */}
      <CTABand
        title={t("home.ctaBand.title")}
        subtitle={t("home.ctaBand.subtitle")}
      >
        <Button asChild size="lg" variant="secondary">
          <Link href={`/${locale}/contact`}>{t("common.contactUs")}</Link>
        </Button>
      </CTABand>
    </>
  );
}
