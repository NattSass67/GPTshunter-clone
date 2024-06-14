'use client'

import { Container } from '@/components/Container'
import { SubmitSimple } from '@/components/Submit'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { Loader } from '@/components/Loader'
import { useTranslations } from 'next-intl'

export default function Submit() {
  const router = useRouter()

  const [initLoading, setInitLoading] = useState(true)
  const t = useTranslations('Submit')

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setInitLoading(false)
      },
      2000, // Set the delay to 1 second
    )
    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Transition
        show={!initLoading}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Container className="mt-32">
          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-full max-w-2xl">
              <div className="mb-6">
                <h2 className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-200">
                  {t('title')}
                </h2>
                <div
                  className="mx-auto my-4 max-w-2xl text-center text-base leading-8 text-zinc-400 hover:text-zinc-600"
                >
                  <a href='https://gapier.com/?utm_source=gptshunter'>{t('description')}</a>
                </div>
              </div>
              <SubmitSimple />
            </div>
          </div>
        </Container>
      </Transition>
      {initLoading && (
        <Container className="pt-48">
          <Loader />
        </Container>
      )}
    </>
  )
}
