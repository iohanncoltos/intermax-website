import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
  className?: string;
}

export function Hero({ title, subtitle, children, className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            {subtitle}
          </p>
          {children && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
