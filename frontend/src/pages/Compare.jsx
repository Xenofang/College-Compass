import  { useState } from "react";
import { Plus, X, Star, GraduationCap, Check, Minus } from "lucide-react";
import { SectionLabel } from "./component/Shared.jsx";

const CATALOG = [
  { name: "IIT Delhi", location: "New Delhi", rating: 4.8, fees: "₹2.5L/yr", course: "Engineering", placement: "₹18L avg", hostel: true, color: "from-blue-500 to-blue-700" },
  { name: "BITS Pilani", location: "Pilani, Rajasthan", rating: 4.6, fees: "₹4.8L/yr", course: "Engineering", placement: "₹15L avg", hostel: true, color: "from-indigo-500 to-blue-700" },
  { name: "VIT Vellore", location: "Vellore, Tamil Nadu", rating: 4.3, fees: "₹3.9L/yr", course: "Engineering", placement: "₹9L avg", hostel: true, color: "from-sky-400 to-indigo-600" },
  { name: "Christ University", location: "Bengaluru, Karnataka", rating: 4.5, fees: "₹3.2L/yr", course: "Management", placement: "₹8L avg", hostel: true, color: "from-blue-400 to-indigo-600" },
  { name: "NMIMS Mumbai", location: "Mumbai, Maharashtra", rating: 4.4, fees: "₹4.5L/yr", course: "Management", placement: "₹11L avg", hostel: false, color: "from-indigo-400 to-blue-700" },
  { name: "St. Stephen's College", location: "New Delhi", rating: 4.7, fees: "₹40K/yr", course: "Arts & Science", placement: "₹6L avg", hostel: true, color: "from-sky-500 to-blue-600" },
];

const MAX_COMPARE = 3;

const PickerCard = ({ college, selected, disabled, onToggle }) => (
  <button
    onClick={() => onToggle(college.name)}
    disabled={disabled}
    className={`relative flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
      selected
        ? "border-blue-500 bg-blue-50"
        : disabled
        ? "border-slate-100 bg-slate-50 opacity-50"
        : "border-slate-200 bg-white hover:border-blue-300"
    }`}
  >
    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${college.color}`}>
      <GraduationCap className="h-5 w-5 text-white/90" />
    </div>
    <div className="min-w-0 flex-1">
      <p className="truncate text-sm font-semibold text-slate-900">{college.name}</p>
      <p className="truncate text-xs text-slate-500">{college.location}</p>
    </div>
    <div
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
        selected ? "border-blue-600 bg-blue-600" : "border-slate-300"
      }`}
    >
      {selected && <Check className="h-3 w-3 text-white" />}
    </div>
  </button>
);

const ComparisonTable = ({ selectedColleges, onRemove }) => {
  const rows = [
    { label: "Rating", render: (c) => (
      <span className="inline-flex items-center gap-1 font-semibold text-slate-900">
        <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> {c.rating}
      </span>
    ) },
    { label: "Course", render: (c) => c.course },
    { label: "Annual Fees", render: (c) => c.fees },
    { label: "Avg. Placement", render: (c) => c.placement },
    { label: "Hostel Available", render: (c) =>
      c.hostel ? (
        <span className="inline-flex items-center gap-1 text-blue-700">
          <Check className="h-4 w-4" /> Yes
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-slate-400">
          <Minus className="h-4 w-4" /> No
        </span>
      ),
    },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
      <table className="w-full min-w-[640px] border-collapse bg-white text-left">
        <thead>
          <tr>
            <th className="w-40 border-b border-slate-100 bg-slate-50/70 p-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Criteria
            </th>
            {selectedColleges.map((c) => (
              <th key={c.name} className="border-b border-slate-100 p-4 align-top">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${c.color}`}>
                      <GraduationCap className="h-4.5 w-4.5 text-white/90" />
                    </div>
                    <p className="text-sm font-semibold text-slate-900">{c.name}</p>
                    <p className="text-xs text-slate-500">{c.location}</p>
                  </div>
                  <button
                    onClick={() => onRemove(c.name)}
                    className="flex-shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                    aria-label={`Remove ${c.name}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
              <td className="border-b border-slate-100 p-4 text-sm font-medium text-slate-500">
                {row.label}
              </td>
              {selectedColleges.map((c) => (
                <td key={c.name} className="border-b border-slate-100 p-4 text-sm text-slate-700">
                  {row.render(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Compare() {
  const [selected, setSelected] = useState(["IIT Delhi", "BITS Pilani"]);

  const toggle = (name) => {
    setSelected((prev) => {
      if (prev.includes(name)) return prev.filter((n) => n !== name);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, name];
    });
  };

  const selectedColleges = CATALOG.filter((c) => selected.includes(c.name));

  return (
    <>
      <section className="border-b border-slate-100 bg-slate-50/70 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Side-by-Side</SectionLabel>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Compare Colleges
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Pick up to {MAX_COMPARE} colleges to compare fees, placements, ratings, and facilities.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            {/* Picker */}
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">
                  Select Colleges
                </h3>
                <span className="text-xs font-medium text-slate-400">
                  {selected.length}/{MAX_COMPARE} selected
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-2.5">
                {CATALOG.map((c) => (
                  <PickerCard
                    key={c.name}
                    college={c}
                    selected={selected.includes(c.name)}
                    disabled={!selected.includes(c.name) && selected.length >= MAX_COMPARE}
                    onToggle={toggle}
                  />
                ))}
              </div>
            </div>

            {/* Table / empty state */}
            <div>
              {selectedColleges.length === 0 ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Plus className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-slate-500">
                    Select colleges from the left to start comparing
                  </p>
                </div>
              ) : (
                <ComparisonTable selectedColleges={selectedColleges} onRemove={toggle} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}