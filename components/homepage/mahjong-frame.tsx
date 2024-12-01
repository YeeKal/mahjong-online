'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, RefreshCcw } from 'lucide-react'
import Script from 'next/script'
import {GAME_DETAIL} from '@/lib/constants'
import { StarRating } from '../common/star-rating'

// Define RufflePlayer types
interface RufflePlayer {
  load(url: string): void;
  play(): void;
  pause(): void;
}

interface RufflePlayerStatic {
  newest(): {
    createPlayer(): RufflePlayer;
  };
  config: {
    splashScreen?: boolean;
    preloader?: boolean;
    [key: string]: any;
  };
}

// Extend the Window interface
declare global {
  interface Window {
    RufflePlayer?: RufflePlayerStatic;
  }
}

interface AsyncRufflePlayerProps {
  swfUrl: string
}

export default function AsyncRufflePlayer() {
  // const swfUrl = "https://oldflashgames.github.io/games4/mahjong.swf";
  const swfUrl = "/mahjong.swf";
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isRuffleLoaded, setIsRuffleLoaded] = useState(false)

  const loadRuffle = async () => {
    try {
      setIsLoading(true)
      setError(null)

      if (typeof window === 'undefined' || !window.hasOwnProperty('RufflePlayer') ||  !window.RufflePlayer) {
        throw new Error('Ruffle is not available')
      }

      if (!containerRef.current) {
        throw new Error('Container ref is not available')
      }

      // Safely remove previous content
      if (playerRef.current && playerRef.current.parentNode === containerRef.current) {
        containerRef.current.removeChild(playerRef.current)
      }
      playerRef.current = null

      const player = window.RufflePlayer.newest()
      
      if (!player) {
        throw new Error('Failed to create Ruffle player')
      }

      // Configure Ruffle to remove the loading logo
      window.RufflePlayer.config = {
        ...window.RufflePlayer.config,
        splashScreen: false,
        preloader: false,
        autoplay: "on",
        allowFullscreen: true,
        unmuteOverlay: "hidden"
      }

      playerRef.current = player.createPlayer()
      containerRef.current.appendChild(playerRef.current)
      
      await playerRef.current.load({ url: swfUrl })
      
      playerRef.current.style.width = '100%'
      playerRef.current.style.height = '100%'
    } catch (e) {
      console.error('Error loading Ruffle player:', e)
      setError(`Failed to load the game: ${e instanceof Error ? e.message : 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isRuffleLoaded) {
      loadRuffle()
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy()
      }
    }
  }, [swfUrl, isRuffleLoaded])

  const handleRetry = () => {
    setError(null)
    setIsLoading(true)
    if (isRuffleLoaded) {
      loadRuffle()
    }
  }

  return (
    <div id="mahjong-frame" className="flex flex-col items-center w-full max-w-6xl ">

        <div 
          ref={containerRef} 
          className='w-full  h-screen max-h-[min(90vw,90vh)] relative rounded-lg overflow-hidden'
          role="application"
          aria-label="Mahjong Flash game player"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 text-center p-4">
              <AlertCircle className="h-12 w-12 text-destructive mb-4" />
              <p className="text-destructive mb-4">{error}</p>
              <Button onClick={handleRetry} className="flex items-center">
                <RefreshCcw className="mr-2 h-4 w-4" /> Retry
              </Button>
            </div>
          )}
        </div>
        <div className="flex items-center mt-2 text-sm text-muted-foreground">
          <StarRating rating={4.8} />
          <span className="ml-2 text-sm text-gray-600">({14030} reviews)</span>
        </div>
      <Script
        src="https://unpkg.com/@ruffle-rs/ruffle"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Ruffle script loaded')
          setIsRuffleLoaded(true)
        }}
        onError={() => {
          console.error('Failed to load Ruffle script')
          setError('Failed to load game player')
          setIsLoading(false)
        }}
      />
    </div>
    // <Card className="max-w-6xl mx-auto h-screen max-h-[min(100vw,100vh)] aspect-square">
    //   {/* <CardHeader>
    //     <CardTitle>{GAME_DETAIL.tagline}</CardTitle>
    //   </CardHeader> */}
    //   <CardContent>
    //     <div 
    //       ref={containerRef} 
    //       className='w-full  h-screen max-h-[min(100vw,100vh)] relative rounded-lg overflow-hidden'
    //       role="application"
    //       aria-label="Mahjong Flash game player"
    //     >
    //       {isLoading && (
    //         <div className="absolute inset-0 flex items-center justify-center bg-background/80">
    //           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    //         </div>
    //       )}
    //       {error && (
    //         <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 text-center p-4">
    //           <AlertCircle className="h-12 w-12 text-destructive mb-4" />
    //           <p className="text-destructive mb-4">{error}</p>
    //           <Button onClick={handleRetry} className="flex items-center">
    //             <RefreshCcw className="mr-2 h-4 w-4" /> Retry
    //           </Button>
    //         </div>
    //       )}
    //     </div>
    //   </CardContent>
    //   <CardFooter className="text-sm text-muted-foreground">
    //     Powered by Ruffle Flash Emulator
    //   </CardFooter>
    //   <Script
    //     src="https://unpkg.com/@ruffle-rs/ruffle"
    //     strategy="afterInteractive"
    //     onLoad={() => {
    //       console.log('Ruffle script loaded')
    //       setIsRuffleLoaded(true)
    //     }}
    //     onError={() => {
    //       console.error('Failed to load Ruffle script')
    //       setError('Failed to load game player')
    //       setIsLoading(false)
    //     }}
    //   />
    // </Card>
  )
}