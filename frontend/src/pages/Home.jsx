import {
  Search,
  MapPin,
  Star,
  ChevronRight,
  GraduationCap,
  SlidersHorizontal,
  Sparkles,
  FileText,
  CheckCircle2,
  ShieldCheck,
  Scale,
  MessageSquareQuote,
  RefreshCw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* Hero illustration */
const HeroIllustration = () => (
  <svg viewBox="0 0 480 420" className="h-full w-full" aria-hidden="true">
    <defs>
      <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#EFF6FF" />
        <stop offset="100%" stopColor="#DBEAFE" />
      </linearGradient>
    </defs>
    <circle cx="240" cy="210" r="190" fill="#EFF6FF" />
    <circle cx="240" cy="210" r="190" fill="url(#cardGrad)" opacity="0.5" />
    <circle cx="240" cy="210" r="140" fill="none" stroke="#BFDBFE" strokeWidth="1.5" strokeDasharray="4 6" />
    <g transform="translate(150,120)">
      <rect width="180" height="150" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect x="20" y="20" width="140" height="14" rx="4" fill="#2563EB" />
      <rect x="20" y="46" width="100" height="8" rx="3" fill="#CBD5E1" />
      <rect x="20" y="62" width="70" height="8" rx="3" fill="#E2E8F0" />
      <rect x="20" y="95" width="14" height="35" rx="2" fill="#93C5FD" />
      <rect x="42" y="80" width="14" height="50" rx="2" fill="#3B82F6" />
      <rect x="64" y="100" width="14" height="30" rx="2" fill="#93C5FD" />
      <rect x="86" y="70" width="14" height="60" rx="2" fill="#2563EB" />
      <g transform="translate(125,90)">
        <circle r="22" fill="#2563EB" />
        <text x="0" y="6" textAnchor="middle" fontSize="14" fontWeight="700" fill="#fff">9.1</text>
      </g>
    </g>
    <g transform="translate(55,80)">
      <rect width="120" height="56" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <circle cx="28" cy="28" r="14" fill="#BFDBFE" />
      <rect x="50" y="18" width="55" height="8" rx="3" fill="#CBD5E1" />
      <rect x="50" y="32" width="35" height="7" rx="3" fill="#E2E8F0" />
    </g>
    <g transform="translate(290,265)">
      <rect width="140" height="64" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect x="16" y="14" width="42" height="36" rx="8" fill="#DBEAFE" />
      <rect x="68" y="14" width="42" height="36" rx="8" fill="#2563EB" />
      <path d="M62 32 L66 28 M62 32 L66 36" stroke="#94A3B8" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="16" y="54" width="98" height="6" rx="3" fill="#E2E8F0" />
    </g>
    <g transform="translate(195,310)">
      <circle cx="0" cy="0" r="11" fill="#2563EB" />
      <rect x="-9" y="13" width="18" height="26" rx="9" fill="#2563EB" />
    </g>
    <g transform="translate(240,318)">
      <circle cx="0" cy="0" r="13" fill="#1D4ED8" />
      <rect x="-10" y="15" width="20" height="30" rx="10" fill="#1D4ED8" />
    </g>
    <g transform="translate(288,310)">
      <circle cx="0" cy="0" r="11" fill="#60A5FA" />
      <rect x="-9" y="13" width="18" height="26" rx="9" fill="#60A5FA" />
    </g>
  </svg>
);

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-100">
            <Sparkles className="h-3.5 w-3.5" />
            College Guidance website
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl">
            Find the Right College for Your Future
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            Discover, compare, and explore colleges across India with accurate
            information and AI-powered recommendations.
          </p>

          <div className="mt-8 flex max-w-xl items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
            <Search className="ml-2 h-5 w-5 flex-shrink-0 text-slate-400" />
            <input
              type="text"
              placeholder="Search colleges, courses, or locations..."
              className="w-full bg-transparent py-2 text-[0.95rem] text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
            <button
              onClick={() => navigate("/colleges")}
              className="flex-shrink-0 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Search
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/colleges")}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-6 py-3 text-[0.95rem] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Explore Colleges
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => navigate("/compare")}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-6 py-3 text-[0.95rem] font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50/60"
            >
              <Scale className="h-4 w-4" />
              Compare Colleges
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
};

const stats = [
  { value: "120+", label: "Colleges" },
  { value: "50+", label: "Courses" },
  { value: "1000+", label: "Student Reviews" },
  { value: "AI-Powered", label: "Comparison" },
];

const Stats = () => (
  <section className="border-y border-slate-100 bg-slate-50/70">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-bold text-blue-600 sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const features = [
  {
    icon: Search,
    title: "College Discovery",
    desc: "Browse thousands of colleges by course, location, fees, and ranking to find the options that truly match your goals.",
  },
  {
    icon: SlidersHorizontal,
    title: "Smart College Comparison",
    desc: "Compare colleges side-by-side on fees, placements, ratings, and facilities to make a confident, informed decision.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    desc: "Get personalized college suggestions based on your marks, interests, and budget — powered by smart AI matching.",
  },
  {
    icon: FileText,
    title: "Detailed College Profiles",
    desc: "Access in-depth profiles covering courses, cutoffs, faculty, infrastructure, and verified student reviews.",
  },
];

// FIX 1: Features section was missing the feature cards grid entirely,
// and had a broken paragraph tag that left text outside the JSX tree.
const Features = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-sm font-semibold text-blue-600">Why Students Choose Us</h3>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to choose well
          </h2>
          {/* FIX: moved stray text inside the paragraph */}
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            One platform to research, compare, and decide — backed by verified data and AI guidance.
          </p>
        </div>

        {/* FIX: added the missing feature cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_8px_24px_rgba(15,23,42,0.09)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    icon: Search,
    title: "Search Colleges",
    desc: "Tell us your course, location, and budget preferences to start your search.",
  },
  {
    icon: Scale,
    title: "Compare Options",
    desc: "Shortlist colleges and compare them side-by-side across key metrics.",
  },
  {
    icon: CheckCircle2,
    title: "Choose the Best Fit",
    desc: "Use AI recommendations and verified reviews to make your final decision.",
  },
];

// FIX 2: Step titles were never rendered — added <p> for the title above each step description.
const HowItWorks = () => {
  return (
    <section className="bg-slate-50/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-sm font-semibold text-blue-600">Simple Process</h3>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="absolute right-[-1.25rem] top-8 hidden h-px w-10 bg-slate-200 sm:block" />
              )}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-blue-600">
                Step {i + 1}
              </p>
              {/* FIX: render the step title */}
              <p className="mt-1 text-base font-semibold text-slate-900">{title}</p>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const colleges = [
  { name: "Indian Institute of Technology, Delhi", location: "New Delhi, Delhi", rating: 4.8, color: "from-blue-500 to-blue-700" },
  { name: "St. Stephen's College", location: "Delhi University, Delhi", rating: 4.7, color: "from-sky-500 to-blue-600" },
  { name: "BITS Pilani", location: "Pilani, Rajasthan", rating: 4.6, color: "from-indigo-500 to-blue-700" },
  { name: "Christ University", location: "Bengaluru, Karnataka", rating: 4.5, color: "from-blue-400 to-indigo-600" },
  { name: "Manipal Institute of Technology", location: "Manipal, Karnataka", rating: 4.4, color: "from-cyan-500 to-blue-600" },
  { name: "Symbiosis International University", location: "Pune, Maharashtra", rating: 4.5, color: "from-blue-500 to-indigo-700" },
];

const CollegeCard = ({ college }) => {
  const navigate = useNavigate();
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_10px_28px_rgba(15,23,42,0.1)]">
      <div className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${college.color}`}>
        <GraduationCap className="h-12 w-12 text-white/85" strokeWidth={1.5} />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-800 shadow-sm">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          {college.rating}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-[0.95rem] font-semibold leading-snug text-slate-900">{college.name}</h3>
        <p className="mt-1.5 flex items-center gap-1 text-sm text-slate-500">
          <MapPin className="h-3.5 w-3.5" />
          {college.location}
        </p>
        <button
          onClick={() => navigate("/compare")}
          className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
        >
          <Scale className="h-4 w-4" />
          Compare
        </button>
      </div>
    </div>
  );
};

const PopularColleges = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h3 className="text-sm font-semibold text-blue-600">Trending This Month</h3>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Popular Colleges
            </h2>
          </div>
          <button
            onClick={() => navigate("/colleges")}
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View all colleges
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {colleges.map((c) => (
            <CollegeCard key={c.name} college={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

const reasons = [
  { icon: ShieldCheck, title: "Verified Data", desc: "Every college profile is fact-checked and regularly verified for accuracy." },
  { icon: Scale, title: "Easy Comparisons", desc: "Compare fees, rankings, and facilities side-by-side in just a few clicks." },
  { icon: MessageSquareQuote, title: "Student Reviews", desc: "Real, honest reviews from current students and recent graduates." },
  { icon: RefreshCw, title: "Updated Information", desc: "Admissions, cutoffs, and fee data refreshed regularly each season." },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-sm font-semibold text-blue-600">Trusted by Students</h3>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Choose College Compass
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 text-center shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "B.Tech, IIT Delhi",
    quote: "College Compass made shortlisting colleges so much easier. The comparison tool saved me weeks of research and helped me pick with confidence.",
    initials: "AS",
  },
  {
    name: "Rohan Mehta",
    role: "BBA, Christ University",
    quote: "The AI recommendations were spot on for my budget and interests. I found colleges I hadn't even considered before using the platform.",
    initials: "RM",
  },
  {
    name: "Priya Nair",
    role: "B.Com, Symbiosis",
    quote: "Genuine student reviews gave me the real picture beyond brochures. It's now the first place I recommend to juniors planning their college search.",
    initials: "PN",
  },
];

const TestimonialCard = ({ t }) => (
  <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_1px_3px_rgba(15,23,42,0.06)]">
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400" />
      ))}
    </div>
    <p className="mt-4 text-sm leading-relaxed text-slate-600">"{t.quote}"</p>
    <div className="mt-6 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
        {t.initials}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{t.name}</p>
        <p className="text-xs text-slate-500">{t.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-slate-50/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-sm font-semibold text-blue-600">Student Voices</h3>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Students Say
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-14 text-center shadow-lg sm:px-16">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-white/10" />

          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Find Your Dream College?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-base text-blue-100">
            Join thousands of students who found their perfect college fit with College Compass.
          </p>
          <button
            onClick={() => navigate("/colleges")}
            className="relative mt-8 inline-flex items-center gap-1.5 rounded-lg bg-white px-7 py-3.5 text-[0.95rem] font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50"
          >
            Start Exploring
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <PopularColleges />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}