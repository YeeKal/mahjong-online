import { ArrowRight, Gamepad2 } from 'lucide-react';
import Link from "next/link";
import { BorderBeam } from "../magicui/border-beam";
import { Button } from "../ui/button";
import Image from 'next/image';
import { TITLE_TAILWIND_CLASS, GAME_DETAIL } from '@/lib/constants';
import PlayButton from '@/components/common/play-button';

export default function HeroSection() {
    return (
        <section className='flex flex-col items-center justify-center leading-6 mt-[3rem]' aria-label={GAME_DETAIL.hero_section.tagline}>
            <h1 className={`${TITLE_TAILWIND_CLASS} scroll-m-20 font-semibold tracking-tight text-center max-w-[1120px] bg-gradient-to-b dark:text-white`}>
                {GAME_DETAIL.hero_section.tagline}
            </h1>
            <p className="mx-auto max-w-4xl text-gray-500 mt-2 dark:text-gray-400">
            {GAME_DETAIL.hero_section.description}
            </p>
            <div className="flex justify-center items-center gap-3 mt-4">
                <Gamepad2 />
                <PlayButton playTip={GAME_DETAIL.hero_section.button} scrollId={"mahjong-frame"}></PlayButton>
                <Gamepad2 />
            </div>
            
        </section>
    )
}