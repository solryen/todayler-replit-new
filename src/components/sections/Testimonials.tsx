import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I was drowning in tracker apps that made me feel like I was failing. Todayler feels like a warm hug. It just tells me what to do today.",
    author: "SarahNihelton1",
    role: "Mom to 4-month-old Leo",
    avatar: "https://i.pravatar.cc/80?img=47"
  },
  {
    quote: "Mia is incredible. When I'm up at 4am wondering why she won't settle, Mia gives me actual, compassionate advice without a Google rabbit hole.",
    author: "James22",
    role: "Dad to 2-month-old Maya",
    avatar: "https://i.pravatar.cc/80?img=12"
  },
  {
    quote: "The 3 daily activities saved my sanity. I no longer wonder how to entertain my baby. We just do the Todayler suggestions and feel accomplished.",
    author: "ElenaR_",
    role: "Mom to 7-month-old Sofia",
    avatar: "https://i.pravatar.cc/80?img=32"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground"
          >
            Trusted by <span className="italic text-primary font-normal">tired parents.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm border border-border flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4 md:mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 md:w-5 md:h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-base md:text-lg leading-relaxed text-foreground/80 mb-5 md:mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0 ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-sans font-bold text-foreground text-sm">{t.author}</p>
                  <p className="font-sans text-xs text-foreground/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
