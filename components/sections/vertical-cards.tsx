"use client";

import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface VerticalCardProps {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  image?: string;
  className?: string;
}

export function VerticalCard({
  title,
  description,
  bullets,
  href,
  cta,
  image,
  className,
}: VerticalCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300 ${className}`}>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">{bullet}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full group">
            <Link href={href}>
              {cta}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface VerticalCardsProps {
  verticals: VerticalCardProps[];
}

export function VerticalCards({ verticals }: VerticalCardsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {verticals.map((vertical, index) => (
        <VerticalCard key={index} {...vertical} />
      ))}
    </div>
  );
}
