'use client'

import { useState } from 'react'
import { GAME_DETAIL } from '@/lib/constants'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="max-w-4xl mx-auto py-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 dark:text-white">
                    {GAME_DETAIL.faq.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    {GAME_DETAIL.faq.description}
                </p>
            </div>

            <div className="space-y-4 px-4">
                {GAME_DETAIL.faq.items.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                        >
                            <h3 className="font-medium text-lg dark:text-white pr-8">
                                {item.question}
                            </h3>
                            <span className="flex-shrink-0 text-gray-500">
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5" />
                                ) : (
                                    <ChevronDown className="h-5 w-5" />
                                )}
                            </span>
                        </button>
                        
                        {openIndex === index && (
                            <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                                <p className="text-gray-600 dark:text-gray-400">
                                    {item.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
