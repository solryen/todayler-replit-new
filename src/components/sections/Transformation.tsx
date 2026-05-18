import { motion } from "framer-motion";

export function Transformation() {
  return (
    <section className="py-16 md:py-24 bg-card text-card-foreground relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            From{" "}
            <span className="italic text-foreground/60 font-normal">overwhelmed</span>
            {" "}to{" "}
            <span className="italic text-primary font-normal">quietly confident.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-base md:text-lg text-foreground/70"
          >
            You don't need another app telling you what you're doing wrong. You just need a friend to tell you what to do right now.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-start max-w-5xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted/50 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-border/50 relative mt-6"
          >
            <div className="absolute -top-4 left-4 md:-left-4 w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center shadow-sm">
              <span className="text-lg font-serif text-foreground/50">1</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground/70 mb-3 md:mb-4">
              Without Todayler
            </h3>
            <ul className="space-y-3 font-sans text-foreground/70">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 mr-3 shrink-0"></div>
                <p className="text-sm md:text-base">Endless googling at 3am for "is this normal?"</p>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 mr-3 shrink-0"></div>
                <p className="text-sm md:text-base">Guilt about not doing enough "developmental activities"</p>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2.5 mr-3 shrink-0"></div>
                <p className="text-sm md:text-base">Staring at blank walls wondering how to pass the next hour</p>
              </li>
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary/5 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-primary/20 relative mt-6"
          >
            <div className="absolute -top-4 left-4 md:-left-4 w-10 h-10 bg-primary border-4 border-background rounded-full flex items-center justify-center shadow-md">
              <span className="text-lg font-serif text-primary-foreground">2</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
              With Todayler
            </h3>
            <ul className="space-y-3 font-sans text-foreground">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0"></div>
                <p className="text-sm md:text-base">Open the app, see exactly what developmental chapter you're in.</p>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0"></div>
                <p className="text-sm md:text-base">Get 3 simple, age-matched activities for the day. Do one, feel great.</p>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 mr-3 shrink-0"></div>
                <p className="text-sm md:text-base">Track what matters, let go of the rest. Breathe.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
