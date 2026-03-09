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

interface VerticalCardProps {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
  className?: string;
}

export function VerticalCard({
  title,
  description,
  bullets,
  href,
  cta,
  className,
}: VerticalCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
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
        <Button asChild variant="outline" className="w-full">
          <Link href={href}>
            {cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
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
