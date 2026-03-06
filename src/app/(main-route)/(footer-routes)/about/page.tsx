import { AboutHero } from "@/components/footer-route/about/about-hero";
import { AboutStory } from "@/components/footer-route/about/about-story";
import { AboutStats } from "@/components/footer-route/about/about-stats";
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

      <div className="pb-12 lg:pb-18">
          <AboutStats />
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

      {/* <div className="pt-5"> */}
        <PageLayout paddingSize="none">
          <AboutCTA />
        </PageLayout>
      {/* </div> */}
    </main>
  );
}
