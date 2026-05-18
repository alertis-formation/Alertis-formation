import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type AlertisLogoProps = {
  className?: string;
  variant?: "full" | "icon";
  theme?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizeClasses: Record<NonNullable<AlertisLogoProps["size"]>, string> = {
  sm: "h-10 w-auto",
  md: "h-12 w-auto md:h-14",
  lg: "h-16 w-auto md:h-20",
};

export function AlertisLogo({
  className,
  variant = "full",
  theme = "dark",
  size = "md",
  priority = false,
}: AlertisLogoProps) {
  const src =
    theme === "light"
      ? "/brand/logo-alertis-light.png"
      : "/brand/logo-alertis.png";

  return (
    <Link
      href="/"
      aria-label="Alertis Formation — Accueil"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={src}
        alt="Alertis Formation"
        width={variant === "icon" ? 40 : 240}
        height={variant === "icon" ? 40 : 80}
        priority={priority}
        className={variant === "icon" ? "h-10 w-auto" : sizeClasses[size]}
      />
    </Link>
  );
}
