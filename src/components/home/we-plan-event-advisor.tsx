import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Sparkles, Target, Lightbulb, Users, Handshake } from "lucide-react";
import Link from "next/link";

export default function WePlanEventAdvisor() {
  const benefits = [
    {
      icon: <Target className="w-5 h-5 text-primary" />,
      title: "Understand Your Vision",
      desc: "We listen to your requirements, budget, and preferences"
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-primary" />,
      title: "Expert Advice & Latest Trends",
      desc: "Get practical and trending ideas that actually fit your budget"
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      title: "Smart Vendor Shortlisting",
      desc: "No need to browse hundreds of vendors — we shortlist the best for you"
    },
    {
      icon: <Handshake className="w-5 h-5 text-primary" />,
      title: "Vendor Negotiation Support",
      desc: "We help you get better deals and avoid overpaying"
    }
  ];

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content */}
          <div className="flex-[1.2] space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold animate-pulse">
                <Sparkles className="w-4 h-4" />
                Free 10-Minute Consultation — No Commitment
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Confused Where to Start? Talk to a Wedding Expert
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Get personalized guidance, vendor shortlisting, and expert negotiation — without the stress.
              </p>
            </div>

            {/* Core Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-colors">
                  <div className="mt-1">{benefit.icon}</div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm md:text-base">{benefit.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-snug">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-muted/30 border border-border">
              <div className="space-y-3">
                <h5 className="flex items-center gap-2 font-bold text-destructive text-sm uppercase tracking-wider">
                  <XCircle className="w-4 h-4" /> Without Advisor
                </h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Spend hours searching</li>
                  <li>• Confused decisions</li>
                  <li>• Overpay vendors</li>
                </ul>
              </div>
              <div className="space-y-3 border-t sm:border-t-0 sm:border-l border-border pt-4 sm:pt-0 sm:pl-6">
                <h5 className="flex items-center gap-2 font-bold text-green-600 text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" /> With WePlan Advisor
                </h5>
                <ul className="space-y-2 text-sm text-muted-foreground font-medium">
                  <li className="text-foreground">• Save time</li>
                  <li className="text-foreground">• Clear direction</li>
                  <li className="text-foreground">• Better deals</li>
                </ul>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-lg">
              &quot;We don&apos;t just help you find vendors — we help you make the right decisions.&quot;
            </blockquote>

            {/* Pricing & CTAs */}
            <div className="space-y-6 pt-4 border-t border-border">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-primary uppercase tracking-wide">Hire Your WePlan Event Advisor</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-primary">PKR 3,000</span>
                    <span className="text-muted-foreground text-sm">(One-Time Fee)</span>
                  </div>
                  <ul className="space-y-1 pt-2">
                    <li className="text-xs text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-600" /> Includes full consultation + vendor shortlisting
                    </li>
                    <li className="text-xs text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-600" /> No hidden charges
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3 min-w-60">
                  <Link href="/consultation" className="w-full">
                    <Button className="w-full" size="lg">
                      Book Free Consultation
                    </Button>
                  </Link>
                  <Link href="/pricing" className="w-full">
                    <Button variant="outline" className="w-full" size="lg">
                      Hire Event Advisor
                    </Button>
                  </Link>
                </div>
              </div>
              
              <p className="text-center md:text-left text-xs text-muted-foreground font-medium italic border-t border-border/50 pt-3">
                Talk to our expert before you decide — zero pressure, just helpful advice.
              </p>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="flex-1 w-full lg:sticky lg:top-24 hidden lg:block">
            <div className="relative aspect-4/5 rounded-[32px] overflow-hidden shadow-2xl group border-8 border-white">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                alt="Wedding Planning Event Advisor"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white space-y-2">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-muted overflow-hidden">
                        <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" width={32} height={32} />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium">Joined by 500+ happy couples</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
