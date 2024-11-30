'use client'
import { Button } from "@/components/ui/button";
import {scrollToSection} from '@/lib/utils';

 
export default function PlayButton({playTip, scrollId}:any){
    return (
        <Button 
        onClick={() => scrollToSection(scrollId)}
        className={`animate-buttonheartbeat rounded-md bg-cyan-400 hover:bg-cyan-300 text-medium font-semibold text-white`}>
        {playTip}
        </Button>
    )
}