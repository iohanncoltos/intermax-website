"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function VerticalSwitch() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // Determine current vertical based on pathname
  const getCurrentVertical = () => {
    if (pathname.includes("/constructii")) return "constructii";
    if (pathname.includes("/defense-engineering")) return "defense";
    if (pathname.includes("/agricultura")) return "agricultura";
    return "";
  };

  const currentVertical = getCurrentVertical();
  const isDefensePage = pathname.includes("/defense-engineering");

  const handleVerticalChange = (value: string) => {
    const routes = {
      constructii: `/${locale}/constructii`,
      defense: `/${locale}/defense-engineering`,
      agricultura: `/${locale}/agricultura`,
    };
    router.push(routes[value as keyof typeof routes]);
  };

  // Only show on vertical pages
  if (!currentVertical || isDefensePage) return null;

  return (
    <div className="sticky top-20 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <Tabs value={currentVertical} onValueChange={handleVerticalChange}>
          <TabsList className="grid w-full max-w-2xl grid-cols-3 mx-auto">
            <TabsTrigger value="constructii">{t("construction")}</TabsTrigger>
            <TabsTrigger value="defense">{t("defense")}</TabsTrigger>
            <TabsTrigger value="agricultura">{t("agriculture")}</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
