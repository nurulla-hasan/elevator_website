import { Headphones } from "lucide-react";

export function PricingHero() {
  return (
    <section className="flex flex-col items-center text-center gap-4 py-10 px-4">
      <div className="bg-primary p-4 rounded-full">
        <Headphones className="h-8 w-8 text-white" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary">
          Hire a WePlan Associate
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get personalized help from our expert wedding associates. We&apos;ll handle vendor coordination, 
          negotiations, and all the details so you can enjoy planning your special day stress-free.
        </p>
      </div>
    </section>
  );
}
