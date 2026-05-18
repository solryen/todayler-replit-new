import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Todayler a medical app?",
    answer: "No. Todayler is a companion and guide for developmental activities and tracking. It does not provide medical advice. Always consult your pediatrician for medical concerns."
  },
  {
    question: "Can my partner and I share an account?",
    answer: "Yes! You can use the same login credentials to access your baby's profile across multiple devices, so you both stay in the loop."
  },
  {
    question: "How are the activities chosen?",
    answer: "Activities are curated based on your baby's exact age in weeks and months, focusing on appropriate cognitive, physical, and emotional development milestones."
  },
  {
    question: "What if I forget to track a day?",
    answer: "Nothing happens! Todayler is designed to be guilt-free. There are no streaks to lose or warnings. Pick it up when you need it, put it down when you don't."
  }
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-foreground"
          >
            Questions you might have
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl md:rounded-2xl px-4 md:px-6 bg-background"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger
                  className="font-serif text-base md:text-lg text-left hover:no-underline hover:text-primary py-4 md:py-6"
                  data-testid={`faq-trigger-${i}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm md:text-base text-foreground/70 pb-4 md:pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
