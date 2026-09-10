import { motion } from "motion/react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>
      </div>

      <div className="hero-container">

        {/* Left / Main Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="badge-dot"></span>
            AI-POWERED PRODUCTIVITY
          </motion.div>

          <h1 className="hero-title">
            Think faster.
            <br />
            <span>Create smarter.</span>
          </h1>

          <p className="hero-description">
            NEXORA turns your ideas into action with an intelligent
            workspace designed to help you focus, create, and get
            more done.
          </p>

          <div className="hero-buttons">
            <motion.a
              href="/workspace"
              className="primary-button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Creating
              <span>→</span>
            </motion.a>

            <motion.a
              href="#features"
              className="secondary-button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Features
            </motion.a>
          </div>

          <div className="hero-trust">
            <span className="trust-icon">✦</span>
            Built for creators, teams & ambitious minds
          </div>
        </motion.div>

        {/* AI Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="ai-orbit orbit-one"></div>
          <div className="ai-orbit orbit-two"></div>
          <div className="ai-orbit orbit-three"></div>

          <motion.div
            className="ai-core"
            animate={{
              scale: [1, 1.06, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="core-inner">
              <span>✦</span>
            </div>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            className="floating-card card-top"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="floating-icon">✦</span>
            <div>
              <strong>AI Assistant</strong>
              <small>Ready to help</small>
            </div>
          </motion.div>

          <motion.div
            className="floating-card card-bottom"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="floating-icon">✓</span>
            <div>
              <strong>Task completed</strong>
              <small>Just now</small>
            </div>
          </motion.div>
        </motion.div>

      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;