import { cn } from "@/lib/utils";
import { COMPANY } from "@/lib/site";

type Props = {
  onDark?: boolean;
  className?: string;
};

/** Logo de crear.chat: ícono del robot más el nombre de la plataforma. */
export default function Logo({ onDark, className }: Props) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img
        src={COMPANY.logoUrl}
        srcSet={`${COMPANY.logoUrl} 1x, ${COMPANY.logoUrl2x} 2x`}
        alt=""
        width={44}
        height={44}
        className="h-11 w-11"
      />
      <span className="leading-none">
        <span className={cn("block font-display text-xl font-bold tracking-tight", onDark ? "text-white" : "text-ink")}>
          crear<span className={onDark ? "text-brand-200" : "text-brand-600"}>.chat</span>
        </span>
        <span className={cn("mt-1 block text-[11px] font-medium", onDark ? "text-brand-200" : "text-ink-muted")}>
          por {COMPANY.legalName}
        </span>
      </span>
    </span>
  );
}
