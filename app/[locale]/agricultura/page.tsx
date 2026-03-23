import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  Droplets,
  GraduationCap,
  Leaf,
  Map,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/sections/section";
import { CapabilitiesGrid } from "@/components/sections/capabilities-grid";
import { HowWeWork } from "@/components/sections/how-we-work";
import { WhyUs } from "@/components/sections/why-us";
import { FAQ } from "@/components/sections/faq";
import { CTABand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Servicii in agricultura",
};

export default async function AgriculturePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("agriculture");
  const tCommon = await getTranslations("common");

  const capabilities = [
    {
      title: t("capabilities.mapping.title"),
      description: t("capabilities.mapping.description"),
      icon: <Map className="h-8 w-8 text-primary" />,
    },
    {
      title: t("capabilities.ndvi.title"),
      description: t("capabilities.ndvi.description"),
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
    },
    {
      title: t("capabilities.irrigation.title"),
      description: t("capabilities.irrigation.description"),
      icon: <Droplets className="h-8 w-8 text-primary" />,
    },
    {
      title: t("capabilities.scouting.title"),
      description: t("capabilities.scouting.description"),
      icon: <Search className="h-8 w-8 text-primary" />,
    },
    {
      title: t("capabilities.consulting.title"),
      description: t("capabilities.consulting.description"),
      icon: <Leaf className="h-8 w-8 text-primary" />,
    },
    {
      title: t("capabilities.training.title"),
      description: t("capabilities.training.description"),
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
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

  const projects = [
    {
      title: t("caseStudies.projects.0.title"),
      description: t("caseStudies.projects.0.description"),
    },
    {
      title: t("caseStudies.projects.1.title"),
      description: t("caseStudies.projects.1.description"),
    },
    {
      title: t("caseStudies.projects.2.title"),
      description: t("caseStudies.projects.2.description"),
    },
  ];

  return (
    <div className="vertical-agriculture relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_55%),radial-gradient(circle_at_top_right,_rgba(161,196,106,0.12),_transparent_40%)]" />
      <div className="pointer-events-none absolute left-[-7rem] top-24 -z-10 hidden h-72 w-72 rounded-full bg-primary/10 blur-3xl lg:block" />

      <section className="pb-8 pt-8 md:pb-10 md:pt-12">
        <div className="container mx-auto px-4">
          <div className="grid overflow-hidden rounded-[32px] border bg-card shadow-[0_24px_80px_-42px_rgba(15,23,42,0.35)] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <Badge
                variant="outline"
                className="mb-5 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em]"
              >
                InterMax
              </Badge>

              <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {t("hero.title")}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                {t("hero.subtitle")}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={`/${locale}/contact`}>{t("hero.cta1")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#case-studies">{t("hero.cta2")}</Link>
                </Button>
              </div>
            </div>

            <div className="border-t bg-muted/25 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability, index) => (
                  <Card
                    key={capability.title}
                    className="border-primary/10 bg-background/88 shadow-sm"
                  >
                    <CardHeader>
                      <div className="mb-4 flex items-center justify-between">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                          {capability.icon}
                        </div>
                        <span className="text-xs font-medium text-primary/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-snug">
                        {capability.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-muted/35" title={t("capabilities.title")}>
        <CapabilitiesGrid capabilities={capabilities} columns={3} />
      </Section>

      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <Card className="rounded-[32px] border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
              <CardHeader className="px-0 pb-8">
                <CardTitle className="text-3xl tracking-tight sm:text-4xl">
                  {t("process.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <HowWeWork steps={steps} />
              </CardContent>
            </Card>

            <Card className="rounded-[32px] border bg-primary/5 p-6 shadow-sm sm:p-8 lg:p-10">
              <CardHeader className="px-0 pb-8">
                <CardTitle className="text-3xl tracking-tight sm:text-4xl">
                  {t("whyUs.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <WhyUs points={whyUsPoints} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] border bg-muted/35 p-6 sm:p-8 lg:p-10">
            <div className="mb-8 max-w-3xl">
              <Badge variant="outline" className="mb-4">
                InterMax
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t("caseStudies.title")}
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="h-full border-foreground/8 bg-background/92 shadow-sm"
                >
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-semibold tracking-[0.18em] text-primary/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary/70" />
                    </div>
                    <CardTitle className="text-xl leading-snug">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-none leading-6">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section title={t("faq.title")}>
        <FAQ items={faqItems} />
      </Section>

      <CTABand title={t("ctaBand.title")} subtitle={t("ctaBand.subtitle")}>
        <Button asChild size="lg" variant="secondary">
          <Link href={`/${locale}/contact`}>{tCommon("contactUs")}</Link>
        </Button>
      </CTABand>
    </div>
  );
}
