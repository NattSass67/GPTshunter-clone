import { z } from 'zod'

// Define the schema for the link object
const linkSchema = z.object({
  href: z.string().url(),
  label: z.string(),
})

// Define the schema for the main object
const cardSchema = z.object({
  name: z.string(),
  description: z.string(),
  link: linkSchema,
  logo: z.any(), // Assuming logoPlanetaria is of an unknown type
  rate: z.number().min(0).max(5), // Assuming rate is between 0 and 5
  comments: z.number().nonnegative(), // Assuming comments is a non-negative number
})

// Define the interface for the link object
export interface Link {
  href: string
  label: string
}

// Define the interface for the main object
export interface CardBanner {
  name: string
  description: string
  link: Link
  logo: any // Adjust this type as needed
  rate: number
  comments: number
}

export interface Category {
  name: string
  count: number
}

export { linkSchema, cardSchema }
