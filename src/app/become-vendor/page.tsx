import PageLayout from "@/components/ui/custom/page-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Users, TrendingUp } from "lucide-react";

export default function BecomeVendorPage() {
  return (
    <main className="screen-height">
      <div className="bg-muted border-b">
        <PageLayout className="text-center">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-semibold text-primary">
              Become a Vendor
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join thousands of wedding professionals growing their business on our platform
            </p>
          </div>
        </PageLayout>
      </div>

      <PageLayout>
        <div className="space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border rounded-xl p-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Reach More Couples</h3>
              <p className="text-muted-foreground">
                Connect with thousands of engaged couples actively searching for wedding vendors
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <TrendingUp className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Grow Your Business</h3>
              <p className="text-muted-foreground">
                Showcase your services and get bookings through our easy-to-use platform
              </p>
            </div>

            <div className="bg-card border rounded-xl p-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Star className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Build Your Reputation</h3>
              <p className="text-muted-foreground">
                Collect reviews and ratings to establish trust with potential clients
              </p>
            </div>
          </section>

          <section className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-semibold text-primary">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg">
                Create your vendor profile today and start connecting with couples planning their special day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link href="/auth/vendor">
                    Register as Vendor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href="/auth/login">Sign In</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary text-center">
              Why Join Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Easy profile setup and management",
                "Secure booking and payment system",
                "Access to customer support",
                "Analytics to track your performance",
                "Featured listings and promotions",
                "Mobile-friendly vendor dashboard"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </PageLayout>
    </main>
  );
}
