import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

import iconProgram from"@/images/program.png"
const mock = [
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

export default function Speaking() {
  const cardList = mock.map((object) => (
    <Card
      as="div"
      key={object.name}
      className={`w-1/2 flex-none p-4 hover:bg-zinc-50 lg:w-1/3 border-l-4 border-white hover:border-l-zinc-200`}
    >
      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {object.name}
      </h2>
      <Card.Description>{object.count}</Card.Description>
    </Card>
  ))

  return (
    <SimpleLayout
      title="GPT Store Categories"
      intro="Explore GPT Store's Categories"
    >
      <p className="text-xl font-semibold mb-2 text-zinc-800">All GPT Categories</p>
      <div className="w-full flex flex-row flex-wrap">
        {cardList}
      </div>
    </SimpleLayout>
  )
}
