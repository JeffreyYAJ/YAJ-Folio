import Link from "next/link";

import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils/cn";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, subtitle, className, children }: PageHeaderProps) {
  return (
    <header className={cn("relative pt-32 pb-16 md:pt-40 md:pb-20", className)}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {children}
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
