'use client'
import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { Container } from '@/components/Container'
import { SubmitSimple } from '@/components/Submit'
import { useRouter } from 'next/navigation'

export default function Submit() {
  const router = useRouter();

  return (
    <Container className="mt-32">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="mb-6">
            <h2 className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              Submit GPTs
            </h2>
            <div onClick={()=>{router.push("https://gapier.com/?utm_source=gptshunter")}} className="mx-auto my-4 max-w-xl text-center text-lg leading-8 text-teal-500 hover:text-zinc-700">
              The true uniqueness of GPT applications lies in the use of
              Actions, try gapier. ↗
            </div>
          </div>
          <SubmitSimple />
        </div>
      </div>
    </Container>
  )
}
