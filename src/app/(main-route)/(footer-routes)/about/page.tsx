import { AboutHero } from "@/components/footer-route/about/about-hero";
import { AboutStory } from "@/components/footer-route/about/about-story";
import { AboutValues } from "@/components/footer-route/about/about-values";
import { WhyChooseWeddingHub } from "@/components/footer-route/about/why-choose-weddinghub";
import { AboutCTA } from "@/components/footer-route/about/about-cta";
import PageLayout from "@/components/ui/custom/page-layout";

export default function AboutUsPage() {
  return (
    <main>
      <div>
        <AboutHero />
      </div>

      <PageLayout>
        <AboutStory />
      </PageLayout>

      <PageLayout>
        <AboutValues />
      </PageLayout>

      <PageLayout>
        <WhyChooseWeddingHub />
      </PageLayout>

      <PageLayout>
        <AboutCTA />
      </PageLayout>
    </main>
  );
}
