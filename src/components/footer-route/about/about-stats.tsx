export function AboutStats() {
  const stats = [
    { label: "Happy Couples", value: "10,000+" },
    { label: "Verified Vendors", value: "5,000+" },
    { label: "Cities", value: "50+" },
    { label: "Average Rating", value: "4.9/5" },
  ];

  return (
    <section className="bg-primary/10 py-18">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center space-y-2 group">
            <h3 className="text-4xl md:text-5xl font-semibold text-primary transition-transform group-hover:scale-105 duration-300">
              {stat.value}
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
