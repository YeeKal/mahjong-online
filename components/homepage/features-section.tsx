import { GAME_DETAIL } from '@/lib/constants'

export default function FeaturesSection() {
    return (
        <section className="max-w-5xl mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
                {GAME_DETAIL.features.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {GAME_DETAIL.features.items.map((feature, index) => (
                    <div 
                        key={index}
                        className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                    >
                        <span className="text-4xl mb-4" role="img" aria-label={feature.title}>
                            {feature.emoji}
                        </span>
                        <h3 className="text-xl font-semibold mb-2 dark:text-white">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
