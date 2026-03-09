import { Check } from "lucide-react";

interface WhyUsProps {
  points: string[];
}

export function WhyUs({ points }: WhyUsProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
            <span className="text-muted-foreground">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
