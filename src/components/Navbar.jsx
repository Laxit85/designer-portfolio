import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuActive(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <>
      <header
        className="navbar"
        style={{
          background: scrolled ? "rgba(255, 255, 255, 0.94)" : "rgba(255, 255, 255, 0.85)",
          boxShadow: scrolled ? "0 10px 40px rgba(0, 0, 0, 0.08)" : "none",
        }}
      >
        <Link to="/" className="logo magnetic" onClick={closeMenu}>
          <div className="logo-brand">
            <span className="logo-main">SACHIN</span>
            <span className="logo-sub">सचिन • GRAPHIC DESIGNER</span>
          </div>
        </Link>

        <nav className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/work" className={location.pathname === "/work" ? "active" : ""}>
            All Work
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>
            Services
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </nav>

        <button
          className={`menu-btn magnetic ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-menu ${menuActive ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/work" onClick={closeMenu}>
          All Work
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </>
  );
}
