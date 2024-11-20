import Image from "next/image";
import ThemeToggle from "@/components/common/ThemeToggle";
import HeroSection from "@/components/homepage/hero-banner";
import SideBySide from "@/components/homepage/side-by-side";
import SpringAnimatedFeatures from "@/components/homepage/marketing-cards";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <HeroSection />
    </div>
    <div className="flex mt-[8rem] w-full justify-center items-center">
      <SideBySide/>
    </div>
    
    <div className="flex flex-col mt-[4rem] p-2 w-full justify-center items-center">
        <SpringAnimatedFeatures />
      </div>
    </>
  );
}
