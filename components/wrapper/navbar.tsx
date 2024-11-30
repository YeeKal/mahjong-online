import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import ThemeToggle from "../common/ThemeToggle";
import { SITE_CONFIG } from '@/lib/constants';
import Image from 'next/image';
import { HelpCircle, Shield, ScrollText } from "lucide-react"

export default function Navigation() {
    const navText = [
        {
            text: "How to Play",
            href: "/#how-to-play",
            icon: HelpCircle
        },
        {
            text: "Privacy",
            href: "/privacy",
            icon: Shield
        },
        {
            text: "Terms",
            href: "/terms",
            icon: ScrollText
        }
      ];


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 px-2" prefetch={false}>
          <Image src="/favicon.svg" alt={SITE_CONFIG.brand} width={48} height={48} />
          {/* <SeparatorIcon/> */}
          <span className="text-xl font-semibold">{SITE_CONFIG.brand}</span>
        </Link>

        <nav className="hidden sm:flex  items-center justify-between gap-2 md:gap-10 lg:gap-20">
            {
                navText.map((item) => (
                    <Link key={item.text} href={item.href} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary" prefetch={false}>
                        {typeof item.icon === 'string' ? (
                            <Image src={item.icon} alt={item.text} width={16} height={16} />
                        ) : (
                            <item.icon className="h-4 w-4" />
                        )}
                        {item.text}
                    </Link>
                ))
            }
            <ThemeToggle/>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Image src="/favicon.svg" alt={SITE_CONFIG.brand} width={48} height={48} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8}>
                {
                    navText.map((item, index) => (
                    <DropdownMenuItem key={index}>
                    <Link href={item.href} className="flex text-lg items-center gap-2" prefetch={false}>
                        {typeof item.icon === 'string' ? (
                            <Image src={item.icon} alt={item.text} width={16} height={16} />
                        ) : (
                            <item.icon className="h-4 w-4" />
                        )}
                        {item.text}
                    </Link>
                    </DropdownMenuItem>
                    ))
                }
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  )
}