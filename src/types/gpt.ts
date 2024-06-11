import { CardBanner } from './category'
import { z } from 'zod'
import { cardBannerSchema } from './category'

export interface GptInfo {
  name: string
  logo: any
  by: string
  rate: number
  totalRate: number
  tags: string[]
  content: GptContentTopic[]
  promptStarter: string[]
  faq: GptFaq[]
  more: CardBanner[]
  alter: CardBanner[]
  information: GptInformation
  rank: number
  toUrl: string
}

export interface GptContentTopic {
  name: string
  description: string
}

export interface GptPromtStarter {
  name: string
  description: string
}

export interface GptFaq {
  question: string
  answer: string
}

export interface GptInformation {
  hunted: string
  updated: string
  crawled: string
  category: string
  chat: number
  builder: string
}

//builder is user Id

// Define GptContentTopic schema
const gptContentTopicSchema = z.object({
  name: z.string(),
  description: z.string(),
})

// Define GptFaq schema
const gptFaqSchema = z.object({
  question: z.string(),
  answer: z.string(),
})

// Define GptInformation schema
const gptInformationSchema = z.object({
  hunted: z.string(),
  updated: z.string(),
  crawled: z.string(),
  category: z.string(),
  chat: z.number(),
  builder: z.string(),
})

// Define GptInfo schema
const gptInfoSchema = z.object({
  name: z.string(),
  logo: z.any(), 
  by: z.string(),
  rate: z.number(),
  totalRate: z.number(),
  tags: z.array(z.string()),
  content: z.array(gptContentTopicSchema),
  promptStarter: z.array(z.string()), // Assuming promptStarter is an array of strings
  faq: z.array(gptFaqSchema),
  more: z.array(cardBannerSchema),
  alter: z.array(cardBannerSchema),
  information: gptInformationSchema,
  rank: z.number(),
  toUrl: z.string(),
})

export {
  gptInformationSchema,
  gptContentTopicSchema,
  gptInfoSchema,
  gptFaqSchema,
}
