import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="bg-primary/5 p-8 md:p-16 rounded-3xl text-center space-y-8">
      <div className="space-y-4 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
          Ready to Start Planning?
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Join thousands of happy couples and start your wedding planning journey today.
        </p>
      </div>
      <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
        <Link href="/vendors">
          <Button size="lg" className="h-14 px-10 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
            Find Your Vendors
          </Button>
        </Link>
        <Link href="/auth/register">
          <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold border-primary/20 hover:bg-primary/5 transition-all">
            Create Account
          </Button>
        </Link>
      </div>
    </section>
  );
}
