import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-background/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-foreground/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
          >
            Ready for a little more{" "}
            <span className="italic font-normal">calm?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-base md:text-xl text-primary-foreground/90 mb-8 md:mb-10"
          >
            Join thousands of parents who have traded overwhelm for confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://apps.apple.com/us/app/todayler/id6761668150"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
              data-testid="link-download-cta"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base h-14 md:h-16 px-8 md:px-10 bg-background text-foreground hover:bg-background/90 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                Download Todayler Free
              </Button>
            </a>
            <p className="mt-4 text-sm text-primary-foreground/70 font-medium">
              7-day free trial. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
