import { cardBannerSchema } from './category'
import { z } from 'zod'

const profileSchema = z.object({
  content: z.array(cardBannerSchema),
  name: z.string(),
  totalBanner: z.number().min(0)
})

export type Profile = z.infer<typeof profileSchema >;
export {profileSchema}
        