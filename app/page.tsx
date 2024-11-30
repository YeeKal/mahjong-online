import HeroSection from "@/components/homepage/hero-banner";
import SpringAnimatedFeatures from "@/components/homepage/marketing-cards";
import FlashGamePlayer from "@/components/homepage/mahjong-frame";
import PlaySection from "@/components/homepage/play-section";
import FeaturesSection from "@/components/homepage/features-section";
import RoadmapSection from "@/components/homepage/roadmap-section";
import FaqSection from "@/components/homepage/faq-section";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center w-full mt-[0rem] p-3">
      {/* swfUrl={"https://cdn.mahjongonline.cc/resources/mahjong.swf"} */}
        <FlashGamePlayer />
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <HeroSection />
      </div>
      <div id="how-to-play" className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <PlaySection />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <FeaturesSection />
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-gray-50 dark:bg-gray-900">
        <RoadmapSection />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <FaqSection />
      </div>
      {/* <div className="flex mt-[8rem] w-full justify-center items-center">
        <SideBySide/>
      </div>
      <div className="flex flex-col mt-[4rem] p-2 w-full justify-center items-center">
        <SpringAnimatedFeatures />
      </div> */}
    </main>
  );
}
