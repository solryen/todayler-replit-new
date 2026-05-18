import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const sections = [
  {
    title: "1. Overview",
    content:
      "Todayler is a baby development app for parents and caregivers. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using Todayler, you agree to this Policy.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We collect information you provide directly, including account information (such as email), baby profile information (name, date of birth, gender, prematurity settings), app preferences (notification settings), and feedback you send. We also collect usage data needed to run core features, such as completed activities, streaks, and in-app interactions. If enabled, third-party sign-in providers may share account identifiers with us. We may also collect information related to push notifications if you opt in.",
  },
  {
    title: "3. How We Use Information",
    content:
      "We use information to provide and improve Todayler features, personalize activities and guidance by age and profile, maintain progress and journey history, provide support, communicate service-related updates, and protect the app from abuse, fraud, or misuse.",
  },
  {
    title: "4. AI Features",
    content:
      "Todayler includes AI-powered features (for example, chat assistance). Messages you send to AI features may be processed by our model providers to generate responses. Do not include sensitive personal information in AI prompts.",
  },
  {
    title: "5. Legal Basis and Consent",
    content:
      "Where required, we process personal data under applicable legal bases including consent, contract performance, legitimate interests, and legal obligations. You may withdraw consent where applicable, though this may affect feature availability.",
  },
  {
    title: "6. Children's Privacy",
    content:
      "Todayler is intended for adults (parents/caregivers). We do not allow children to create accounts. Baby profile data is provided by the parent/caregiver for personal use inside the app.",
  },
  {
    title: "7. Sharing of Information",
    content:
      "We do not sell your personal data. We may share data with trusted service providers that help us operate the app (for example, hosting, analytics, authentication, communications, and AI providers), with app store platforms for subscription management, or when legally required.",
  },
  {
    title: "8. Data Retention",
    content:
      "We retain data while your account is active or as needed to provide services, resolve disputes, enforce agreements, and comply with law. You may request deletion of account data, subject to legal retention requirements.",
  },
  {
    title: "9. Security",
    content:
      "We use reasonable technical and organizational safeguards to protect information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
  },
  {
    title: "10. International Transfers",
    content:
      "Your information may be processed in countries other than your own. Where required, we use appropriate safeguards for cross-border data transfers.",
  },
  {
    title: "11. Your Rights",
    content:
      "Depending on your location, you may have rights to access, correct, delete, or export personal data, and to object to or restrict certain processing. You may also have rights related to marketing preferences.",
  },
  {
    title: "12. Subscriptions and Payments",
    content:
      "Subscription purchases are handled by the Apple App Store. We do not process raw card details directly in the app for those in-app purchases.",
  },
  {
    title: "13. Policy Changes",
    content:
      "We may update this Policy from time to time. Material updates will be reflected by a revised date and, where appropriate, in-app notice.",
  },
  {
    title: "14. California Privacy Rights (CCPA)",
    content:
      "If you are a California resident, you have the right to know what personal information we collect, disclose, and sell. We do not sell your personal information. For more information or to exercise your California privacy rights, contact us at todaylerapp@gmail.com.",
  },
  {
    title: "15. Contact",
    content: "If you have privacy questions or requests, contact us at todaylerapp@gmail.com.",
  },
];

export default function PrivacyPolicy() {
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
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
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
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
