import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface CapabilityProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function CapabilityCard({ title, description, icon }: CapabilityProps) {
  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        {icon && <div className="mb-4">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
    </Card>
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
