import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "@/components/ui/custom/star-rating";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "Our associate made planning so much easier! They found amazing vendors within our budget.",
    author: "Sarah & Michael",
  },
  {
    text: "Best decision ever! We saved money and had someone handling all the stressful parts.",
    author: "Emily & James",
  },
  {
    text: "The on-site coordination was perfect. Everything ran smoothly on our wedding day!",
    author: "Lisa & David",
  },
  {
    text: "I was overwhelmed with vendor choices until I used this service. Simply outstanding!",
    author: "Jessica & Robert",
  },
  {
    text: "Professional, attentive, and really understood our vision for the big day.",
    author: "Amanda & Thomas",
  },
];

export function PricingTestimonials() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 items-center text-center">
        <h3 className="text-3xl font-bold text-primary">
          Real Stories, Real Love
        </h3>
        <div className="h-1.5 w-16 bg-primary/20 rounded-full" />
      </div>

      <div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <CardContent className="flex flex-col gap-4">
                    <StarRating totalStars={5} rating={5} size={16} />
                    <p className="text-sm md:text-base text-foreground/80 font-medium leading-relaxed italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-primary/10">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-primary text-sm">
                          {testimonial.author}
                        </span>
                        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                          Happy Couple
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
