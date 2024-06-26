import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { GptInfo } from '@/types/gpt'

const mockContentTH = [
  {
    id: '1f',
    name: 'Planetaria',
    description:
      'สร้างเทคโนโลยีเพื่อเสริมพลังให้กับพลเรือนในการสำรวจอวกาศในแบบของพวกเขาเอง',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1daf',
    name: 'Animaginary',
    description:
      'ไลบรารีแอนิเมชันเว็บประสิทธิภาพสูง เขียนด้วยมือใน WASM ที่ได้รับการปรับให้เหมาะสม',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1f',
    name: 'HelioStream',
    description:
      'ไลบรารีการสตรีมวิดีโอแบบเรียลไทม์ ที่ปรับให้เหมาะสมสำหรับการส่งผ่านระหว่างดวงดาว',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '18',
    name: 'cosmOS',
    description: 'ระบบปฏิบัติการที่ใช้ในยานอวกาศของ Planetaria',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1',
    name: 'OpenShuttle',
    description:
      'โครงร่างสำหรับจรวดลำแรกที่ผมออกแบบและประสบความสำเร็จในการเข้าสู่วงโคจร',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '18',
    name: 'Planetaria',
    description:
      'สร้างเทคโนโลยีเพื่อเสริมพลังให้กับพลเรือนในการสำรวจอวกาศในแบบของพวกเขาเอง',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '14655',
    name: 'Animaginary',
    description:
      'ไลบรารีแอนิเมชันเว็บประสิทธิภาพสูง เขียนด้วยมือใน WASM ที่ได้รับการปรับให้เหมาะสม',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1',
    name: 'HelioStream',
    description:
      'ไลบรารีการสตรีมวิดีโอแบบเรียลไทม์ ที่ปรับให้เหมาะสมสำหรับการส่งผ่านระหว่างดวงดาว',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '135',
    name: 'cosmOS',
    description: 'ระบบปฏิบัติการที่ใช้ในยานอวกาศของ Planetaria',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1ng',
    name: 'OpenShuttle',
    description:
      'โครงร่างสำหรับจรวดลำแรกที่ผมออกแบบและประสบความสำเร็จในการเข้าสู่วงโคจร',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '286',
    name: 'cosmOS',
    description: 'ระบบปฏิบัติการที่ใช้ในยานอวกาศของ Planetaria',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3,
  },
  {
    id: '1000',
    name: 'OpenShuttle',
    description:
      'โครงร่างสำหรับจรวดลำแรกที่ผมออกแบบและประสบความสำเร็จในการเข้าสู่วงโคจร',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3,
  },
]

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
    name: 'Prompt Builder',
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
    name: 'AutoHotkey Script Assistant',
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
  introduction:
    'AI Humanizer Pro is a cutting-edge AI-powered tool that leverages advanced GPT technology to help users create content that appears 100% human-generated. By utilizing this sophisticated bot, you can effectively humanize your AI-generated text, ensuring it bypasses even the most stringent AI detection systems on the market.',
  description:
    'Best AI humanizer to help you get 100% human score. Humanize your AI-generated content maintaining content meaning and quality intact. FREE credits & Multiple languages support available.',
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
  trend: [
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
  ],
}

const sampleGptInfo: GptInfo = {
  userId: '82347777789asdf',
  logo: logoOpenShuttle,
  name: 'AI Humanizer Pro',
  by: 'CHRISTINA MCKENNA',
  rate: 4.5,
  totalRate: 1000,
  tags: [
    'Deep Learning',
    'Neural Networks',
    'AI Ethics',
    'Data Science',
    'Computer Vision',
    'Reinforcement Learning',
    'Text Mining',
    'Speech Recognition',
    'Language Models',
    'Transfer Learning',
  ],
  tools: ['browser', 'dalle', 'python'],
  introduction:
    'AI Humanizer Pro is a cutting-edge AI-powered tool that leverages advanced GPT technology to help users create content that appears 100% human-generated. By utilizing this sophisticated bot, you can effectively humanize your AI-generated text, ensuring it bypasses even the most stringent AI detection systems on the market.',
  description:
    'Best AI humanizer to help you get 100% human score. Humanize your AI-generated content maintaining content meaning and quality intact. FREE credits & Multiple languages support available.',
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
  trend: [
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
  ],
}

const sampleGptInfoTH: GptInfo = {
  userId: '82347777789asdf',
  logo: logoOpenShuttle,
  name: 'AI Humanizer Pro',
  by: 'CHRISTINA MCKENNA',
  rate: 4.5,
  totalRate: 1000,
  tags: [
    'Deep Learning',
    'Neural Networks',
    'AI Ethics',
    'Data Science',
    'Computer Vision',
    'Reinforcement Learning',
    'Text Mining',
    'Speech Recognition',
    'Language Models',
    'Transfer Learning',
  ],
  tools: ['browser', 'dalle', 'python'],
  introduction:
    'AI Humanizer Pro เป็นเครื่องมือที่ขับเคลื่อนด้วย AI ขั้นสูงที่ใช้เทคโนโลยี GPT ที่ทันสมัยเพื่อช่วยให้ผู้ใช้สร้างเนื้อหาที่ดูเหมือนถูกสร้างโดยมนุษย์ 100% โดยการใช้บอทที่ซับซ้อนนี้ คุณสามารถทำให้ข้อความที่สร้างโดย AI ของคุณดูเหมือนมนุษย์จริง ๆ และผ่านระบบตรวจจับ AI ที่เข้มงวดที่สุดในตลาด',
  description:
    'ตัวช่วยปรับข้อความ AI ให้เหมือนมนุษย์ที่ดีที่สุด ช่วยให้คุณได้คะแนนความเป็นมนุษย์ 100% ทำให้เนื้อหาที่สร้างโดย AI ของคุณมีความหมายและคุณภาพคงเดิม เครดิตฟรีและการรองรับหลายภาษา',
  promptStarter: [
    'คุณสามารถอธิบายแนวคิดคณิตศาสตร์นี้ได้ไหม?',
    'ฉันควรแก้ปัญหาวิทยาศาสตร์นี้อย่างไร?',
    'ฉันติดอยู่กับสมการนี้ มีคำแนะนำไหม?',
    'มีการศึกษาเกี่ยวกับประโยชน์ของอาหารที่เป็นพืชเป็นหลักบ้างไหม?',
  ],
  faq: [
    {
      question: 'GPT คืออะไร?',
      answer:
        'GPT ย่อมาจาก Generative Pre-trained Transformer เป็นแบบจำลองภาษา AI ที่พัฒนาโดย OpenAI',
    },
    {
      question: 'ฉันสามารถใช้ GPT อย่างไรได้บ้าง?',
      answer:
        'คุณสามารถใช้ GPT ในการใช้งานต่าง ๆ รวมถึงการสร้างข้อความ การแปลภาษา และอื่น ๆ',
    },
  ],
  more: mockContentTH,
  alter: mockContentTH,
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
  trend: [
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
  ],
}

const sampleGptInfoTH1: GptInfo = {
  userId: '123456789asdf',
  logo: logoAnimaginary,
  name: 'HIX Scholar',
  by: 'https://hix.ai',
  rate: 4.9,
  totalRate: 1000,
  tags: ['AI', 'Machine Learning', 'Natural Language Processing'],
  tools: ['browser', 'dalle', 'python'],
  introduction:
    'AI Humanizer Pro เป็นเครื่องมือที่ขับเคลื่อนด้วย AI ขั้นสูงที่ใช้เทคโนโลยี GPT ที่ทันสมัยเพื่อช่วยให้ผู้ใช้สร้างเนื้อหาที่ดูเหมือนถูกสร้างโดยมนุษย์ 100% โดยการใช้บอทที่ซับซ้อนนี้ คุณสามารถทำให้ข้อความที่สร้างโดย AI ของคุณดูเหมือนมนุษย์จริง ๆ และผ่านระบบตรวจจับ AI ที่เข้มงวดที่สุดในตลาด',
  description:
    'ตัวช่วยปรับข้อความ AI ให้เหมือนมนุษย์ที่ดีที่สุด ช่วยให้คุณได้คะแนนความเป็นมนุษย์ 100% ทำให้เนื้อหาที่สร้างโดย AI ของคุณมีความหมายและคุณภาพคงเดิม เครดิตฟรีและการรองรับหลายภาษา',
  promptStarter: [
    'คุณสามารถอธิบายแนวคิดคณิตศาสตร์นี้ได้ไหม?',
    'ฉันควรแก้ปัญหาวิทยาศาสตร์นี้อย่างไร?',
    'ฉันติดอยู่กับสมการนี้ มีคำแนะนำไหม?',
    'มีการศึกษาเกี่ยวกับประโยชน์ของอาหารที่เป็นพืชเป็นหลักบ้างไหม?',
  ],
  faq: [
    {
      question: 'GPT คืออะไร?',
      answer:
        'GPT ย่อมาจาก Generative Pre-trained Transformer เป็นแบบจำลองภาษา AI ที่พัฒนาโดย OpenAI',
    },
    {
      question: 'ฉันสามารถใช้ GPT อย่างไรได้บ้าง?',
      answer:
        'คุณสามารถใช้ GPT ในการใช้งานต่าง ๆ รวมถึงการสร้างข้อความ การแปลภาษา และอื่น ๆ',
    },
  ],
  more: mockContentTH,
  alter: mockContentTH,
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
  trend: [
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
    { value: 18, date: '2023-01-15' },
    { value: 17, date: '2023-02-20' },
    { value: 16, date: '2023-03-05' },
    { value: 18, date: '2023-04-10' },
    { value: 12, date: '2023-05-25' },
    { value: 9, date: '2023-06-30' },
    { value: 10, date: '2023-07-14' },
    { value: 28, date: '2023-08-18' },
    { value: 50, date: '2023-09-22' },
    { value: 19, date: '2023-10-29' },
  ],
}

export {
  mockContent,
  sampleGptInfo,
  sampleGptInfo1,
  mockContentTH,
  sampleGptInfoTH,
  sampleGptInfoTH1,
}
