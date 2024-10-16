import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/dashboard" className={cn("flex items-center gap-2 px-2 py-4 font-bold", className)}>
      <img src="/logo.png" className="block h-5 w-5" alt="logo" />
      <span>
        Freshly
      </span>
    </Link>
  );
}
