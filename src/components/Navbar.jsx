import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="navbar"
    >
      <div className="navbar-container">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          <span className="logo-icon">N</span>
          <span className="logo-text">NEXORA</span>
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">

          <a
            href="/workspace"
            className="nav-button"
            onClick={closeMenu}
          >
            Get Started
          </a>

          <button
            className={`mobile-menu-button ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <a href="#features" onClick={closeMenu}>
              Features
            </a>

            <a href="#how-it-works" onClick={closeMenu}>
              How It Works
            </a>

            <a href="#pricing" onClick={closeMenu}>
              Pricing
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#get-started" onClick={closeMenu}>
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;