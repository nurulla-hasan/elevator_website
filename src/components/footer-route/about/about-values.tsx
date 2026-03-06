import { Heart, Users, ShieldCheck, Target } from "lucide-react";

export function AboutValues() {
  const values = [
    {
      title: "Passion for Perfection",
      description: "We're dedicated to helping you create the wedding of your dreams with attention to every detail.",
      icon: Heart,
    },
    {
      title: "Trusted Community",
      description: "Our curated network of verified vendors ensures quality and reliability for your special day.",
      icon: Users,
    },
    {
      title: "Excellence First",
      description: "We maintain the highest standards in vendor selection and customer service.",
      icon: ShieldCheck,
    },
    {
      title: "Your Vision, Our Mission",
      description: "Every wedding is unique, and we're here to bring your specific vision to life.",
      icon: Target,
    },
  ];

  return (
    <section>
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-primary uppercase tracking-tight">
          Our Values
        </h2>
        <p className="text-muted-foreground text-lg">
          The principles that guide everything we do
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="group relative p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 bg-card"
          >
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/20">
              <value.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {value.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
