import PageLayout from "@/components/ui/custom/page-layout";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/main-route/contact/contact-form";
import { FeedbackSection } from "@/components/main-route/contact/feedback-section";

export default function ContactPage() {
  return (
    <main className="screen-height">
      {/* Header Section with different background */}
      <div className="bg-muted border-b ">
        <PageLayout className="max-w-6xl text-center">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-semibold text-primary">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a question? We&apos;re here to help make your wedding
              planning journey smooth.
            </p>
          </div>
        </PageLayout>
      </div>

      <PageLayout>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Get in Touch */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-primary">
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;d love to hear from you. Whether you have a question
                about vendors, pricing, or anything else, our team is ready to
                answer all your questions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-lg text-foreground">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-xs text-muted-foreground/70">
                    Mon-Fri 9am-6pm EST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-lg text-foreground">Email</p>
                  <p className="text-muted-foreground">hello@weddinghub.com</p>
                  <p className="text-xs text-muted-foreground/70">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-lg text-foreground">Office</p>
                  <p className="text-muted-foreground">123 Wedding Street</p>
                  <p className="text-muted-foreground text-sm">
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-border space-y-4">
              <h3 className="text-lg font-semibold text-primary">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold text-primary">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold text-primary">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold text-primary">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </PageLayout>

      {/* Feedback Section at the bottom */}
      <PageLayout className="max-w-6xl">
        <div className="mt-12">
          <FeedbackSection />
        </div>
      </PageLayout>
    </main>
  );
}

