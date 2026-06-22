import { Send, Share2, Link, Users } from "lucide-react";
import { Logo } from "./Shared.jsx"

const quickLinks = [
  { label: "Home", key: "home" },
  { label: "Colleges", key: "colleges" },
  { label: "Compare", key: "compare" },
];

const resourceLinks = ["Reviews", "Rankings", "Exam Updates", "Scholarships"];

const Footer = ({ onNavigate = () => {} }) => (
  <footer className="bg-slate-900 text-slate-300">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="[&_span]:text-white" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Helping students discover, compare, and choose the right college
            with confidence.
          </p>
          <div className="mt-5 flex gap-3">
            {[Send, Share2, Link, Users].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.key}>
                <button
                  onClick={() => {
                    onNavigate(l.key);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Resources</h4>
          <ul className="mt-4 space-y-2.5">
            {resourceLinks.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li>support@collegecompass.in</li>
            <li>+91 98765 43210</li>
            <li>New Delhi, India</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} College Compass. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;