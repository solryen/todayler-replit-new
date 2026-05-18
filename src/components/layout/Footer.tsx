import { Link } from "wouter";
import logoImg from "@assets/logo.jpg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 md:mb-6" data-testid="link-footer-home">
              <img src={logoImg} alt="Todayler Logo" className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover opacity-90" />
              <span className="font-serif font-bold text-xl md:text-2xl text-background tracking-tight">Todayler</span>
            </Link>
            <p className="text-background/80 font-sans text-sm md:text-base max-w-sm leading-relaxed">
              A calm, warm daily companion for tired new parents who just need to know what to do with their baby today.
            </p>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-base md:text-lg mb-3 md:mb-4 text-background">App</h4>
            <ul className="space-y-2 md:space-y-3 font-sans text-sm md:text-base text-background/80">
              <li>
                <a href="https://apps.apple.com/us/app/todayler/id6761668150" className="hover:text-background transition-colors" data-testid="link-footer-download">
                  Download for iOS
                </a>
              </li>
              <li><Link href="/" className="hover:text-background transition-colors" data-testid="link-footer-features">Features</Link></li>
              <li><Link href="/" className="hover:text-background transition-colors" data-testid="link-footer-testimonials">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-base md:text-lg mb-3 md:mb-4 text-background">Company</h4>
            <ul className="space-y-2 md:space-y-3 font-sans text-sm md:text-base text-background/80">
              <li><Link href="/" className="hover:text-background transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-background transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-background transition-colors" data-testid="link-footer-terms">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-background transition-colors" data-testid="link-footer-contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-background/60 text-xs md:text-sm text-center">
            © {new Date().getFullYear()} Todayler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
