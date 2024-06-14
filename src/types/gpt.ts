
import { z } from 'zod'
import { cardBannerSchema } from './category'

const trendSchema = z.array(
  z.object({
    value: z.number(),
    date: z.string()
  })
);

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
  userId: z.string(),
  name: z.string(),
  logo: z.any(), 
  by: z.string(),
  rate: z.number(),
  totalRate: z.number(),
  tags: z.array(z.string()),
  tools: z.array(z.string()),
  content: z.array(gptContentTopicSchema),
  promptStarter: z.array(z.string()), // Assuming promptStarter is an array of strings
  faq: z.array(gptFaqSchema),
  more: z.array(cardBannerSchema),
  alter: z.array(cardBannerSchema),
  information: gptInformationSchema,
  rank: z.number(),
  toUrl: z.string(),
  trend: trendSchema,
})

export type GptContentTopic = z.infer<typeof gptContentTopicSchema>;
export type GptFaq = z.infer<typeof gptFaqSchema>;
export type GptInformation = z.infer<typeof gptInformationSchema>;
export type GptInfo = z.infer<typeof gptInfoSchema>;
export type GptTrend = z.infer<typeof trendSchema>;

export {
  gptInformationSchema,
  gptContentTopicSchema,
  gptInfoSchema,
  gptFaqSchema,
  trendSchema
}
