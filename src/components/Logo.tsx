type MarkProps = { className?: string; title?: string };

/** The Renzo "R" monogram, traced from the brand mark. Inherits color via currentColor. */
export function LogoMark({ className, title = "Renzo Studio" }: MarkProps) {
  return (
    <svg
      viewBox="697 675 533 575"
      className={className}
      role="img"
      aria-label={title}
      fill="currentColor"
      fillRule="evenodd"
    >
      <path d="M697 675H1020A210 210 0 0 1 1138 1055H817Q776 1055 762 1088L697 1215ZM697 875H955A12.5 12.5 0 0 1 955 900H697Z" />
      <path d="M817 1082H1135L1228 1250H710L786 1100Q795 1082 817 1082Z" />
    </svg>
  );
}

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={`h-8 w-auto ${light ? "text-white" : "text-ink"}`} />
      <span
        className={`font-display text-[15px] font-semibold leading-[1.02] tracking-tight ${
          light ? "text-white" : "text-ink"
        }`}
      >
        Renzo
        <br />
        Studio<sup className="ml-0.5 text-[8px] font-medium">©</sup>
      </span>
    </span>
  );
}
