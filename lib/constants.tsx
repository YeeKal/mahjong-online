

export const DOMAIN_NAME = `mahjong.co`

export const TITLE_TAILWIND_CLASS = "text-2xl sm:text-2xl md:text-3xl lg:text-4xl"

export const METADATA={
   brand: `Sprunki Retake`,
   site_name:`${DOMAIN_NAME}`,
   base_url:`https://www.${DOMAIN_NAME}`,
   title: `Sprunki Retake - Play Sprunki Retake Free Online in 2024`,
   description: `Discover Sprunki Retake Mod, the latest fan-driven version of the popular Incredibox game, at SprunkiRetake.co! Enjoy the immersive experience of Sprunki Retake Incredibox, featuring enhanced beats, visuals, and unique styles that bring your music-making to life. Explore Sprunki Retake bonus characters, fresh soundscapes, updated animations, and new interactive possibilities in this exclusive mod. Join fans worldwide and play Sprunki Retake Mod online for free—no downloads or sign-ups required!`,

}
export const socialLinks: { title: string; href: string;}[] = [

    {
        title: "Reddit",
        href: `https://www.reddit.com/submit?url=${METADATA.base_url}&title=${METADATA.brand}`
    },
    {
        title: "WhatsApp",
        href: `https://wa.me/?text=${METADATA.brand}`,
    },
    {
        title: "Facebook",
        href: `https://www.facebook.com/sharer.php?u=${METADATA.base_url}&quote=${METADATA.brand}`,
    },
    {
        title: "Twitter",
        href: `https://twitter.com/intent/tweet?url=${METADATA.base_url}&text=${METADATA.brand}&via=${METADATA.brand}&hashtags=${METADATA.brand}`
    },
    {
        title: "Mail",
        href: `mailto:?subject=${METADATA.brand}&body=${METADATA.brand}`
    }
];