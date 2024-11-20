/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JwtsIVA2CTS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import DarkModeToggle from "./DarkModeToggle";
export default function Navigation() {
    const navText = [
        {
            text: "Home",
            href: "/",
            icon: HomeIcon
        },
        {
            text: "Blog",
            href: "/blog",
            icon: PostIcon
        },
        {
            text: "About",
            href: "/about",
            icon: InfoIcon
        }];


  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow text-foreground">
      <div className="container px-8 sm:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="w-8 h-8" />
          <SeparatorIcon/>
          <span className="text-2xl font-semibold">Cogito.AI</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
            {
                navText.map((item, index) => (
                    <Link key={index} href={item.href} className="text-xl text-foreground font-semibold  hover:underline underline-offset-4 hover:decoration-theme" prefetch={false}>
                        {item.text}
                    </Link>
                ))
            }

            <DarkModeToggle/>
          
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8}>
                {
                    navText.map((item, index) => (
                    <DropdownMenuItem key={index}>
                    <Link href={item.href} className="flex text-lg items-center gap-2" prefetch={false}>
                        <item.icon className="w-6 h-6" />
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

function SeparatorIcon(props){
    return (
        <svg {...props} height="32" role="separator" viewBox="0 0 32 32" width="32"><path d="M22 5L9 28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    )
}

function PostIcon(props){
  return(
    <svg
      {...props} 
      width="800px" 
      height="800px" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
    <path d="M9 12H15"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9 15H15"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.8284 6.82843C18.4065 7.40649 18.6955 7.69552 18.8478 8.06306C19 8.4306 19 8.83935 19 9.65685L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12.3431C13.1606 3 13.5694 3 13.9369 3.15224C14.3045 3.30448 14.5935 3.59351 15.1716 4.17157L17.8284 6.82843Z"  stroke-width="2" stroke-linejoin="round"/>
    </svg>
  )
}



function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}




function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#328071"
      strokeWidth="2"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}




