import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, List, Search, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Defense Engineering",
};

export default async function DefensePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("defense");

  const primarySteps = [
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
  ];

  const valuePointsByLocale = {
    ro: [
      {
        title: "Fiecare proiect personalizat",
        description: "Configurare adaptata contextului operational si cerintelor clientului.",
        icon: UserRound,
      },
      {
        title: "Istoric de incredere",
        description: "Rezultate demonstrate in proiecte reale, cu livrari predictibile.",
        icon: Search,
      },
      {
        title: "Raspuns si actiune imediata",
        description: "Interventie rapida pentru continuitate operationala si suport tehnic.",
        icon: List,
      },
    ],
    en: [
      {
        title: "Tailored project approach",
        description: "Configuration adapted to mission context and client requirements.",
        icon: UserRound,
      },
      {
        title: "Trusted track record",
        description: "Proven outcomes in real deployments with predictable delivery.",
        icon: Search,
      },
      {
        title: "Rapid response and action",
        description: "Fast intervention for operational continuity and technical support.",
        icon: List,
      },
    ],
    fr: [
      {
        title: "Approche projet personnalisee",
        description: "Configuration adaptee au contexte operationnel et aux exigences client.",
        icon: UserRound,
      },
      {
        title: "Historique de confiance",
        description: "Resultats prouves sur des projets reels avec livraisons previsibles.",
        icon: Search,
      },
      {
        title: "Reponse et action rapides",
        description: "Intervention rapide pour continuite operationnelle et support technique.",
        icon: List,
      },
    ],
  } as const;

  const valuePoints =
    valuePointsByLocale[locale as keyof typeof valuePointsByLocale] ??
    valuePointsByLocale.en;

  const mobileFlowItems = [
    ...primarySteps.map((step, index) => ({
      badge: (index + 1).toString(),
      title: step.title,
      description: step.description,
    })),
    ...valuePoints.map((point) => ({
      badge: "*",
      title: point.title,
      description: point.description,
    })),
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
    <div className="defense-page overflow-hidden bg-slate-950 text-slate-100">
      <section className="relative isolate min-h-[84vh] border-b border-slate-800/80 md:min-h-[90vh]">
        <Image
          src="/photos/6.png"
          alt={t("hero.title")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(1,6,21,0.93)_10%,rgba(5,15,36,0.74)_45%,rgba(5,17,40,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(132,200,255,0.38),transparent_34%),radial-gradient(circle_at_12%_75%,rgba(25,84,168,0.28),transparent_32%)]" />

        <div className="container relative z-10 mx-auto flex min-h-[84vh] items-center justify-center px-4 pb-14 pt-28 text-center md:min-h-[90vh] md:pb-16 md:pt-32">
          <div className="mx-auto max-w-4xl">
            <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-slate-200 sm:text-lg">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="h-11 bg-blue-600 px-5 text-white hover:bg-blue-500">
                <Link href={`/${locale}/contact`}>{t("hero.cta1")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 border-white/20 bg-white px-5 text-slate-900 hover:bg-slate-100"
              >
                <Link href="#how-we-work" className="inline-flex items-center gap-2">
                  {t("hero.cta2")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="relative isolate border-b border-slate-800/80 py-16 sm:py-20">
        <Image
          src="/photos/7.png"
          alt={t("process.title")}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(2,10,28,0.92)_8%,rgba(5,17,44,0.84)_52%,rgba(7,18,40,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(78,143,255,0.2),transparent_35%),radial-gradient(circle_at_78%_82%,rgba(26,78,171,0.28),transparent_38%)]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t("process.title")}
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              Flux operational clar, cu pasi vizibili si suport complet dupa livrare.
            </p>
          </div>

          <div className="relative mx-auto mt-12 hidden h-[520px] w-full max-w-6xl lg:block">
            <svg
              className="pointer-events-none absolute inset-0"
              viewBox="0 0 1200 520"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M240 112 L960 112" stroke="rgba(160,204,255,0.52)" strokeWidth="1.6" />
              <path d="M240 336 L960 336" stroke="rgba(160,204,255,0.42)" strokeDasharray="4 4" strokeWidth="1.5" />
              <path
                d="M200 112 C65 136 65 314 200 336"
                stroke="rgba(160,204,255,0.52)"
                strokeWidth="1.8"
                fill="none"
              />
              <path
                d="M600 112 C760 136 760 314 600 336"
                stroke="rgba(160,204,255,0.25)"
                strokeWidth="1.6"
                fill="none"
              />
            </svg>

            <div className="absolute inset-x-0 top-6 grid grid-cols-3 gap-8">
              {primarySteps.map((step, index) => (
                <article key={step.title} className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-blue-200/35 bg-slate-900/65 text-4xl font-medium text-slate-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                    {index + 1}
                  </div>
                  <h3 className="mx-auto max-w-xs text-3xl font-semibold leading-snug text-white">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="absolute inset-x-0 top-[272px] grid grid-cols-3 gap-8">
              {valuePoints.map((point) => {
                const Icon = point.icon;
                return (
                  <article key={point.title} className="text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-blue-200/35 bg-slate-900/65 text-slate-100 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mx-auto max-w-xs text-3xl font-semibold leading-snug text-white">
                      {point.title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-300">
                      {point.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl space-y-4 lg:hidden">
            {mobileFlowItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/55 p-5 backdrop-blur-sm"
              >
                <div className="mb-3 inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-blue-200/40 bg-blue-500/15 px-2 text-sm font-semibold text-blue-100">
                  {item.badge}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-slate-950 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(15,43,88,0.22),transparent_38%),radial-gradient(circle_at_84%_32%,rgba(41,95,176,0.16),transparent_34%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800/80 bg-slate-900/55 p-5 shadow-[0_16px_70px_rgba(2,8,23,0.55)] backdrop-blur sm:p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {t("faq.title")}
            </h2>

            <Accordion className="mt-6 w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`faq-${index}`}
                  className="border-slate-700/70"
                >
                  <AccordionTrigger className="py-4 text-left text-base text-slate-100 hover:no-underline hover:text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-slate-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

