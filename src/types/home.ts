import { z } from 'zod'
import { cardBannerSchema } from './category'

const homeCarouselSchema = z.object({
  name: z.string(),
  content: z.array(cardBannerSchema),
})

const filterSelectSchema = z.array(z.string())

export type HomeCarousel = z.infer<typeof homeCarouselSchema>;
export type FilterSelect = z.infer<typeof filterSelectSchema>;

export { homeCarouselSchema, filterSelectSchema}
