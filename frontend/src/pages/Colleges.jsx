import { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Star,
  Scale,
  GraduationCap,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { SectionLabel } from "./component/Shared.jsx";

const ALL_COLLEGES = [
  { name: "Indian Institute of Technology, Delhi", location: "New Delhi", state: "Delhi", course: "Engineering", fees: "₹2.5L/yr", rating: 4.8, color: "from-blue-500 to-blue-700" },
  { name: "St. Stephen's College", location: "New Delhi", state: "Delhi", course: "Arts & Science", fees: "₹40K/yr", rating: 4.7, color: "from-sky-500 to-blue-600" },
  { name: "BITS Pilani", location: "Pilani", state: "Rajasthan", course: "Engineering", fees: "₹4.8L/yr", rating: 4.6, color: "from-indigo-500 to-blue-700" },
  { name: "Christ University", location: "Bengaluru", state: "Karnataka", course: "Management", fees: "₹3.2L/yr", rating: 4.5, color: "from-blue-400 to-indigo-600" },
  { name: "Manipal Institute of Technology", location: "Manipal", state: "Karnataka", course: "Engineering", fees: "₹4.2L/yr", rating: 4.4, color: "from-cyan-500 to-blue-600" },
  { name: "Symbiosis International University", location: "Pune", state: "Maharashtra", course: "Management", fees: "₹3.8L/yr", rating: 4.5, color: "from-blue-500 to-indigo-700" },
  { name: "Lady Shri Ram College", location: "New Delhi", state: "Delhi", course: "Arts & Science", fees: "₹35K/yr", rating: 4.6, color: "from-blue-400 to-blue-600" },
  { name: "VIT Vellore", location: "Vellore", state: "Tamil Nadu", course: "Engineering", fees: "₹3.9L/yr", rating: 4.3, color: "from-sky-400 to-indigo-600" },
  { name: "NMIMS Mumbai", location: "Mumbai", state: "Maharashtra", course: "Management", fees: "₹4.5L/yr", rating: 4.4, color: "from-indigo-400 to-blue-700" },
];

const COURSES = ["All Courses", "Engineering", "Management", "Arts & Science"];
const STATES = ["All Locations", "Delhi", "Karnataka", "Maharashtra", "Rajasthan", "Tamil Nadu"];

const CollegeCard = ({ college }) => (
  <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_10px_28px_rgba(15,23,42,0.1)]">
    <div className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${college.color}`}>
      <GraduationCap className="h-11 w-11 text-white/85" strokeWidth={1.5} />
      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-800 shadow-sm">
        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        {college.rating}
      </div>
    </div>
    <div className="p-5">
      <span className="inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-[0.7rem] font-semibold text-blue-700">
        {college.course}
      </span>
      <h3 className="mt-2.5 text-[0.95rem] font-semibold leading-snug text-slate-900">
        {college.name}
      </h3>
      <p className="mt-1.5 flex items-center gap-1 text-sm text-slate-500">
        <MapPin className="h-3.5 w-3.5" />
        {college.location}, {college.state}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-700">{college.fees}</p>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
          View Profile
        </button>
        <button className="flex items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-3 text-blue-700 transition-colors hover:bg-blue-100">
          <Scale className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
);

const FilterPanel = ({ course, setCourse, state, setState, query, setQuery, onClose }) => (
  <div className="space-y-7">
    <div className="flex items-center justify-between md:hidden">
      <h3 className="text-base font-semibold text-slate-900">Filters</h3>
      <button onClick={onClose} className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100">
        <X className="h-5 w-5" />
      </button>
    </div>

    <div>
      <label className="text-sm font-semibold text-slate-900">Search</label>
      <div className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="College name..."
          className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />
      </div>
    </div>

    <div>
      <label className="text-sm font-semibold text-slate-900">Course</label>
      <div className="mt-2.5 flex flex-col gap-2">
        {COURSES.map((c) => (
          <button
            key={c}
            onClick={() => setCourse(c)}
            className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
              course === c
                ? "bg-blue-600 text-white"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>

    <div>
      <label className="text-sm font-semibold text-slate-900">Location</label>
      <div className="mt-2.5 flex flex-col gap-2">
        {STATES.map((s) => (
          <button
            key={s}
            onClick={() => setState(s)}
            className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
              state === s
                ? "bg-blue-600 text-white"
                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default function Colleges() {
  const [course, setCourse] = useState("All Courses");
  const [state, setState] = useState("All Locations");
  const [query, setQuery] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return ALL_COLLEGES.filter((c) => {
      const matchesCourse = course === "All Courses" || c.course === course;
      const matchesState = state === "All Locations" || c.state === state;
      const matchesQuery = c.name.toLowerCase().includes(query.toLowerCase());
      return matchesCourse && matchesState && matchesQuery;
    });
  }, [course, state, query]);

  return (
    <>
      {/* Page header */}
      <section className="border-b border-slate-100 bg-slate-50/70 py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Browse Colleges</SectionLabel>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find Colleges That Fit You
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Filter by course and location to discover colleges that match
            your goals and budget.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile filter trigger */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr]">
            {/* Sidebar - desktop */}
            <aside className="hidden md:block">
              <FilterPanel
                course={course}
                setCourse={setCourse}
                state={state}
                setState={setState}
                query={query}
                setQuery={setQuery}
              />
            </aside>

            {/* Mobile filter drawer */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 z-50 flex md:hidden">
                <div
                  className="absolute inset-0 bg-slate-900/40"
                  onClick={() => setMobileFiltersOpen(false)}
                />
                <div className="relative ml-auto h-full w-[80%] max-w-sm overflow-y-auto bg-white p-6 shadow-xl">
                  <FilterPanel
                    course={course}
                    setCourse={setCourse}
                    state={state}
                    setState={setState}
                    query={query}
                    setQuery={setQuery}
                    onClose={() => setMobileFiltersOpen(false)}
                  />
                </div>
              </div>
            )}

            {/* Results */}
            <div>
              <p className="mb-5 text-sm font-medium text-slate-500">
                Showing {filtered.length} of {ALL_COLLEGES.length} colleges
              </p>

              {filtered.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center">
                  <p className="text-slate-500">No colleges match your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((c) => (
                    <CollegeCard key={c.name} college={c} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}