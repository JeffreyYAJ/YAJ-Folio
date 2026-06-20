import { cn } from "@/lib/utils/cn";

type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  labelledBy?: string;
};

export function SectionWrapper({
  id,
  children,
  className,
  labelledBy,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative scroll-mt-28 py-32 md:py-40", className)}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">{children}</div>
    </section>
  );
}
