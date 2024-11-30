export const DOMAIN_NAME = `mahjongonline.cc`

export const TITLE_TAILWIND_CLASS = "text-2xl sm:text-2xl md:text-3xl lg:text-4xl"

export const SITE_CONFIG = {
   brand: `MahjongOnline`,
   site_name: `${DOMAIN_NAME}`,
   base_url: `https://www.${DOMAIN_NAME}`,
   title: `Mahjong Online Free`,
   description: `Play free Mahjong online instantly - no download required! Classic Mahjong solitaire with multiple layouts, similar to Mahjong Titans. Enjoy our free Mahjong games anytime, anywhere. Perfect for both beginners and Mah Jong experts.`,
   keywords: `mahjong, mahjong online, free mahjong, mahjong solitaire, mahjong titans, free mahjong games, mah jong, mahjong 247, play mahjong`,
}

export const GAME_DETAIL={

    hero_section: {
        tagline: "Play mahjong online for free",
        description: `Mahjong, also known as Mahjong solitaire, is a single-player tile-matching game played online,  utilizing tiles based on the traditional Chinese game of Mahjong. The game typically involves a stack of 144 mahjong tiles, which are removed in pairs according to specific rules until all are cleared. Originating in China, the name "mahjong" is a transliteration of the Chinese word “麻将” for the game. Traditional Chinese Mahjong is a four-player game involving complex tile manipulation and the creation of specific hand combinations. Mahjong solitaire borrows the tiles from this traditional game but applies solitaire-style gameplay rules, creating a distinct game that has gained worldwide popularity. A similar game, initially titled Mahjong Titans and later renamed Microsoft Mahjong, was included in Windows Vista and subsequently released on the Windows Store. Therefore, the mahjong game on this website differs from the traditional four-player Chinese Mahjong and is instead identical to Mahjong solitaire, Mahjong Titans, and Microsoft Mahjong. Our online Mahjong Solitaire offers a relaxing and challenging experience perfect for single players of all skill levels. Play free Mahjong games online now!`,
        button: "Play Now"
    },
    features: {
        title: "Mahjong Game Features",
        items: [
            {
                emoji: "🎯",
                title: "Strategic Puzzle Solving",
                description: "Challenge yourself with multiple tile layouts and develop winning strategies to clear the board efficiently."
            },
            {
                emoji: "🧠",
                title: "Brain Training Fun",
                description: "Improve memory, concentration, and pattern recognition skills while enjoying a relaxing gaming experience."
            },
            {
                emoji: "🌐",
                title: "Play Anywhere, Anytime",
                description: "No download required - enjoy free Mahjong directly in your browser on any device, with progress saved automatically."
            }
        ]
    },
    roadmap: {
        title: "Coming Soon to Mahjong Online",
        description: "We're constantly working to enhance your Mahjong experience. Here's what's coming next:",
        items: [
            {
                emoji: "🎮",
                title: "More Layouts",
                description: "Expanding our collection with new, exciting Mahjong tile layouts to keep the game fresh and challenging.",
                status: "In Development"
            },
            {
                emoji: "💬",
                title: "Community Features",
                description: "Share your experiences, tips, and strategies with fellow Mahjong enthusiasts through comments and reviews.",
                status: "Coming Q4 2024"
            },
            {
                emoji: "🌍",
                title: "Multi-Language Support",
                description: "Making our game accessible to players worldwide with translations in multiple languages.",
                status: "Planning Phase"
            },
            {
                emoji: "👥",
                title: "Mahjong Community Hub",
                description: "Building a dedicated space for Mahjong lovers to connect, share achievements, and participate in discussions.",
                status: "Coming Q1 2025"
            }
        ]
    },
    faq: {
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about Mahjong Solitaire online",
        items: [
            {
                question: "Is Mahjong Solitaire the same as traditional Chinese Mahjong?",
                answer: "No, Mahjong Solitaire (also known as Mahjong Connect or Shanghai Solitaire) is a single-player matching game using Mahjong tiles. Traditional Chinese Mahjong is a four-player game with different rules and gameplay mechanics."
            },
            {
                question: "Can I play Mahjong online for free without downloading?",
                answer: "Yes! Our Mahjong game is completely free to play directly in your web browser. No downloads or installations are required, and you can play on any device with internet access."
            },
            {
                question: "What are the best strategies for winning Mahjong Solitaire?",
                answer: "Key strategies include: clearing top tiles first, looking for matching pairs at the edges, planning several moves ahead, and focusing on freeing up blocked tiles. It's also important to identify which tiles are 'free' (those with at least one exposed side) before making your moves."
            },
            {
                question: "Why do some tiles in Mahjong Solitaire become unmatched?",
                answer: "Sometimes tiles become unmatched because of the order in which previous matches were made. This is why it's important to plan ahead and try to keep multiple matching options available. Some layouts may become unsolvable if tiles are matched in an inefficient order."
            },
            {
                question: "What do the different Mahjong tile symbols mean?",
                answer: "Mahjong tiles include several categories: Dots (circles), Bamboo (sticks), Characters (Chinese numbers), Winds (North, South, East, West), Dragons (Red, Green, White), and bonus tiles like Flowers and Seasons. Each category has its own distinct symbols and meanings in traditional Mahjong."
            },
            {
                question: "Does playing Mahjong help brain function?",
                answer: "Yes! Mahjong Solitaire can help improve cognitive functions including memory, pattern recognition, concentration, and strategic thinking. Regular play may help maintain mental sharpness and provide beneficial brain exercise."
            },
            {
                question: "What's the difference between easy and hard Mahjong layouts?",
                answer: "Easier layouts typically have fewer layers and more exposed tiles, making matches more accessible. Harder layouts feature more complex stacking patterns, more layers, and require more strategic planning to complete successfully."
            }
        ]
    },
    how_to_play:{
        title: "How to play Mahjong",
        description: `The game uses a full set of 144 mahjong tiles, divided as follows:Dots, Bamboos, Characters, Winds, Dragons, Flowers, and Seasons.There are four copies of every tile except for the seasons and flowers, which have only one tile each.`,
        tiles:[
            { category: 'Dots (1 through 9)', image: `/imgs/mahjong-tiles-dots.png` },
            { category: 'Bamboos (1 through 9)', image: `/imgs/mahjong-tiles-bamboos.png`},
            { category: 'Characters (1 through 9)', image: `/imgs/mahjong-tiles-characters.png`},
            { category: 'Winds (East, South, West, North)', image: `/imgs/mahjong-tiles-winds.png`},
            { category: 'Dragons (Red, Green, White)', image: `/imgs/mahjong-tiles-dragons.png`},
            { category: 'Flowers (Plum, Orchid, Chrysanthemum, Bamboo)', image: `/imgs/mahjong-tiles-flowers.png`},
            { category: 'Seasons (Spring, Summer, Autumn, Winter)', image: `/imgs/mahjong-tiles-seasons.png`}
          ],
        tile_table_h1: "Mahjong Tiles",
        tile_table_h2: "Tile Image",
        game_rules_title: "Game Rules:",
        game_rules: [
            `🎮 Ready to start your Mahjong journey? First things first: Look for "open" tiles - these are the ones that aren't blocked and can slide left or right freely. Think of them as the tiles that are ready to play!`,
            
            `👀 Scan the board for matching pairs - just like in a memory game! When you spot two identical tiles that are both "open", click them to make them disappear. But remember, only exact matches count (except for our special friends, the Seasons and Flowers).`,
            
            `🌸 Here's a fun twist: Seasons and Flowers are like wildcards! Any two Seasons can be paired together (Spring can match with Winter!), and the same goes for Flowers. It's nature's way of making the game more interesting!`,
            
            `🔍 As you clear tiles, new ones will become "open" and ready to match. Keep your eyes peeled for these new opportunities - sometimes the perfect match was hiding underneath!`,
            
            `🎯 Plan ahead! Look at the entire board before making your moves. Sometimes it's better to leave an obvious pair for later if it's keeping other tiles blocked.`,
            
            `🏆 The game ends when either you've cleared all tiles (victory! 🎉) or when no more matches are possible. Don't worry if you get stuck - you can always start a new game and try a different strategy!`,
            
            `💡 Pro tip: Take your time and think strategically. The tiles aren't going anywhere, and sometimes the best moves aren't the most obvious ones.`
        ],
    },
    footer:{
        social:"Socials",
        helpful_links:"Helpful Links",
        privacy:"Privacy",
        terms:"Terms",
        send_feedback:"Send Feedback"
    }

}
export const socialLinks: { title: string; href: string;}[] = [

    {
        title: "Reddit",
        href: `https://www.reddit.com/submit?url=${SITE_CONFIG.base_url}&title=${SITE_CONFIG.brand}`
    },
    {
        title: "WhatsApp",
        href: `https://wa.me/?text=${SITE_CONFIG.brand}`,
    },
    {
        title: "Facebook",
        href: `https://www.facebook.com/sharer.php?u=${SITE_CONFIG.base_url}&quote=${SITE_CONFIG.brand}`,
    },
    {
        title: "Twitter",
        href: `https://twitter.com/intent/tweet?url=${SITE_CONFIG.base_url}&text=${SITE_CONFIG.brand}&via=${SITE_CONFIG.brand}&hashtags=${SITE_CONFIG.brand}`
    },
    {
        title: "Mail",
        href: `mailto:?subject=${SITE_CONFIG.brand}&body=${SITE_CONFIG.brand}`
    }
];