import HeroSection from "../../components/HeroSection";
import TopNewsSection from "../../components/TopNewsSection";
import AdvertisementSection from "../../components/AdvertisementSection";
import Sports from "../../components/Sports";
import BusinessSection from "../../components/BusinessSection";
import AstrologySection from "../../components/AstrologySection";
import LifestyleSection from "../../components/LifestyleSection";

export default function Home() {
  return (
    <>
      <div className="px-24">
        <HeroSection />
        <TopNewsSection />
        <AdvertisementSection />
        <Sports />
        <BusinessSection />
        <AstrologySection />
        <LifestyleSection />
      </div>

    </>
  );
}
