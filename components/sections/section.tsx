import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}

export function Section({
  children,
  className,
  title,
  subtitle,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
