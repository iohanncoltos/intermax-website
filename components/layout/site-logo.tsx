import Image from "next/image";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  imageClassName?: string;
  onDark?: boolean;
  size?: "header" | "footer";
  priority?: boolean;
}

export function SiteLogo({
  className,
  imageClassName,
  onDark = false,
  size = "header",
  priority = false,
}: SiteLogoProps) {
  const imageSizeClass =
    size === "footer"
      ? "h-12 w-auto sm:h-14"
      : "h-10 w-auto sm:h-11";

  return (
    <span
      className={cn(
        "inline-flex items-center",
        onDark && "rounded-2xl bg-white/96 px-3 py-2 shadow-lg ring-1 ring-white/30",
        className
      )}
    >
      <Image
        src="/photos/SIGLA INTER MAX_22032025.svg"
        alt="InterMax"
        width={214}
        height={113}
        priority={priority}
        className={cn(imageSizeClass, imageClassName)}
      />
    </span>
  );
}
