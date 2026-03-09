import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/sections/section";
import { CapabilitiesGrid } from "@/components/sections/capabilities-grid";
import { HowWeWork } from "@/components/sections/how-we-work";
import { WhyUs } from "@/components/sections/why-us";
import { FAQ } from "@/components/sections/faq";
import { CTABand } from "@/components/sections/cta-band";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Construcții",
};

export default async function ConstructionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("construction");
  const tCommon = await getTranslations("common");

  const capabilities = [
    {
      title: t("capabilities.facades.title"),
      description: t("capabilities.facades.description"),
    },
    {
      title: t("capabilities.partitions.title"),
      description: t("capabilities.partitions.description"),
    },
    {
      title: t("capabilities.metalwork.title"),
      description: t("capabilities.metalwork.description"),
    },
    {
      title: t("capabilities.roofing.title"),
      description: t("capabilities.roofing.description"),
    },
    {
      title: t("capabilities.doors.title"),
      description: t("capabilities.doors.description"),
    },
    {
      title: t("capabilities.installation.title"),
      description: t("capabilities.installation.description"),
    },
  ];

  const steps = [
    {
      title: t("process.step1.title"),
      description: t("process.step1.description"),
    },
    {
      title: t("process.step2.title"),
      description: t("process.step2.description"),
    },
    {
      title: t("process.step3.title"),
      description: t("process.step3.description"),
    },
    {
      title: t("process.step4.title"),
      description: t("process.step4.description"),
    },
  ];

  const whyUsPoints = [
    t("whyUs.point1"),
    t("whyUs.point2"),
    t("whyUs.point3"),
    t("whyUs.point4"),
    t("whyUs.point5"),
  ];

  const faqItems = [
    {
      question: t("faq.q1.question"),
      answer: t("faq.q1.answer"),
    },
    {
      question: t("faq.q2.question"),
      answer: t("faq.q2.answer"),
    },
    {
      question: t("faq.q3.question"),
      answer: t("faq.q3.answer"),
    },
    {
      question: t("faq.q4.question"),
      answer: t("faq.q4.answer"),
    },
    {
      question: t("faq.q5.question"),
      answer: t("faq.q5.answer"),
    },
  ];

  return (
    <div className="vertical-construction">
      {/* Hero */}
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")}>
        <Button asChild size="lg">
          <Link href={`/${locale}/contact`}>{t("hero.cta1")}</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href={`#projects`}>{t("hero.cta2")}</Link>
        </Button>
      </Hero>

      {/* Capabilities */}
      <Section title={t("capabilities.title")}>
        <CapabilitiesGrid capabilities={capabilities} columns={3} />
      </Section>

      {/* How We Work */}
      <Section className="bg-muted/40" title={t("process.title")}>
        <HowWeWork steps={steps} />
      </Section>

      {/* Why Us */}
      <Section title={t("whyUs.title")}>
        <WhyUs points={whyUsPoints} />
      </Section>

      {/* Case Studies */}
      <Section id="projects" className="bg-muted/40" title="Proiecte reprezentative">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="aspect-video bg-muted" />
              <CardHeader>
                <CardTitle>Project {i}</CardTitle>
                <CardDescription>
                  Construction case study - content coming soon
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title={t("faq.title")}>
        <FAQ items={faqItems} />
      </Section>

      {/* CTA */}
      <CTABand title={t("ctaBand.title")} subtitle={t("ctaBand.subtitle")}>
        <Button asChild size="lg" variant="secondary">
          <Link href={`/${locale}/contact`}>{tCommon("contactUs")}</Link>
        </Button>
      </CTABand>
    </div>
  );
}
