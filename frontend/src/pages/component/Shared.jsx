import { Compass } from "lucide-react";

export const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
      <Compass className="h-5 w-5 text-white" strokeWidth={2.25} />
    </div>
    <span className="text-[1.05rem] font-bold tracking-tight text-slate-900">
      College Compass
    </span>
  </div>
);

export const SectionLabel = ({ children }) => (
  <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
    {children}
  </span>
);