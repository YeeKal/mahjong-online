import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  maxRating?: number
}

export function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  return (
    <div className="flex items-center" aria-label={`Rating: ${rating} out of ${maxRating} stars`}>
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }`}
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">{rating} out of {maxRating} stars</span>
    </div>
  )
}
