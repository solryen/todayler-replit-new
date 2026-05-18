import { motion } from "framer-motion";
import { Brain, Heart, Activity, BookOpen, MessageCircle, Moon } from "lucide-react";

const features = [
  {
    icon: <Activity className="w-6 h-6 text-primary" />,
    title: "3 Daily Activities",
    description: "Matched to your exact baby's age. Sorted into Think, Move, and Bond. No generic advice.",
  },
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "Baby Tracker",
    description: "Feeds, sleep, milestones, small wins. Tracking designed for peace of mind, not pressure.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Milestone Chapters",
    description: "See exactly what developmental chapter your baby is going through right now, illustrated like a story.",
  },
  {
    icon: <Moon className="w-6 h-6 text-primary" />,
    title: "Bedtime Stories",
    description: "A built-in library of calm, soothing bedtime stories to help wind down the day.",
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-primary" />,
    title: "Meet Mia",
    description: "Your AI support companion. Ask anything at 3am and get a warm, never-clinical reply.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-background"
          >
            Everything you need.{" "}
            <span className="italic text-primary font-normal">Nothing you don't.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-base md:text-lg text-background/80"
          >
            Designed to reduce cognitive load.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background/5 border border-background/10 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-background/10 transition-colors group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-background rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-background mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-background/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="bg-primary/20 border border-primary/30 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center group"
          >
            <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-serif text-lg md:text-xl font-bold text-background mb-2">Built with love</h3>
            <p className="font-sans text-background/70 text-xs md:text-sm">For tired parents, by tired parents.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
