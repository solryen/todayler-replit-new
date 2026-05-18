import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sections = [
  {
    title: "1. Agreement",
    content:
      "These Terms govern your use of Todayler. By creating an account, purchasing a subscription, or using the app, you agree to these Terms.",
  },
  {
    title: "2. Eligibility",
    content:
      "You must be at least 18 years old (or the age of majority in your location) to use Todayler. You are responsible for maintaining the confidentiality of your account credentials.",
  },
  {
    title: "3. Service Description",
    content:
      "Todayler provides baby development activities, progress tracking, stories, and AI-assisted guidance for parents/caregivers. Features may change over time.",
  },
  {
    title: "4. No Medical Advice",
    content:
      "Todayler is for informational and educational support only and is not medical advice, diagnosis, or treatment. In emergencies, contact local emergency services immediately.",
  },
  {
    title: "5. User Responsibilities",
    content:
      "You agree not to misuse the app, interfere with service operations, or upload unlawful or harmful content. You are responsible for ensuring the safety and appropriateness of activities for your child.",
  },
  {
    title: "6. AI Feature Disclaimer",
    content:
      "AI-generated responses may be imperfect and should be used with judgment. Todayler does not guarantee that AI outputs are complete, accurate, or suitable for every situation.",
  },
  {
    title: "7. Subscriptions and Billing",
    content:
      "Todayler offers auto-renewing subscriptions. Subscription title, billing period, and price are shown in-app and in the Apple purchase sheet before you confirm payment. Payment is charged to your Apple ID account at confirmation of purchase. Your subscription automatically renews unless canceled at least 24 hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period. You can manage your subscription and turn off auto-renewal in your Apple ID Account Settings at any time.",
  },
  {
    title: "8. Free Trials",
    content:
      "Todayler may offer free trials for eligible new subscribers. Trial availability, length, and conversion pricing are shown in-app and in the Apple purchase sheet before confirmation. If you do not cancel before the trial ends, your subscription automatically converts to the paid plan shown at purchase. Free trials are subject to Apple eligibility rules.",
  },
  {
    title: "9. Intellectual Property",
    content:
      "All app content, design, branding, and software are owned by Todayler or licensors and protected by law. You may not copy, reverse engineer, redistribute, or create derivative works except as permitted by law.",
  },
  {
    title: "10. Termination",
    content:
      "We may suspend or terminate access if you violate these Terms or misuse the service. You may stop using Todayler at any time.",
  },
  {
    title: "11. Disclaimers",
    content:
      'To the fullest extent permitted by law, Todayler is provided "as is" and "as available" without warranties of any kind, express or implied.',
  },
  {
    title: "12. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Todayler and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of data, profits, or goodwill.",
  },
  {
    title: "13. Indemnification",
    content:
      "You agree to indemnify and hold harmless Todayler from claims arising out of your misuse of the app, violation of these Terms, or violation of applicable law.",
  },
  {
    title: "14. Governing Law",
    content:
      "These Terms are governed by the laws of England and Wales, unless mandatory consumer law in your country requires otherwise.",
  },
  {
    title: "15. Changes to Terms",
    content:
      "We may update these Terms from time to time. Continued use of Todayler after updates means you accept the revised Terms.",
  },
  {
    title: "16. Contact",
    content: "Questions about these Terms can be sent to todaylerapp@gmail.com.",
  },
  {
    title: "17. Apple Standard EULA",
    content: "Todayler uses Apple's Standard End User License Agreement (EULA).",
    link: {
      label: "Open Apple Standard EULA",
      href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
    },
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="mb-10">
            <Link href="/" className="text-sm text-primary font-medium hover:underline font-sans">
              ← Back to home
            </Link>
          </div>

          <div className="mb-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Terms of Service</h1>
            <p className="text-foreground/60 font-sans text-sm">
              Todayler · Last updated: March 14, 2026
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-border/40 pb-8 last:border-0">
                <h2 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {section.title}
                </h2>
                <p className="font-sans text-foreground/80 leading-relaxed text-base">
                  {section.content}
                </p>
                {section.link && (
                  <a
                    href={section.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-primary font-medium hover:underline font-sans"
                  >
                    {section.link.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
