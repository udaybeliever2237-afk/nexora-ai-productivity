import { motion } from "motion/react";

const features = [
  {
    icon: "✦",
    title: "AI Workspace",
    description:
      "Turn rough ideas into clear plans, polished content, and actionable results with intelligent AI assistance.",
  },
  {
    icon: "⚡",
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and let NEXORA handle the busywork while you focus on what matters.",
  },
  {
    icon: "◈",
    title: "Instant Insights",
    description:
      "Transform information into useful insights, summaries, and decisions in seconds.",
  },
  {
    icon: "◎",
    title: "Focus Mode",
    description:
      "Remove distractions and create a focused environment designed for deep, uninterrupted work.",
  },
  {
    icon: "◉",
    title: "Team Collaboration",
    description:
      "Work together in one intelligent workspace where ideas, tasks, and projects stay connected.",
  },
  {
    icon: "↗",
    title: "Progress Tracking",
    description:
      "See your progress clearly and understand how your time and effort translate into meaningful results.",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">POWERFUL FEATURES</span>

          <h2>
            Everything you need
            <br />
            <span>to move faster.</span>
          </h2>

          <p>
            NEXORA combines intelligent AI tools with a focused
            workspace to help you turn ideas into meaningful results.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.article
              className="feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <div className="feature-arrow">↗</div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;