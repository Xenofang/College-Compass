import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/component/Navbar";
import Footer from "./pages/component/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Compare from "./pages/Compare";
import Colleges from "./pages/Colleges";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50">
        
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Future Routes */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/saved-colleges" element={<SavedColleges />} /> */}

            <Route
              path="*"
              element={
                <div className="flex items-center justify-center min-h-[60vh]">
                  <h1 className="text-3xl font-bold">
                    404 - Page Not Found
                  </h1>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;