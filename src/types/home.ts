import { z } from 'zod'
import { CardBanner } from './category'
import { cardBannerSchema } from './category'

export interface HomeCarousel {
  name: string
  content: CardBanner[] // Adjust this type if you have a more specific type for content
}

export type FilterSelect = string[];

const homeCarouselSchema = z.object({
  name: z.string(),
  content: z.array(cardBannerSchema),
})

const filterSelectSchema = z.array(z.string())

export { homeCarouselSchema, filterSelectSchema}
