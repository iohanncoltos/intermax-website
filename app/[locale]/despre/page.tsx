import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Blocks,
  Building2,
  Cog,
  Handshake,
  Shield,
  ShieldCheck,
  Sprout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HowWeWork } from "@/components/sections/how-we-work";
import { WhyUs } from "@/components/sections/why-us";
import { CTABand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Despre",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");
  const tCommon = await getTranslations("common");

  const snapshotItems = [
    t("snapshot.items.0"),
    t("snapshot.items.1"),
    t("snapshot.items.2"),
  ];

  const pillars = [
    {
      title: t("pillars.items.0.title"),
      description: t("pillars.items.0.description"),
      icon: <Blocks className="h-8 w-8 text-primary" />,
    },
    {
      title: t("pillars.items.1.title"),
      description: t("pillars.items.1.description"),
      icon: <Cog className="h-8 w-8 text-primary" />,
    },
    {
      title: t("pillars.items.2.title"),
      description: t("pillars.items.2.description"),
      icon: <Handshake className="h-8 w-8 text-primary" />,
    },
    {
      title: t("pillars.items.3.title"),
      description: t("pillars.items.3.description"),
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    },
  ];

  const divisions = [
    {
      title: t("divisions.construction.title"),
      description: t("divisions.construction.description"),
      href: `/${locale}/constructii`,
      image: "/photos/2.png",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      title: t("divisions.defense.title"),
      description: t("divisions.defense.description"),
      href: `/${locale}/defense-engineering`,
      image: "/photos/3.png",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: t("divisions.agriculture.title"),
      description: t("divisions.agriculture.description"),
      href: `/${locale}/agricultura`,
      image: "/photos/image.png",
      icon: <Sprout className="h-5 w-5" />,
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

  const commitments = [
    t("commitment.points.0"),
    t("commitment.points.1"),
    t("commitment.points.2"),
    t("commitment.points.3"),
    t("commitment.points.4"),
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.09),_transparent_55%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.05),_transparent_40%)]" />
      <div className="pointer-events-none absolute right-[-8rem] top-24 -z-10 hidden h-72 w-72 rounded-full bg-primary/8 blur-3xl lg:block" />

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
                {t("intro.title")}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                {t("intro.subtitle")}
              </p>

              <div className="mt-8 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
                <p>{t("intro.paragraph1")}</p>
                <p>{t("intro.paragraph2")}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={`/${locale}/contact`}>{tCommon("contactUs")}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/portofoliu`}>
                    {tCommon("viewPortfolio")}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative min-h-[340px] border-t bg-muted/25 lg:border-l lg:border-t-0">
              <Image
                src="/photos/1.png"
                alt={t("snapshot.title")}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.00)_35%,rgba(15,23,42,0.66)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <Card className="border-white/25 bg-background/88 shadow-2xl backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>{t("snapshot.title")}</CardTitle>
                    <CardDescription>{t("snapshot.description")}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 pb-4">
                    {snapshotItems.map((item, index) => (
                      <div
                        key={index}
                        className="rounded-xl border bg-background/90 px-4 py-3 text-sm leading-6 text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="rounded-[32px] border bg-muted/35 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
              <div className="max-w-md">
                <Badge variant="outline" className="mb-4">
                  InterMax
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t("pillars.title")}
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  {t("pillars.subtitle")}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar, index) => (
                  <Card
                    key={index}
                    className="h-full border-foreground/8 bg-background/85 shadow-sm"
                  >
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                        {pillar.icon}
                      </div>
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                      <CardDescription className="leading-6">
                        {pillar.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-3xl">
            <Badge variant="outline" className="mb-4">
              InterMax
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t("divisions.title")}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {t("divisions.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {divisions.map((division) => (
              <Link key={division.href} href={division.href} className="block h-full">
                <Card className="h-full overflow-hidden border-foreground/8 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={division.image}
                      alt={division.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/92 text-slate-900 shadow-lg">
                      {division.icon}
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl">{division.title}</CardTitle>
                    <CardDescription className="leading-6">
                      {division.description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="justify-between text-sm text-primary">
                    <span>{tCommon("learnMore")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="mb-8 max-w-2xl">
                <Badge variant="outline" className="mb-4">
                  InterMax
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t("process.title")}
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  {t("process.subtitle")}
                </p>
              </div>
              <HowWeWork steps={steps} />
            </div>

            <div className="rounded-[32px] border bg-primary/5 p-6 shadow-sm sm:p-8 lg:p-10">
              <div className="mb-8 max-w-xl">
                <Badge variant="outline" className="mb-4 bg-background/70">
                  InterMax
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t("commitment.title")}
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  {t("commitment.subtitle")}
                </p>
              </div>
              <WhyUs points={commitments} />
            </div>
          </div>
        </div>
      </section>

      <div className="pt-8">
        <CTABand title={t("ctaBand.title")} subtitle={t("ctaBand.subtitle")}>
          <Button asChild size="lg" variant="secondary">
            <Link href={`/${locale}/contact`}>{tCommon("contactUs")}</Link>
          </Button>
        </CTABand>
      </div>
    </div>
  );
}
