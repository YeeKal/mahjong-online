import { METADATA, socialLinks } from '@/lib/constants';
import Image from 'next/image'
import Link from 'next/link';



export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="py-8">
                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <div className='max-w-2xl'>
                            <Image
                                src={'https://nextjs.org/icons/vercel.svg'}
                                width={80}
                                height={100}
                                className="mb-1 rounded object-cover"
                                alt={METADATA.brand}
                            />
                            <p className="text-xl font-bold">{METADATA.site_name}</p>
                            <p className="font-medium ">Enjoy yourself with the new {METADATA.brand} mod!</p>


                        </div>
                        <div>
                            <p className="font-medium ">Socials</p>

                            <div className="mt-6 grid grid-cols-1 space-y-2 text-sm">
                                {socialLinks.map((socialLink:{ title: string; href: string;}, index) => (
                                    <Link key={index} href={socialLink.href} prefetch={false} target="_blank" className="  transition hover:opacity-75 hover:text-teal-600"> {socialLink.title} </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="font-medium ">Helpful Links</p>

                            <div className="mt-6 grid grid-cols-1 space-y-2 text-sm">
                                <Link  href={'/'} className="  transition hover:opacity-75 hover:text-teal-600"> Helpful link </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t flex flex-col items-center  pt-8">
                        <p className="mt-4 text-xs  ">&copy; {currentYear}  {METADATA.brand}. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}
