import { CardBanner } from './category'

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
