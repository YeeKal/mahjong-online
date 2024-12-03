import { SITE_CONFIG,GAME_DETAIL, socialLinks } from '@/lib/constants';
import Image from 'next/image'
import Link from 'next/link';

type HelpfulLinkTypes = {
    text:string;
    href:string;
}

const HelpfulLinks: HelpfulLinkTypes[] = [
    {
        text: "Privacy",
        href: "/privacy",
    },
    {
        text: "Terms",
        href: "/terms",
    }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="py-8">
                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <div className='max-w-2xl'>
                            <Image src="/favicon.svg" alt={SITE_CONFIG.brand} width={48} height={48} />
                            
                            <p className="text-xl font-bold">{SITE_CONFIG.site_name}</p>
                            <p className="font-medium ">Play Mahjong online free - Classic solitaire game for everyone!</p>


                        </div>
                        <div>
                            <p className="font-medium ">{GAME_DETAIL.footer.social}</p>

                            <div className="mt-6 grid grid-cols-1 space-y-2 text-sm">
                                {socialLinks.map((socialLink:{ title: string; href: string;}, index) => (
                                    <Link key={index} href={socialLink.href} prefetch={false} target="_blank" className="  transition hover:opacity-75 hover:text-teal-600"> {socialLink.title} </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="font-medium ">{GAME_DETAIL.footer.helpful_links}</p>

                            <div className="mt-6 grid grid-cols-1 space-y-2 text-sm">
                                {
                                    HelpfulLinks.map((link:HelpfulLinkTypes, index) => (
                                        <a key={index} href={link.href} className=" transition hover:opacity-75 hover:text-teal-600"> {link.text} </a>
                                    ))
                                }
                                <a href={"https://github.com/YeeKal/mahjong-online"} className=" transition hover:opacity-75 hover:text-teal-600"> {"Open Mahjong Online"} </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t flex flex-col items-center  pt-8">
                        <p className="mt-4 text-xs  ">&copy; {currentYear}  {SITE_CONFIG.brand}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}
