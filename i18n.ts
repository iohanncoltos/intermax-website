import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Supported locales
export const locales = ["ro", "en", "fr"] as const;
export type Locale = (typeof locales)[number];

// Default locale
export const defaultLocale: Locale = "ro";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
