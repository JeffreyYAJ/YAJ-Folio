"use client";

export function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#f3efe7]" />
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "linear-gradient(rgba(17,24,39,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(17,24,39,0.04) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(36,171,215,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(247,170,113,0.08),transparent_28%)]" />
    </div>
  );
}
