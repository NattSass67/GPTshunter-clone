import { cardBannerArraySchema, cardBannerSchema } from './category'
import { z } from 'zod'

const relatedTagsSchema= z.array(z.string());

const tagsSchema = z.object({
  content: z.array(cardBannerSchema),
  relatedTags: relatedTagsSchema,
  totalBanner: z.number().min(0)
})

export type RelatedTags = z.infer<typeof relatedTagsSchema >;
export type Tags = z.infer<typeof tagsSchema >;
export {tagsSchema}
