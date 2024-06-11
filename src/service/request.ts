import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStar from '@/images/logos/star.svg'
import logoComment from '@/images/logos/comment.svg'
import { GptInfo } from '@/types/gpt'

export async function getAllFilter() {
  return {
    data: [
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
    ],
  }
}

export async function getByFilterSelected(name: string) {
  return {
    data: mockContent,
  }
}

const mockContent = [
  { 
    id: "1f",
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "1daf",
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "1f",
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "18",
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "1",
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "18",
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "14655",
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "1",
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "135",
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "1ng",
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "286",
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3,
  },
  {
    id: "1000",
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3,
  },
]

export async function getByDefaultCategory() {
  //every category with content exist
  return {
    data: [
      {
        name: 'Featured GPTs on GPT Store',
        content: mockContent,
      },
      {
        name: 'Trending GPTs on GPT Store',
        content: mockContent,
      },
      {
        name: 'Best DALL·E GPTs on GPT Store',
        content: mockContent,
      },
      {
        name: 'Best Writing GPTs on GPT Store',
        content: mockContent,
      },
      {
        name: 'Best Productivity GPTs on GPT Store',
        content: mockContent,
      },
    ],
  }
}

export async function getByCategoryName(name: string, page:number) {
  return {
    data: mockContent,
  }
}

export async function getExistCategory() {
  return {
    data: [
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
    ],
  }
}

export async function getGptByID(id: string) {
  const sampleGptInfo1: GptInfo = {
    logo: logoAnimaginary,
    name: 'HIX Scholar',
    by: 'https://hix.ai',
    rate: 4.9,
    totalRate: 1000,
    tags: ['AI', 'Machine Learning', 'Natural Language Processing'],
    tools:  ['browser', 'dalle', 'python'],
    content: [
      {
        name: 'Introduction to AI Humanizer Pro',
        description:
          'AI Humanizer Pro is a cutting-edge AI-powered tool that leverages advanced GPT technology to help users create content that appears 100% human-generated. By utilizing this sophisticated bot, you can effectively humanize your AI-generated text, ensuring it bypasses even the most stringent AI detection systems on the market.',
      },
      {
        name: 'GPT Description',
        description: 'Best AI humanizer to help you get 100% human score. Humanize your AI-generated content maintaining content meaning and quality intact. FREE credits & Multiple languages support available.',
      },
    ],
    promptStarter: [
      'Can you explain this Math concept?',
      'How do I approach this Science problem?',
      "I'm stuck on this equation, any hints?",
      "Are there any studies on the benefits of a plant-based diet?",
    ],
    faq: [
      {
        question: 'What is GPT?',
        answer:
          'GPT stands for Generative Pre-trained Transformer, a type of AI language model developed by OpenAI.',
      },
      {
        question: 'How can I use GPT?',
        answer:
          'You can use GPT for various applications including text generation, language translation, and more.',
      },
    ],
    more: mockContent,
    alter: mockContent,
    information: {
      builder: '1234567890',
      category: 'research',
      chat: 10005,
      crawled: ' 5 hours ago',
      hunted: '2024-01-23',
      updated: '2024-06-10',
    },
    rank: 1,
    toUrl: 'https://chatgpt.com/g/g-IB8AqYkU2-guiding-mentor-with-quick-tools?utm_source=gptshunter.com',
  }

  const sampleGptInfo: GptInfo = {
    logo: logoOpenShuttle,
    name: 'AI Humanizer Pro',
    by: 'CHRISTINA MCKENNA',
    rate: 4.5,
    totalRate: 1000,
    tags: ['AI', 'Machine Learning', 'Natural Language Processing'],
    tools:  ['browser', 'dalle', 'python'],
    content: [
      {
        name: 'Introduction to AI Humanizer Pro',
        description:
          'AI Humanizer Pro is a cutting-edge AI-powered tool that leverages advanced GPT technology to help users create content that appears 100% human-generated. By utilizing this sophisticated bot, you can effectively humanize your AI-generated text, ensuring it bypasses even the most stringent AI detection systems on the market.',
      },
      {
        name: 'GPT Description',
        description: 'Best AI humanizer to help you get 100% human score. Humanize your AI-generated content maintaining content meaning and quality intact. FREE credits & Multiple languages support available.',
      },
    ],
    promptStarter: [
      'Can you explain this Math concept?',
      'How do I approach this Science problem?',
      "I'm stuck on this equation, any hints?",
      "Are there any studies on the benefits of a plant-based diet?",
    ],
    faq: [
      {
        question: 'What is GPT?',
        answer:
          'GPT stands for Generative Pre-trained Transformer, a type of AI language model developed by OpenAI.',
      },
      {
        question: 'How can I use GPT?',
        answer:
          'You can use GPT for various applications including text generation, language translation, and more.',
      },
    ],
    more: mockContent,
    alter: mockContent,
    information: {
      builder: '1234567890',
      category: 'research',
      chat: 10005,
      crawled: ' 5 hours ago',
      hunted: '2024-01-23',
      updated: '2024-06-10',
    },
    rank: 1,
    toUrl: 'https://chatgpt.com/g/g-IB8AqYkU2-guiding-mentor-with-quick-tools?utm_source=gptshunter.com',
  }
  if(id=='1'){
    return { data: sampleGptInfo1 }
  }

  return { data: sampleGptInfo }
}


export async function getSearchKeyword(key: string){
  const sampleData:{ [key: string]: string[] } = {
    'apple': ['applepie', 'applecider', 'applestore', 'applewatch'],
    'banana': ['bananabread', 'bananasmoothie', 'bananasplit', 'bananapudding'],
    'car': ['carinsurance', 'carrental', 'carwash', 'carrepair'],
    'default': ['search1', 'search2', 'search3', 'search4', 'search5']
  };

  return { data: sampleData[key] || sampleData['default'] };
}


export async function getBySearchQuery(query: string, page: number) {
  return {
    data: mockContent,
  }
}