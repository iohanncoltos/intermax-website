"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

interface CapabilityProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

export function CapabilityCard({ title, description, icon, image }: CapabilityProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="transition-all hover:shadow-lg h-full overflow-hidden group">
        {image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader>
          {icon && <div className="mb-4">{icon}</div>}
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
}

interface CapabilitiesGridProps {
  capabilities: CapabilityProps[];
  columns?: 2 | 3 | 4;
}

export function CapabilitiesGrid({
  capabilities,
  columns = 3,
}: CapabilitiesGridProps) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {capabilities.map((capability, index) => (
        <CapabilityCard key={index} {...capability} />
      ))}
    </div>
  );
}
