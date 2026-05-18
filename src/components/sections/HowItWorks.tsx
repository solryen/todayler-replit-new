import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell us about your baby",
    description: "Just a few quick details so we can match the daily activities and developmental chapters to their exact age.",
  },
  {
    number: "02",
    title: "Open the app each morning",
    description: "Get greeted with a warm message and 3 simple things to try today. No endless scrolling.",
  },
  {
    number: "03",
    title: "Track the good stuff",
    description: "Log feeds, sleep, or just a small win. Talk to Mia if you need advice. Breathe easier.",
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Wave divider top — contained, no overflow */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-12 pointer-events-none"
        style={{
          background: "hsl(var(--foreground))",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          transform: "scaleX(1.2)",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative pt-8 md:pt-12">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground"
          >
            How it <span className="italic text-primary font-normal">works.</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Connecting line — desktop only */}
          <div className="absolute top-11 left-[10%] right-[10%] h-0.5 bg-border hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex md:flex-col items-start md:items-start gap-4 md:gap-0"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-card border border-border shadow-sm flex items-center justify-center font-serif text-2xl md:text-3xl text-primary font-bold md:mb-6 z-10">
                  {step.number}
                </div>
                <div className="md:mt-0 pt-1 md:pt-0">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-1 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
