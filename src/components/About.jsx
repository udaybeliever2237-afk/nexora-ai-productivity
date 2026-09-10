import { motion } from "motion/react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">

        <div className="about-grid">

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-grid-lines"></div>

            <motion.div
              className="about-orb"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="about-orb-inner">
                <span>✦</span>
              </div>
            </motion.div>

            <motion.div
              className="about-mini-card"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>✦</span>

              <div>
                <strong>AI Intelligence</strong>
                <small>Always working for you</small>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">
              WHY NEXORA
            </span>

            <h2>
              Your ideas deserve
              <br />
              <span>better tools.</span>
            </h2>

            <p>
              Modern work is filled with information,
              distractions, and repetitive tasks.
              NEXORA brings intelligence, organization,
              and focus into one seamless workspace.
            </p>

            <p>
              Think clearly, organize your work, and
              turn your ideas into action without
              constantly switching between different tools.
            </p>

            <div className="about-stats">

              <div className="about-stat">
                <strong>10x</strong>
                <span>Faster workflows</span>
              </div>

              <div className="about-stat">
                <strong>24/7</strong>
                <span>AI assistance</span>
              </div>

              <div className="about-stat">
                <strong>1</strong>
                <span>Unified workspace</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;