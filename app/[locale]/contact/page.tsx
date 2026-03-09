import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/sections/section";
import { ContactForm } from "@/components/contact-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  return (
    <>
      <Hero title={t("hero.title")} subtitle={t("hero.subtitle")} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">{t("form.title")}</h3>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">{t("info.title")}</h3>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <MapPin className="h-5 w-5 text-primary" />
                    Adresă
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t("info.address")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Phone className="h-5 w-5 text-primary" />
                    Telefon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t("info.phone")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t("info.email")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Clock className="h-5 w-5 text-primary" />
                    Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t("info.hours")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
