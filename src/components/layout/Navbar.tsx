import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/logo.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" data-testid="link-home">
          <img src={logoImg} alt="Todayler Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm" />
          <span className="font-serif font-bold text-xl md:text-2xl text-foreground tracking-tight">Todayler</span>
        </Link>
        <a href="https://apps.apple.com/us/app/todayler/id6761668150" target="_blank" rel="noopener noreferrer" data-testid="link-download-nav">
          <Button className="rounded-full font-sans font-medium px-6 shadow-sm hover:shadow-md transition-all">
            Download App
          </Button>
        </a>
      </div>
    </motion.header>
  );
}
