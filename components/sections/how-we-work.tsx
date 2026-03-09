import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StepProps {
  number: number;
  title: string;
  description: string;
}

export function ProcessStep({ number, title, description }: StepProps) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <Badge
          variant="default"
          className="h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-base font-bold"
        >
          {number}
        </Badge>
        {number < 4 && (
          <div className="mt-2 h-full w-px bg-border" />
        )}
      </div>
      <div className="flex-1 pb-8">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

interface HowWeWorkProps {
  steps: Array<{
    title: string;
    description: string;
  }>;
}

export function HowWeWork({ steps }: HowWeWorkProps) {
  return (
    <div className="mx-auto max-w-3xl">
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          number={index + 1}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}
