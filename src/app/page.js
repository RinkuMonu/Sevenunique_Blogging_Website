import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import TopNewsSection from "../../components/TopNewsSection";
import AdvertisementSection from "../../components/AdvertisementSection";
import Sports from "../../components/Sports";

export default function Home() {
  return (
    <>
      <div className="px-24">
        <HeroSection />
        <TopNewsSection />
        <AdvertisementSection />
        <Sports />
      </div>

    </>
  );
}
