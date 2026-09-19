import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";

import { useScrollReveal } from "./hooks/useScrollReveal";
import { useMagnetic } from "./hooks/useMagnetic";

function AppContent() {
  useScrollReveal();
  useMagnetic();

  return (
    <>
      <ScrollToTop />
      <PageLoader />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
