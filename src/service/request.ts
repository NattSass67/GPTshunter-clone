import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStar from '@/images/logos/star.svg'
import logoComment from '@/images/logos/comment.svg'

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
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'Planetaria',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
    logo: logoPlanetaria,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
    rate: 5,
    comments: 2.3
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
    rate: 5,
    comments: 2.3
  },
]

export async function getByDefaultCategory() { //every category with content exist
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

export async function getByCategoryName(name: string) {
  return {
    data: mockContent
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
