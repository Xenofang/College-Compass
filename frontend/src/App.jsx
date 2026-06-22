import  { useState } from "react";
import Navbar from "./pages/component/Navbar.jsx";
import Footer from "./pages/component/Footer.jsx";
import Home from "./pages/Home.jsx";
import Colleges from "./pages/Colleges.jsx";
import Compare from "./pages/Compare.jsx";

const PAGES = {
  home: Home,
  colleges: Colleges,
  compare: Compare,
};

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const ActivePageComponent = PAGES[activePage] || Home;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main>
        <ActivePageComponent onNavigate={setActivePage} />
      </main>
      <Footer onNavigate={setActivePage} />
    </div>

    
  );
}