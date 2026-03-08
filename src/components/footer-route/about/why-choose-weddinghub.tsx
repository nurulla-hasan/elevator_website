import { CheckCircle2 } from "lucide-react";

export function WhyChooseWeddingHub() {
  const reasons = [
    {
      title: "Verified Vendors",
      description: "Every vendor is thoroughly vetted and verified for quality and reliability.",
    },
    {
      title: "Real Reviews",
      description: "Authentic reviews from real couples help you make informed decisions.",
    },
    {
      title: "Secure Booking",
      description: "Safe and secure payment processing protects your transactions.",
    },
    {
      title: "Expert Support",
      description: "24/7 customer support to assist you throughout your planning journey.",
    },
    {
      title: "Best Prices",
      description: "Competitive pricing and exclusive deals from top vendors.",
    },
    {
      title: "Easy Management",
      description: "Manage all your bookings, communications, and payments in one place.",
    },
  ];

  return (
    <section>
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary tracking-tight">
          Why Choose WeddingHub
        </h2>
        <p className="text-muted-foreground text-lg">
          We make wedding planning simple, stress-free, and enjoyable
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {reasons.map((reason, index) => (
          <div key={index} className="flex gap-4 group">
            <div className="shrink-0">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="space-y-2 pt-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
