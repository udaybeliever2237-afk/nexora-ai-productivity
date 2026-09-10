import { motion } from "motion/react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="footer-logo">
              <span className="logo-icon">N</span>
              <span className="logo-text">NEXORA</span>
            </a>

            <p>
              Think faster. Create smarter.
              <br />
              Your AI-powered productivity partner.
            </p>
          </motion.div>

          <div className="footer-links">

            <div className="footer-column">
              <h4>Product</h4>

              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#pricing">Pricing</a>
              <a href="#get-started">Get Started</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>

              <a href="#about">About</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>

              <a href="#">Documentation</a>
              <a href="#">Help Center</a>
              <a href="#">Community</a>
              <a href="#">Blog</a>
            </div>

          </div>
        </div>

        <div className="footer-bottom">

          <p>
            © 2026 NEXORA. All rights reserved.
          </p>

          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="GitHub">Git</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;