import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CTABandProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function CTABand({ title, subtitle, children, className }: CTABandProps) {
  return (
    <section
      className={cn(
        "bg-primary py-16 text-primary-foreground md:py-20",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mb-8 text-lg opacity-90">{subtitle}</p>
          )}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
