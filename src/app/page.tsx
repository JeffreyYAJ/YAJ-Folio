import { HomeAboutTeaser, HomeStatsSection } from "@/components/sections/HomeStatsSection";
import { HomeExploreSection } from "@/components/sections/HomeExploreSection";
import { HomeFeaturedSection } from "@/components/sections/HomeFeaturedSection";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <HomeStatsSection />
      <HomeAboutTeaser />
      <HomeFeaturedSection />
      <HomeExploreSection />
    </main>
  );
}
