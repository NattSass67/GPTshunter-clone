/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Carousel } from '@/components/Carousel'
import { Container } from '@/components/Container'
import { Loader } from '@/components/Loader'
import { loadStoreInfoPage } from '@/session/manager'
import { useAppDispatch, useAppSelector } from '@/session/store'
import { CardBanner } from '@/types/category'
import logoApply from '@/images/logos/apply.svg'
import { MyChart } from '@/components/Chart'
import { useAppRoute } from '@/service/custom'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

function Stats(props: { rate: number; rank: number }) {
  return (
    <div className="rounded-lg text-center shadow dark:bg-zinc-800/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
          <div className="rounded-lg px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-zinc-600 dark:text-zinc-400">
              GPT Store Rating
            </p>
            <p className="mt-2 flex items-baseline justify-center gap-x-2">
              <span className="text-center text-4xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-200">
                {props.rate}
              </span>
            </p>
          </div>
          <div className="rounded-lg px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-zinc-600 dark:text-zinc-400">
              GPT Store Ranking
            </p>
            <p className="mt-2 flex items-baseline justify-center gap-x-2">
              <span className="text-4xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-200">
                #{props.rank}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Store(props: { params: { id: string } }) {
  const router = useAppRoute()
  const locale = router.locale
  const t = useTranslations('Info')
  const loading = useAppSelector((state) => state.storeSession.loading)
  const info = useAppSelector((state) => state.storeSession.info)
  const dispatch = useAppDispatch()
  const { id } = props.params

  useEffect(() => {
    dispatch(loadStoreInfoPage(id, locale))
  }, [])

  const content = info?.content.map((object, index) => (
    <div key={index} className="mb-8">
      <p className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
        {object.name}
      </p>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        {object.description}
      </p>
      <hr className="mt-8 border-zinc-300 dark:border-zinc-300/50" />
    </div>
  ))

  const promptStart = info?.promptStarter.map((object, index) => (
    <p className="text-zinc-600 dark:text-zinc-400" key={index}>
      • {object}
    </p>
  ))

  const faqs = info?.faq.map((object, index) => (
    <Disclosure as="div" key={index} className="pt-6">
      {({ open }) => (
        <>
          <dt>
            <DisclosureButton className="flex w-full items-start justify-between text-left text-zinc-800 hover:bg-zinc-50 dark:text-zinc-200 dark:hover:bg-zinc-800/50">
              <span className="text-base font-semibold leading-7">
                {object.question}
              </span>
              <span className="ml-6 flex h-7 items-center">
                {open ? (
                  <MinusIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <PlusIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as="dd" className="mt-2 pr-12">
            <p className="text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-400">
              {object.answer}
            </p>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  ))

  const tags = info?.tags.map((object, index) => (
    <a
      key={index}
      href={'/' + locale + '/tags/' + object + '?page=1'}
      className="flex-none rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-800 hover:bg-zinc-200 dark:bg-inherit dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
    >
      <p className="text-center text-[14px]">{object}</p>
    </a>
  ))

  const tools = info?.tools?.map((object, index) => (
    <div
      key={index}
      className="flex-none rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-800 dark:bg-inherit dark:text-zinc-400"
    >
      <p className="text-center text-[14px]">{object}</p>
    </div>
  ))

  return (
    <>
      <Transition
        show={!loading}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Container className="pt-32">
          <div className="">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <Image
                  src={info?.logo}
                  alt=""
                  className="h-16 w-16 rounded-full"
                />
                <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-200">
                  {info?.name}
                </h1>
                <div className="flex">
                  <a
                    href={'/' + locale + '/profile/' + info?.userId}
                    className="flex text-zinc-800 hover:text-zinc-400 dark:text-zinc-200"
                  >
                    <p className="mb-4 mt-2 flex items-center gap-x-1 text-sm sm:text-base">
                      <Image
                        src={logoApply}
                        alt=""
                        className="h-5 w-5"
                        unoptimized
                      />
                      {t('by')} {info?.by}
                    </p>
                  </a>
                </div>

                <hr className="border-zinc-300 dark:border-zinc-300/50" />
                <div className="my-10 grid max-w-2xl grid-cols-1 lg:gap-8 text-sm leading-7 sm:text-base lg:max-w-none lg:grid-cols-5">
                  <div className="col-span-3">
                    {content}
                    <div className="mb-8">
                      <p className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                        GPT Prompt Starters
                      </p>
                      {promptStart}
                      <hr className="mt-8 border-zinc-300 dark:border-zinc-300/50" />
                    </div>
                    <div className="mb-8">
                      <p className="text-2xl font-semibold">
                        {info?.name} FAQs
                      </p>
                      {faqs}
                      <hr className="mt-8 border-zinc-300 dark:border-zinc-300/50" />
                    </div>
                    <div className="grid grid-cols-2 gap-y-2">
                      <p className="col-span-2 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                        {' '}
                        GPT Information
                      </p>
                      <p className="text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                        {' '}
                        • Hunted: {info?.information.hunted}
                      </p>
                      <p className="text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                        {' '}
                        • Updated: {info?.information.updated}
                      </p>
                      <p className="text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                        {' '}
                        • Crawled: {info?.information.crawled}
                      </p>
                      <p className="text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                        {' '}
                        • Category: {info?.information.category}
                      </p>
                      <p className="text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                        {' '}
                        • Chats:{' '}
                        {info?.information.chat
                          ? Math.floor(info?.information.chat / 1000)
                          : 0}
                        K+
                      </p>
                      <a
                        href={'/' + locale + '/profile/' + info?.userId}
                        className="text-sm text-zinc-600 hover:text-zinc-500 sm:text-base dark:text-zinc-400"
                      >
                        <p className=""> • Builder Profile</p>
                      </a>
                      <a href={info?.toUrl} className="col-span-2">
                        <p className="font semibold mt-6 w-full rounded-lg bg-zinc-800 p-4 text-center text-zinc-100 hover:bg-zinc-900 dark:bg-zinc-800/50 dark:hover:bg-zinc-800">
                          {t('use')} {info?.name} {t('on')} ChatGPT
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex w-full flex-col gap-y-4 mt-4 lg:mt-0">
                    <div className="flex flex-col gap-y-4 lg:sticky lg:top-28">
                      <div className="rounded-lg p-6 shadow dark:bg-zinc-800/50 w-full">
                        <p className="col-span-2 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                          GPT Conversation Trend
                        </p>
                        {info && <MyChart data={info.trend} />}
                      </div>
                      <Stats
                        rank={info?.rank as number}
                        rate={info?.rate as number}
                      />
                    </div>
                  </div>
                </div>
                <hr className="mt-8 border-zinc-300 dark:border-zinc-300/50" />
              </div>
            </div>
          </div>
          <div className="w-full py-8">
            <p className="mt-4 text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
              Tags
            </p>
            <div className="no-scrollbar mx-0 mt-2 flex flex-row gap-x-2 overflow-x-auto">
              {tags}
            </div>
            <p className="mt-4 text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
              Tools
            </p>
            <div className="no-scrollbar mx-0 mt-2 flex flex-row gap-x-2 overflow-x-auto">
              {tools}
            </div>
            <Carousel
              content={info?.more as CardBanner[]}
              title={`${t('more')} ${info?.by}`}
              isLoading={false}
            />
            <Carousel
              content={info?.alter as CardBanner[]}
              title={`${t('alternative')} ${info?.name}`}
              isLoading={false}
            />
          </div>
        </Container>
      </Transition>
      {loading && (
        <Container className="pt-48">
          <Loader />
        </Container>
      )}
    </>
  )
}
