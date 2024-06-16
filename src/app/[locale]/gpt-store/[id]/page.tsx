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
import { capitalizeFirstLetter } from '@/service/format'
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

function Stats(props: { rate: number; rank: number; total: number }) {
  return (
    <div className="overflow-hidden rounded-2xl text-center">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 gap-x-1 sm:grid-cols-3">
          <div className="bg-zinc-50 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 dark:bg-zinc-800/50">
            <p className="text-sm font-medium leading-6 text-zinc-600 dark:text-zinc-400">
              Rating
            </p>
            <p className="mt-2 flex items-center justify-center gap-x-2 text-zinc-800 dark:text-zinc-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-center text-2xl font-semibold tracking-tight sm:text-4xl">
                {props.rate}
              </span>
            </p>
          </div>
          <div className="bg-zinc-50 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 dark:bg-zinc-800/50">
            <p className="text-sm font-medium leading-6 text-zinc-600 dark:text-zinc-400">
              Reviews
            </p>
            <p className="mt-2 flex items-baseline justify-center gap-x-2">
              <span className="text-2xl font-semibold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-200">
                {props.total}
              </span>
            </p>
          </div>
          <div className="bg-zinc-50 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 dark:bg-zinc-800/50">
            <p className="text-sm font-medium leading-6 text-zinc-600 dark:text-zinc-400">
              Ranking
            </p>
            <p className="mt-2 flex items-baseline justify-center gap-x-2">
              <span className="text-2xl font-semibold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-200">
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
      className=" flex-none rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800/50 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200"
    >
      <p className="text-center text-[14px]">{object}</p>
    </a>
  ))

  const tools = info?.tools?.map((object, index) => (
    <div
      key={index}
      className="flex-none rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-400"
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
                    <p className="mb-2 mt-2 flex items-center gap-x-1 text-lg sm:text-xl">
                      {t('by')} {info?.by}
                    </p>
                  </a>
                </div>
                <p className="mb-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
                  {info?.description}
                </p>
                <div className="mb-8 grid max-w-96 grid-cols-2 gap-x-2 text-sm sm:text-base">
                  <a href={info?.toUrl} className="">
                    <p className="rounded-lg bg-zinc-800 p-4 text-center text-zinc-100 hover:bg-zinc-900 dark:bg-zinc-800/50 dark:hover:bg-zinc-800">
                      {t('use')} {t('on')} ChatGPT
                    </p>
                  </a>
                  <a href={info?.toUrl} className="">
                    <p className="flex items-center justify-center gap-x-1 rounded-lg  p-4 text-center text-zinc-800 shadow hover:bg-zinc-50 dark:bg-zinc-800/50 dark:text-zinc-100 dark:hover:bg-zinc-800">
                      <Image
                        src={logoApply}
                        alt=""
                        className="h-5 w-5"
                        unoptimized
                      />
                      Creator Profile
                    </p>
                  </a>
                </div>

                <div className="my-8 flex max-w-2xl flex-col text-sm leading-7 sm:text-base lg:max-w-none ">
                  <hr className="mb-8 border-zinc-300 dark:border-zinc-300/50" />
                  <div className="mb-2 w-full px-4 sm:px-16">
                    <p className="text-center text-xl font-semibold text-zinc-800 sm:text-2xl dark:text-zinc-200">
                      GPT Conversation Trend
                    </p>
                    {info && <MyChart data={info.trend} />}
                  </div>
                  <Stats
                    rank={info?.rank as number}
                    rate={info?.rate as number}
                    total={info?.totalRate as number}
                  />
                  <hr className="my-8 border-zinc-300 dark:border-zinc-300/50" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="h-full rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800/50">
                      <p className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                        Introduction to {info?.name}
                      </p>
                      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                        {info?.introduction}
                      </p>
                    </div>
                    <div className="h-full rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800/50">
                      <p className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                        GPT Prompt Starters
                      </p>
                      {promptStart}
                    </div>
                    <div className="h-full rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800/50">
                      <p className="text-2xl font-semibold">
                        {info?.name} FAQs
                      </p>
                      {faqs}
                    </div>
                    <div className="flex flex-col h-full rounded-2xl bg-zinc-50 p-8 dark:bg-zinc-800/50">
                      <p className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
                        GPT Information
                      </p>
                      {info && (
                        <div className="grid grid-cols-1 gap-x-4 ">
                          <p className="w-48 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                            • Hunted: {info?.information.hunted}
                          </p>
                          <p className="w-48 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                            • Updated: {info?.information.updated}
                          </p>
                          <p className="w-48 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                            • Crawled: {info?.information.crawled}
                          </p>
                          <p className="flex w-48 gap-x-1 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                            • Category:{' '}
                            <a
                              href={
                                '/' +
                                locale +
                                '/categories/' +
                                capitalizeFirstLetter(
                                  info?.information.category,
                                ) +
                                '?page=1'
                              }
                              className="flex items-center gap-x-1 hover:opacity-75"
                            >
                              {capitalizeFirstLetter(
                                info?.information.category,
                              )}{' '}
                              <Image
                                src={logoApply}
                                alt=""
                                className="h-5 w-5"
                                unoptimized
                              />
                            </a>
                          </p>
                          <p className="w-48 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                            {' '}
                            • Chats:{' '}
                            {info?.information.chat
                              ? Math.floor(info?.information.chat / 1000)
                              : 0}
                            K+
                          </p>
                          <a
                            href={'/' + locale + '/profile/' + info?.userId}
                            className="w-48 text-sm text-zinc-600 hover:text-zinc-500 sm:text-base dark:text-zinc-400"
                          >
                            <p className=""> • Builder Profile</p>
                          </a>
                        </div>
                      )}
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
            <div className="no-scrollbar mx-0 mt-2 flex flex-row gap-2 overflow-x-auto sm:flex-wrap sm:overflow-hidden">
              {tags}
            </div>
            <p className="mt-4 text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
              Tools
            </p>
            <div className="no-scrollbar mx-0 mt-2 flex flex-row gap-2 overflow-x-auto sm:flex-wrap sm:overflow-hidden">
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
