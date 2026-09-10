import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Capture your idea",
    description:
      "Start with a thought, task, question, or project. NEXORA gives you a simple place to begin.",
  },
  {
    number: "02",
    title: "Let AI organize it",
    description:
      "NEXORA understands your input and transforms it into structured ideas, tasks, and useful next steps.",
  },
  {
    number: "03",
    title: "Make it happen",
    description:
      "Turn your organized ideas into action and track your progress from beginning to completion.",
  },
];

function HowItWorks() {
  return (
    <section
      className="how-section"
      id="how-it-works"
    >
      <div className="section-container">

        <motion.div
          className="section-heading how-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            From idea
            <br />
            <span>to action.</span>
          </h2>

          <p>
            A simple three-step workflow designed to
            turn your thinking into meaningful progress.
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              className="step"
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className="step-number">
                {step.number}
              </div>

              <div className="step-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="step-line"></div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;