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
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useEffect } from 'react'
import { GptTrend } from '@/types/gpt'

function Stats(props: { rate: number; rank: number }) {
  return (
    <div className="rounded-lg text-center shadow">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
          <div className="rounded-lg px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-400">
              GPT Store Rating
            </p>
            <p className="mt-2 flex items-baseline justify-center gap-x-2">
              <span className="text-center text-4xl font-semibold tracking-tight text-zinc-800">
                {props.rate}
              </span>
            </p>
          </div>
          <div className="rounded-lg px-4 py-6 sm:px-6 lg:px-8">
            <p className="text-sm font-medium leading-6 text-gray-400">
              GPT Store Ranking
            </p>
            <p className="mt-2 flex items-baseline justify-center gap-x-2">
              <span className="text-4xl font-semibold tracking-tight text-zinc-800">
                #{props.rank}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Store(props: {
  params: { locale: string; id: string }
}) {
  const loading = useAppSelector((state) => state.storeSession.loading)
  const info = useAppSelector((state) => state.storeSession.info)
  const dispatch = useAppDispatch()
  const { locale, id } = props.params

  useEffect(() => {
    dispatch(loadStoreInfoPage(id))
  }, [])

  const content = info?.content.map((object, index) => (
    <div key={index}>
      <p className="text-2xl font-semibold">{object.name}</p>
      <p className="mt-4">{object.description}</p>
    </div>
  ))

  const promptStart = info?.promptStarter.map((object, index) => (
    <p className="" key={index}>
      • {object}
    </p>
  ))

  const faqs = info?.faq.map((object, index) => (
    <Disclosure as="div" key={index} className="pt-6">
      {({ open }) => (
        <>
          <dt>
            <DisclosureButton className="flex w-full items-start justify-between text-left text-zinc-800 hover:bg-zinc-50">
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
            <p className="text-sm leading-7 text-gray-600 sm:text-base">
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
      className="flex-none rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-800 hover:bg-zinc-200"
    >
      <p className="text-center text-[14px]">{object}</p>
    </a>
  ))

  const tools = info?.tools?.map((object, index) => (
    <div
      key={index}
      className="flex-none rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-800"
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
          <div className="bg-white">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <Image
                  src={info?.logo}
                  alt=""
                  className="h-16 w-16 rounded-full"
                />
                <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                  {info?.name}
                </h1>
                <div className="flex">
                  <a
                    href={'/' + locale + '/profile/' + info?.userId}
                    className="flex hover:text-gray-400"
                  >
                    <p className="mb-4 mt-2 text-sm sm:text-base flex items-center gap-x-1">
                      <Image
                        src={logoApply}
                        alt=""
                        className="h-5 w-5"
                        unoptimized
                      />
                      By {info?.by}
                    </p>
                  </a>
                </div>

                <hr />
                <div className="my-10 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-7 text-zinc-800 sm:text-base lg:max-w-none lg:grid-cols-2">
                  {content}
                  <div>
                    <p className="text-2xl font-semibold">
                      GPT Prompt Starters
                    </p>
                    {promptStart}
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">{info?.name} FAQs</p>
                    {faqs}
                  </div>
                  <div className="grid grid-cols-2 gap-y-2">
                    <p className="col-span-2 text-2xl font-semibold">
                      {' '}
                      GPT Information
                    </p>
                    <p className="text-sm sm:text-base ">
                      {' '}
                      • Hunted: {info?.information.hunted}
                    </p>
                    <p className="text-sm sm:text-base ">
                      {' '}
                      • Updated: {info?.information.updated}
                    </p>
                    <p className="text-sm sm:text-base ">
                      {' '}
                      • Crawled: {info?.information.crawled}
                    </p>
                    <p className="text-sm sm:text-base ">
                      {' '}
                      • Category: {info?.information.category}
                    </p>
                    <p className="text-sm sm:text-base ">
                      {' '}
                      • Chats:{' '}
                      {info?.information.chat
                        ? Math.floor(info?.information.chat / 1000)
                        : 0}
                      K+
                    </p>
                    <a
                      href={'/' + locale + '/profile/' + info?.userId}
                      className="text-sm hover:text-gray-400 sm:text-base "
                    >
                      <p className=""> • Builder Profile</p>
                    </a>
                  </div>
                  <div className="flex w-full flex-col justify-end gap-y-1 ">
                    <p className="col-span-2 text-2xl font-semibold">
                      GPT Conversation Trend
                    </p>
                    <MyChart data1={info?.trend} />
                  </div>
                </div>
                <Stats
                  rank={info?.rank as number}
                  rate={info?.rate as number}
                />
                <a href={info?.toUrl}>
                  <p className="font semibold mt-4 w-full rounded-lg bg-zinc-800 p-4 text-center text-zinc-100 hover:bg-zinc-900">
                    Use {info?.name} on ChatGPT
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full py-8">
            <p className="mt-4 text-lg font-bold tracking-tight text-gray-900">
              Tags
            </p>
            <div className="no-scrollbar mx-0 mt-2 flex flex-row gap-x-2 overflow-x-auto">
              {tags}
            </div>
            <p className="mt-4 text-lg font-bold tracking-tight text-gray-900">
              Tools
            </p>
            <div className="no-scrollbar mx-0 mt-2 flex flex-row gap-x-2 overflow-x-auto">
              {tools}
            </div>
            <Carousel
              content={info?.more as CardBanner[]}
              title={`More custom GPTs by ${info?.by}`}
              isLoading={false}
            />
            <Carousel
              content={info?.alter as CardBanner[]}
              title={`Best Alternative GPTs to ${info?.by}`}
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
