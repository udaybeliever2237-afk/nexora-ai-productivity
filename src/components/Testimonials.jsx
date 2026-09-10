import { motion } from "motion/react";

const testimonials = [
  {
    initials: "AM",
    name: "Alex Morgan",
    role: "Product Designer",
    quote:
      "NEXORA completely changed how I organize my projects. I spend less time managing work and more time actually doing it.",
  },
  {
    initials: "JL",
    name: "Jordan Lee",
    role: "Startup Founder",
    quote:
      "The AI workflow feels incredibly natural. It takes messy thoughts and turns them into something I can actually act on.",
  },
  {
    initials: "TS",
    name: "Taylor Smith",
    role: "Creative Strategist",
    quote:
      "I finally have one place for my ideas, tasks, and projects. NEXORA keeps everything simple without getting in the way.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-container">

        <motion.div
          className="section-heading testimonials-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">
            WHAT PEOPLE SAY
          </span>

          <h2>
            Built for people
            <br />
            <span>who make things happen.</span>
          </h2>

          <p>
            See how NEXORA helps ambitious people turn
            ideas into meaningful progress.
          </p>
        </motion.div>

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
            >
              <div className="quote-mark">
                “
              </div>

              <p className="testimonial-quote">
                {testimonial.quote}
              </p>

              <div className="testimonial-person">

                <div className="testimonial-avatar">
                  {testimonial.initials}
                </div>

                <div>
                  <strong>
                    {testimonial.name}
                  </strong>

                  <span>
                    {testimonial.role}
                  </span>
                </div>

              </div>
            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;