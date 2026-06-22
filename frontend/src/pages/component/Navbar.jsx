import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, User } from "lucide-react";
import { Logo } from "./Shared.jsx";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Colleges", path: "/colleges" },
  { label: "Compare", path: "/compare" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    // Single unified auth listener — handles same-tab + cross-tab
    const onAuth = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("authChange", onAuth); // same-tab (login/logout)
    window.addEventListener("storage", onAuth);    // cross-tab

    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("authChange", onAuth);
      window.removeEventListener("storage", onAuth);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setOpen(false);
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_2px_16px_rgba(15,23,42,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-[0.925rem] font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3 md:flex">
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-[0.925rem] font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2 text-[0.925rem] font-semibold text-slate-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 text-[0.925rem] font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-lg bg-blue-600 px-4 py-2 text-[0.925rem] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-slate-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-3 flex flex-col gap-2">
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-center text-[0.925rem] font-semibold text-slate-700"
                >
                  <User className="h-4 w-4" />
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-100 bg-red-50 px-4 py-2.5 text-[0.925rem] font-semibold text-red-600"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-center text-[0.925rem] font-semibold text-slate-700"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-[0.925rem] font-semibold text-white"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;