import  { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Shared.jsx";

const NAV_LINKS = [
  { label: "Home", key: "home" },
  { label: "Colleges", key: "colleges" },
  { label: "Compare", key: "compare" },
  { label: "Profile", key: "profile" },
];

const Navbar = ({ activePage = "home", onNavigate = () => {} }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (key) => {
    onNavigate(key);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_2px_16px_rgba(15,23,42,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => go("home")} className="flex items-center">
          <Logo />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.key}
              onClick={() => go(link.key)}
              className={`text-[0.925rem] font-medium transition-colors ${
                activePage === link.key
                  ? "text-blue-600"
                  : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-[0.925rem] font-semibold text-slate-700 transition-colors hover:bg-slate-50">
            Login
          </button>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-[0.925rem] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.key}
                onClick={() => go(link.key)}
                className={`rounded-lg px-3 py-2.5 text-left text-[0.95rem] font-medium ${
                  activePage === link.key
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <button className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-[0.925rem] font-semibold text-slate-700">
              Login
            </button>
            <button className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-[0.925rem] font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;