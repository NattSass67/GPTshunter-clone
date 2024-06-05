import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Container } from '@/components/Container'
import { SubmitSimple } from '@/components/Submit'


export default async function Submit() {
  let articles = await getAllArticles()

  return (
    <Container className="mt-9">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="mb-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Submit GPTs
            </h1>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
              Submit your GPTs here
            </p>
          </div>
          <a
            href="https://gapier.com/?utm_source=gptshunter"
            className="mb-4 hidden text-orange-500 hover:text-orange-600 md:flex"
          >
            The true uniqueness of GPT applications lies in the use of Actions,
            try gapier. ↗
          </a>
          <SubmitSimple />
        </div>
      </div>
    </Container>
  )
}
