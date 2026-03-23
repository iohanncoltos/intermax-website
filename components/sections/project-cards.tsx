"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export function ProjectCard({ title, description, href, index }: ProjectCardProps) {
  const content = (
    <Card className="group h-full rounded-[28px] border-foreground/10 bg-background/95 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="flex h-full flex-col p-6 sm:p-7">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.18em] text-primary/70">
            {String((index ?? 0) + 1).padStart(2, "0")}
          </span>
          <ArrowRight className="h-4 w-4 text-primary/70 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
        <CardTitle className="text-xl leading-snug transition-colors group-hover:text-primary">
          {title}
        </CardTitle>
        <CardDescription className="mt-3 line-clamp-none text-base leading-7">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );

  if (href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href={href} className="block h-full">
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {content}
    </motion.div>
  );
}

interface ProjectCardsProps {
  projects: ProjectCardProps[];
}

export function ProjectCards({ projects }: ProjectCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  );
}
