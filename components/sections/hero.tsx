"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
  overlay?: boolean;
  dark?: boolean;
}

export function Hero({
  title,
  subtitle,
  children,
  className,
  backgroundImage,
  overlay = true,
  dark = false,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        dark ? "min-h-screen py-24 sm:py-32 md:py-40 lg:py-48 bg-slate-950 text-white flex items-center" : "py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background via-background to-muted/20",
        className
      )}
    >
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className={cn(
                dark ? "object-cover object-center" : "object-cover"
              )}
              priority
              sizes="100vw"
              quality={90}
            />
          </div>
          {overlay && (
            <div className={cn(
              "absolute inset-0",
              dark ? "bg-slate-950/30" : "bg-background/60"
            )} />
          )}
        </>
      )}

      <div className="container relative z-10 mx-auto px-4 w-full">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={cn(
            "mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl",
            dark && "text-white"
          )}>
            {title}
          </h1>
          <p className={cn(
            "mb-8 sm:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed",
            dark ? "text-slate-300" : "text-muted-foreground"
          )}>
            {subtitle}
          </p>
          {children && (
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative gradient */}
      {!backgroundImage && (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      )}
    </section>
  );
}
