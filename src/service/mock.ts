import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { GptInfo } from '@/types/gpt'

const mockContent = [
  {
    id: '1f',
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1daf',
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1f',
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '18',
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1',
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '18',
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '14655',
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1',
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '135',
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1ng',
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '286',
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1000',
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3,
  },
]

const sampleGptInfo1: GptInfo = {
  userId: '123456789asdf',
  logo: logoAnimaginary,
  name: 'HIX Scholar',
  by: 'https://hix.ai',
  rate: 4.9,
  totalRate: 1000,
  tags: ['AI', 'Machine Learning', 'Natural Language Processing'],
  tools: ['browser', 'dalle', 'python'],
  content: [
    {
      name: 'Introduction to AI Humanizer Pro',
      description:
        'AI Humanizer Pro is a cutting-edge AI-powered tool that leverages advanced GPT technology to help users create content that appears 100% human-generated. By utilizing this sophisticated bot, you can effectively humanize your AI-generated text, ensuring it bypasses even the most stringent AI detection systems on the market.',
    },
    {
      name: 'GPT Description',
      description:
        'Best AI humanizer to help you get 100% human score. Humanize your AI-generated content maintaining content meaning and quality intact. FREE credits & Multiple languages support available.',
    },
  ],
  promptStarter: [
    'Can you explain this Math concept?',
    'How do I approach this Science problem?',
    "I'm stuck on this equation, any hints?",
    'Are there any studies on the benefits of a plant-based diet?',
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
  toUrl:
    'https://chatgpt.com/g/g-IB8AqYkU2-guiding-mentor-with-quick-tools?utm_source=gptshunter.com',
}

const sampleGptInfo: GptInfo = {
  userId: '82347777789asdf',
  logo: logoOpenShuttle,
  name: 'AI Humanizer Pro',
  by: 'CHRISTINA MCKENNA',
  rate: 4.5,
  totalRate: 1000,
  tags: ['AI', 'Machine Learning', 'Natural Language Processing'],
  tools: ['browser', 'dalle', 'python'],
  content: [
    {
      name: 'Introduction to AI Humanizer Pro',
      description:
        'AI Humanizer Pro is a cutting-edge AI-powered tool that leverages advanced GPT technology to help users create content that appears 100% human-generated. By utilizing this sophisticated bot, you can effectively humanize your AI-generated text, ensuring it bypasses even the most stringent AI detection systems on the market.',
    },
    {
      name: 'GPT Description',
      description:
        'Best AI humanizer to help you get 100% human score. Humanize your AI-generated content maintaining content meaning and quality intact. FREE credits & Multiple languages support available.',
    },
  ],
  promptStarter: [
    'Can you explain this Math concept?',
    'How do I approach this Science problem?',
    "I'm stuck on this equation, any hints?",
    'Are there any studies on the benefits of a plant-based diet?',
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
  toUrl:
    'https://chatgpt.com/g/g-IB8AqYkU2-guiding-mentor-with-quick-tools?utm_source=gptshunter.com',
}

export { mockContent, sampleGptInfo, sampleGptInfo1 }
