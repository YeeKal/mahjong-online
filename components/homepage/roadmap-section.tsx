import { GAME_DETAIL } from '@/lib/constants'

export default function RoadmapSection() {
    return (
        <section className="max-w-5xl mx-auto py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 dark:text-white">
                    {GAME_DETAIL.roadmap.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {GAME_DETAIL.roadmap.description}
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                {GAME_DETAIL.roadmap.items.map((item, index) => (
                    <div 
                        key={index}
                        className="flex flex-col p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl" role="img" aria-label={item.title}>
                                {item.emoji}
                            </span>
                            <div>
                                <h3 className="text-xl font-semibold dark:text-white">
                                    {item.title}
                                </h3>
                                <span className="text-sm text-blue-600 dark:text-blue-400">
                                    {item.status}
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
