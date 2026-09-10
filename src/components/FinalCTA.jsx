import { motion } from "motion/react";

function FinalCTA() {
  return (
    <section className="final-cta" id="get-started">
      <div className="final-cta-glow"></div>

      <motion.div
        className="final-cta-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="final-cta-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="cta-dot"></span>
          START YOUR JOURNEY
        </motion.div>

        <h2>
          Turn your ideas
          <br />
          <span>into reality.</span>
        </h2>

        <p>
          Stop managing your work the hard way.
          Let NEXORA help you think faster, create smarter,
          and get more done.
        </p>

        <div className="final-cta-actions">
          <motion.a
            href="#pricing"
            className="cta-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started Free
            <span>→</span>
          </motion.a>

          <motion.a
            href="#features"
            className="cta-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Features
          </motion.a>
        </div>

        <div className="cta-note">
          <span>✓</span> No credit card required
          <span>✓</span> Free forever plan
          <span>✓</span> Cancel anytime
        </div>
      </motion.div>
    </section>
  );
}

export default FinalCTA;