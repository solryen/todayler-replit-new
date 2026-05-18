import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import screenshotImg from "@assets/1paywallphoto_1779089972449.png";

export function Hero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-48 md:pb-32 overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary/10 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-muted rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Text side */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-5">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Your daily guide to babyhood
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 text-foreground">
                One clear next step for{" "}
                <span className="italic text-primary font-normal">tired parents.</span>
              </h1>
              <p className="font-sans text-base md:text-xl text-foreground/80 mb-7 leading-relaxed max-w-lg">
                Not another overwhelming tracker. Todayler is a calm, trusted guide that opens when your head is full and you just need to know what to do with your baby today.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://apps.apple.com/us/app/todayler/id6761668150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                  data-testid="link-download-hero"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full text-base h-13 px-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  >
                    Download on the App Store
                  </Button>
                </a>
                <p className="text-sm text-foreground/60 font-medium text-center sm:text-left">
                  Free 7-day trial. Cancel anytime.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Phone side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start mt-4 lg:mt-0 -translate-x-8 sm:-translate-x-10 lg:translate-x-0 lg:-ml-16 xl:-ml-24"
          >
            {/* Phone image — no clipping, full phone visible */}
            <div className="relative z-10 flex items-center justify-start">
              <img
                src={screenshotImg}
                alt="Todayler App Interface"
                className="w-[560px] sm:w-[580px] md:w-[720px] lg:w-[900px] xl:w-[980px] h-auto"
                style={{ transform: "rotate(-7deg)", display: "block" }}
              />
            </div>

            {/* Floating cards — all screen sizes */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-16 left-16 md:top-20 md:-left-10 w-24 h-24 md:w-28 md:h-28 bg-card rounded-2xl shadow-xl z-20 flex items-center justify-center border border-border/50"
            >
              <div className="text-center">
                <div className="text-xl mb-0.5">😴</div>
                <div className="text-sm font-bold text-primary font-serif">Sleep</div>
                <div className="text-xs text-foreground/70 font-sans">2h 15m</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-2 right-2 md:top-4 md:right-0 w-32 md:w-36 bg-card rounded-2xl shadow-xl z-20 px-3 py-3 border border-border/50 flex flex-col gap-0.5"
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-base">🍼</span>
                <span className="text-xs font-bold text-primary font-serif">Feeding</span>
              </div>
              <div className="text-xs text-foreground/70 font-sans">Left side · 12 min</div>
              <div className="text-xs text-foreground/50 font-sans">8 feeds today</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-12 left-16 md:bottom-16 md:-left-6 w-28 md:w-32 bg-card rounded-2xl shadow-xl z-20 px-3 py-3 border border-border/50 flex flex-col gap-0.5"
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7V8C21 8 18 10 12 10C6 10 3 8 3 8V7Z" fill="#C97249"/>
                  <path d="M3 8C3 8 6 10 12 10C18 10 21 8 21 8V17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17V8Z" fill="#E8C5A8"/>
                  <path d="M8 10C8 10 9 13 12 13C15 13 16 10 16 10" stroke="#C97249" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="5.5" cy="7.5" r="1.5" fill="#F6EFE7"/>
                  <circle cx="18.5" cy="7.5" r="1.5" fill="#F6EFE7"/>
                </svg>
                <span className="text-xs font-bold text-primary font-serif">Diapers</span>
              </div>
              <div className="text-xs text-foreground/70 font-sans">6 changed today</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-32 right-4 md:bottom-40 md:right-12 lg:bottom-48 lg:right-6 w-24 h-24 md:w-28 md:h-28 bg-primary rounded-full shadow-lg z-30 flex items-center justify-center text-primary-foreground flex-col"
            >
              <span className="font-serif font-bold text-lg">Month 15</span>
              <span className="text-xs opacity-90 font-sans">Chapter</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
