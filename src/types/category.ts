import { z } from 'zod'

// Define the schema for the link object
const linkSchema = z.object({
  href: z.string(),
  label: z.string(),
})

const cardBannerSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  link: linkSchema,
  logo: z.any(), // Assuming logo is of an unknown type
  rate: z.number().min(0).max(5), // Assuming rate is between 0 and 5
  comments: z.number().nonnegative(), // Assuming comments is a non-negative number
})

const categorySchema = z.object({
  name: z.string(),
  count: z.string(),
})

const cardBannerArraySchema = z.array(cardBannerSchema)

// Define the schema for the category
const categoryWithContentSchema = z.object({
  name: z.string(),
  totalContent: z.number().min(0),
  content: z.array(cardBannerSchema),
})

const categoriesSchema = z.array(categoryWithContentSchema)
const categoriesForSelect = z.array(categorySchema)

export type CategoryWithContent = z.infer<typeof categoryWithContentSchema>
export type Categories = z.infer<typeof categoriesSchema>

//Do this instead of using interface
export type Link = z.infer<typeof linkSchema>
export type CardBanner = z.infer<typeof cardBannerSchema>
export type Category = z.infer<typeof categorySchema>
export type CategoryForSelect = z.infer<typeof categoriesForSelect>

export {
  linkSchema,
  cardBannerSchema,
  categorySchema,
  cardBannerArraySchema,
  categoriesSchema,
  categoriesForSelect,
  categoryWithContentSchema
}
