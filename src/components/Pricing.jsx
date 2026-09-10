import { motion } from "motion/react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description:
      "For exploring the NEXORA experience.",
    features: [
      "AI workspace",
      "Basic task management",
      "Limited AI usage",
      "Personal dashboard",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description:
      "For creators who want to move faster.",
    features: [
      "Unlimited AI assistance",
      "Advanced automation",
      "Smart insights",
      "Focus mode",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "per month",
    description:
      "For teams building great things together.",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Shared workspaces",
      "Team analytics",
      "Admin controls",
    ],
  },
];

function Pricing() {
  return (
    <section
      className="pricing-section"
      id="pricing"
    >
      <div className="section-container">

        <motion.div
          className="section-heading pricing-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            SIMPLE PRICING
          </span>

          <h2>
            Choose your
            <br />
            <span>level of productivity.</span>
          </h2>

          <p>
            Start free and upgrade when you need
            more power, automation, and collaboration.
          </p>
        </motion.div>

        <div className="pricing-grid">

          {plans.map((plan, index) => (
            <motion.article
              className={`pricing-card ${
                plan.popular
                  ? "pricing-featured"
                  : ""
              }`}
              key={plan.name}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
            >

              {plan.popular && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}

              <div className="pricing-top">
                <h3>{plan.name}</h3>

                <p>
                  {plan.description}
                </p>
              </div>

              <div className="price">
                <strong>{plan.price}</strong>

                <span>
                  {plan.period}
                </span>
              </div>

              <div className="pricing-divider"></div>

              <ul>
                {plan.features.map(
                  (feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  )
                )}
              </ul>

              <a
                href="#get-started"
                className={
                  plan.popular
                    ? "pricing-button pricing-button-primary"
                    : "pricing-button"
                }
              >
                {plan.name === "Free"
                  ? "Start Free"
                  : plan.name === "Pro"
                  ? "Start Pro"
                  : "Start Team"}

                <span>→</span>
              </a>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;