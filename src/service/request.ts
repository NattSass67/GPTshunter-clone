import { GptInfo } from '@/types/gpt'
import { filterSelectSchema } from '@/types/home'
import { searchKeywordsSchema, contentByQuerySchema } from '@/types/search'
import { gptInfoSchema } from '@/types/gpt'
import { mockContent, sampleGptInfo, sampleGptInfo1 } from './mock'
import { Tags } from '@/types/tags'
import { tagsSchema } from '@/types/tags'
import {
  cardBannerArraySchema,
  categoriesSchema,
  categoriesForSelect,
  categoryWithContentSchema,
} from '@/types/category'
import { profileSchema } from '@/types/profile'

export async function getAllFilter() {
  const data = [
    'Featured',
    'Newest',
    'By ChatGPT',
    'Has Action',
    '中文',
    '日本語',
    'Productivity',
    'Developer tools',
    'Customer support',
    'Education assistant',
    'Healthcare',
    'Sales',
    'Marketing',
    'Language learning',
    'Startup tools',
    'General writing',
    'Code assistant',
    'Finance',
    'Writing assistant',
    'Text to speech',
    'Human resources',
  ]

  // Validate data using Zod schema with safeParse
  const result = filterSelectSchema.safeParse(data)

  if (!result.success) {
    console.error('Validation error:', result.error.errors)
    throw new Error('Invalid data format')
  }

  return { data: result.data }
}

export async function getByFilterSelected(name: string) {
  const result = cardBannerArraySchema.safeParse(mockContent)

  if (!result.success) {
    console.error('Validation error:', result.error.errors)
    throw new Error('Invalid data format')
  }

  return { data: result.data }
}

export async function getByDefaultCategory() {
  //every category with content exist
  const data = [
    {
      name: 'Featured GPTs on GPT Store',
      totalContent: 100,
      content: mockContent,
    },
    {
      name: 'Trending GPTs on GPT Store',
      totalContent: 100,
      content: mockContent,
    },
    {
      name: 'Best DALL·E GPTs on GPT Store',
      totalContent: 100,
      content: mockContent,
    },
    {
      name: 'Best Writing GPTs on GPT Store',
      totalContent: 100,
      content: mockContent,
    },
    {
      name: 'Best Productivity GPTs on GPT Store',
      totalContent: 100,
      content: mockContent,
    },
  ]

  const result = categoriesSchema.safeParse(data)

  if (!result.success) {
    console.error('Validation error:', result.error.errors)
    throw new Error('Invalid data format')
  }

  return { data: result.data }
}

export async function getByCategoryName(name: string, page: number) {
  const result = categoryWithContentSchema.safeParse({
    content: mockContent,
    name: name,
    totalContent: 100,
  })

  if (!result.success) {
    console.error('Validation error:', result.error.errors)
    throw new Error('Invalid data format')
  }

  return { data: result.data }
}

export async function getByUserId(id: string) {
  const result = profileSchema.safeParse({
    name: 'CHRISTINA MCKENNA',
    content: mockContent,
    totalBanner: 49,
  })

  if (!result.success) {
    console.error('Validation error:', result.error.errors)
    throw new Error('Invalid data format')
  }

  return { data: result.data }
}

export async function getByTagName(name: string, page: number) {
  const result = tagsSchema.safeParse({
    content: mockContent,
    relatedTags: ['AI', 'Machine Learning', 'Content Creation'],
    totalBanner: 100,
  })

  if (!result.success) {
    console.error('Validation error:', result.error.errors)
    throw new Error('Invalid data format')
  }

  return { data: result.data }
}

export async function getExistCategory() {
  const data = [
    {
      name: 'Dalle',
      count: '17K+',
    },
    {
      name: 'Education',
      count: '69K+',
    },
    {
      name: 'Lifestyle',
      count: '53K+',
    },
    {
      name: 'Productivity',
      count: '55K+',
    },
    {
      name: 'Programming',
      count: '29K+',
    },
    {
      name: 'Research',
      count: '44K+',
    },
    {
      name: 'Writing',
      count: '44K+',
    },
    {
      name: 'Other',
      count: '151K+',
    },
  ]

  const result = categoriesForSelect.safeParse(data)

  if (!result.success) {
    console.error('Validation error:', result.error.errors)
    throw new Error('Invalid data format')
  }

  return { data: result.data }
}

export async function getGptByID(id: string) {
  const result = gptInfoSchema.safeParse(sampleGptInfo)
  const result1 = gptInfoSchema.safeParse(sampleGptInfo1)

  if (!result.success) {
    console.error('Validation error:', result.error.errors)
    throw new Error('Invalid data format')
  }

  if (id == '1') {
    return { data: result1.data }
  }

  return { data: result.data }
}

export async function getSearchKeyword(key: string) {
  const sampleData: { [key: string]: string[] } = {
    apple: ['applepie', 'applecider', 'applestore', 'applewatch'],
    banana: ['bananabread', 'bananasmoothie', 'bananasplit', 'bananapudding'],
    car: ['carinsurance', 'carrental', 'carwash', 'carrepair'],
    default: ['search1', 'search2', 'search3', 'search4', 'search5'],
  }

  const result = searchKeywordsSchema.safeParse(
    sampleData[key] || sampleData['default'],
  )

  if (!result.success) {
    console.error('Validation error:', result.error.errors)
    throw new Error('Invalid data format')
  }

  return { data: result.data }
}

export async function getBySearchQuery(query: string, page: number) {
  const result = contentByQuerySchema.safeParse({
    content: mockContent,
    totalContent: 100,
  })

  if (!result.success) {
    console.error('Validation error:', result.error.errors)
    throw new Error('Invalid data format')
  }

  return { data: result.data }
}
