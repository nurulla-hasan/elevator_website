import Image from "next/image";

export function AboutStory() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Our Story
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              WeddingHub was born from a simple idea: wedding planning should be exciting, not stressful. 
              After experiencing the challenges of finding reliable vendors firsthand, our founders 
              decided to create a platform that would make the process seamless.
            </p>
            <p>
              Today, we&apos;re proud to be the leading wedding marketplace, connecting thousands of 
              couples with verified, top-rated vendors across the country. Our platform combines 
              cutting-edge technology with personalized service to ensure your wedding planning 
              journey is smooth and enjoyable.
            </p>
            <p className="italic font-medium text-primary/80">
              Every wedding is a unique celebration of love, and we&apos;re honored to play a part in 
              making your special day perfect.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 relative aspect-5/3 w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
            alt="Our Story Wedding"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
