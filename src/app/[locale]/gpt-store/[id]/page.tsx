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
import { MyChart } from '@/components/Chart'
import { useAppRoute } from '@/service/custom'
import { capitalizeFirstLetter } from '@/service/format'
import {
  UpdateIcon,
  CrosshairsIcon,
  CategoryIcon,
  ChatIcon,
  ProfileIcon,
  CrawlIcon,
  ChatGptIcon,
  ApplyIcon,
} from '@/components/Icon'
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
import { FaqDropDown } from '@/components/Button'

function Stats(props: { rate: number; rank: number; total: number }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-300/50 text-center shadow-lg dark:border-none">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-3 sm:grid-cols-3">
          <div className="bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-8 dark:bg-zinc-800/50">
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
              <span className="text-center text-xl sm:text-2xl font-semibold tracking-tight">
                {props.rate}
              </span>
            </p>
          </div>
          <div className="bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-8 dark:bg-zinc-800/50">
            <p className="text-sm font-medium leading-6 text-zinc-600 dark:text-zinc-400">
              Reviews
            </p>
            <p className="mt-2 flex items-baseline justify-center gap-x-2">
              <span className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-200">
                {props.total}
              </span>
            </p>
          </div>
          <div className="bg-white px-4 py-4 sm:px-6 sm:py-6 lg:px-8 dark:bg-zinc-800/50">
            <p className="text-sm font-medium leading-6 text-zinc-600 dark:text-zinc-400">
              Ranking
            </p>
            <p className="mt-2 flex items-baseline justify-center gap-x-2">
              <span className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-200">
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
    <div className='w-full border-zinc-300/10 mt-3' key={index}> <FaqDropDown object={object}/></div>
   
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
                <div className="">
                  <Image
                    src={info?.logo}
                    alt=""
                    className="h-16 w-16 rounded-full"
                  />
                  <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-200">
                    {info?.name}
                  </h1>
                </div>

                <hr className="mt-8 border-zinc-300 dark:border-zinc-300/20" />
                <div className="py-11 grid max-w-2xl grid-cols-1 gap-y-8 text-base leading-7 md:gap-x-4 lg:max-w-none lg:grid-cols-5">
                  <div className="col-span-3">
                    <div className="flex flex-col gap-11">
                      <div>
                        <Stats
                          rank={info?.rank as number}
                          rate={info?.rate as number}
                          total={info?.totalRate as number}
                        />
                      </div>
                      <hr className="border-zinc-300 dark:border-zinc-300/20" />
                      <div className=''>
                        <p className="mb-5 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                          Explore the creator's profile
                        </p>
                        <div className="flex w-full max-w-96 flex-col rounded-2xl border border-zinc-300/50 bg-white p-8 text-zinc-800 shadow-lg dark:border-none dark:bg-zinc-800/50 dark:text-zinc-200">
                          <div className="flex justify-center">
                            <ProfileIcon height={64} width={64} />
                          </div>
                          <p className="mb-2 mt-2 text-center text-xl font-bold">
                            {info?.by}
                          </p>
                          <a
                            href={'/' + locale + '/profile/' + info?.userId}
                            className=""
                          >
                            <p className="flex items-center justify-center gap-x-2 rounded-lg bg-zinc-800 p-4 text-zinc-100 hover:bg-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-800/50">
                              <ApplyIcon height={20} width={20} />
                              Creator Profile
                            </p>
                          </a>
                        </div>
                      </div>

                      <hr className="border-zinc-300 dark:border-zinc-300/20" />
                      <div className="">
                        <p className="mb-3 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                          Introduction to {info?.name}
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {info?.introduction}
                        </p>
                      </div>
                      <hr className="border-zinc-300 dark:border-zinc-300/20" />
                      <div className="">
                        <p className="mb-3 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                          GPT Description
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {info?.description}
                        </p>
                      </div>
                      <hr className="border-zinc-300 dark:border-zinc-300/20" />
                      <div className="flex flex-col">
                        <p className="mb-3 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                          GPT Information
                        </p>
                        <div className="mb-6 mt-2 w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-300/50 bg-white px-2 py-4 shadow-lg sm:px-4 sm:pt-6 dark:border-none dark:bg-zinc-800/50">
                          {info && <MyChart data={info.trend} />}
                        </div>
                        {info && (
                          <div className="grid grid-cols-1 gap-x-4 gap-y-3 lg:grid-cols-2 ">
                            <p className="flex items-center gap-4 text-base text-zinc-600 dark:text-zinc-400">
                              <CrosshairsIcon height={24} width={24} /> Hunted:{' '}
                              {info?.information.hunted}
                            </p>
                            <p className="flex items-center gap-4 text-base text-zinc-600 dark:text-zinc-400">
                              <UpdateIcon height={24} width={24} /> Updated:{' '}
                              {info?.information.updated}
                            </p>
                            <p className="flex items-center gap-4 text-base text-zinc-600 dark:text-zinc-400">
                              <CrawlIcon height={24} width={24} /> Crawled:{' '}
                              {info?.information.crawled}
                            </p>
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
                              className="flex items-center hover:opacity-75"
                            >
                              <p className="flex items-center gap-4 text-base text-zinc-600 dark:text-zinc-400">
                                <CategoryIcon height={24} width={24} />
                                Category:{' '}
                                {capitalizeFirstLetter(
                                  info?.information.category,
                                )}
                              </p>
                            </a>
                            <p className="flex items-center gap-4 text-base text-zinc-600 dark:text-zinc-400">
                              <ChatIcon height={24} width={24} /> Chats:{' '}
                              {info?.information.chat
                                ? Math.floor(info?.information.chat / 1000)
                                : 0}
                              K+
                            </p>
                            <a
                              href={'/' + locale + '/profile/' + info?.userId}
                              className="flex items-center gap-4 text-base text-zinc-600 hover:text-zinc-500 dark:text-zinc-400"
                            >
                              <ProfileIcon height={24} width={24} />{' '}
                              <p className=""> Creator Profile</p>
                            </a>
                          </div>
                        )}
                      </div>
                      <hr className="border-zinc-300 dark:border-zinc-300/20" />
                      <div className="">
                        <p className="mb-3 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
                          GPT Prompt Starters
                        </p>
                        {promptStart}
                      </div>
                      <hr className="border-zinc-300 dark:border-zinc-300/20" />
                      <div className="">
                        <p className="text-2xl font-semibold">
                          {info?.name} FAQs
                        </p>
                        {faqs}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 hidden flex-col gap-2 pl-4 lg:flex">
                    <div className="sticky top-28 flex flex-col gap-y-4">
                      <div className="flex w-full flex-col rounded-2xl border border-zinc-300/50 bg-white p-6 text-zinc-800 shadow-lg dark:border-none dark:bg-zinc-800/50 dark:text-zinc-200">
                        <p className="mb-2 text-center text-2xl font-semibold ">
                          {t('use')} {t('on')} ChatGPT
                        </p>
                        <a href={info?.toUrl} className="">
                          <p className="flex items-center justify-center gap-x-2 rounded-lg bg-zinc-800 p-4 text-zinc-100 hover:bg-zinc-900 dark:bg-zinc-800  dark:hover:bg-zinc-800/50">
                            <ChatGptIcon height={20} width={20} /> Continue
                          </p>
                        </a>
                      </div>
                      <a
                        href={
                          'https://docs.google.com/forms/d/e/1FAIpQLSc5wpE7xFGuwiICqSgLKVVkQN1v4hJVkzYJ59Nn1E9F3A426Q/viewform'
                        }
                        className="px-4 text-center text-zinc-800 hover:opacity-75 dark:text-zinc-200 "
                      >
                        <p className="text-sm ">
                          Become a verified curator to get priority display for
                          your GPTs ↗.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fixed bottom-0 left-0 right-0 z-20 flex h-20 w-full flex-row items-center justify-between border-t border-t-zinc-300/20 bg-white px-6 sm:px-8 lg:hidden dark:bg-zinc-900">
                  <div>
                    <p className="text-xl font-semibold">
                      {t('use')} {t('on')} ChatGPT
                    </p>
                    <a
                      href={
                        'https://docs.google.com/forms/d/e/1FAIpQLSc5wpE7xFGuwiICqSgLKVVkQN1v4hJVkzYJ59Nn1E9F3A426Q/viewform'
                      }
                      className="text-zinc-800 hover:opacity-75 dark:text-zinc-200 "
                    >
                      <p className="text-sm">Become a verified curator ↗</p>
                    </a>
                  </div>

                  <a href={info?.toUrl} className="">
                    <p className="flex items-center justify-center gap-x-2 rounded-lg bg-zinc-800 p-4 text-zinc-100 hover:bg-zinc-900 dark:bg-zinc-800  dark:hover:bg-zinc-800/50">
                      <ChatGptIcon height={20} width={20} /> Continue
                    </p>
                  </a>
                </div>
                <hr className="border-zinc-300 dark:border-zinc-300/20" />
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="mt-16 text-center text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-200">
              More GPTs
            </h1>
            <p className="mt-2 text-center text-lg text-zinc-500">
              {t('more')} {info?.by}
            </p>
            <Carousel
              content={info?.more as CardBanner[]}
              title={``}
              isLoading={false}
            />
            <hr className="border-zinc-300 dark:border-zinc-300/20" />
            <h1 className="mt-16 text-center text-3xl font-bold  tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-200">
              Alternative GPTs
            </h1>
            <p className="mt-2 text-center text-lg text-zinc-500">
              {t('alternative')} {info?.name}
            </p>
            <Carousel
              content={info?.alter as CardBanner[]}
              title={``}
              isLoading={false}
            />
            <hr className="border-zinc-300 dark:border-zinc-300/20 mb-11" />
            <p className="mb-3 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
              Tags
            </p>
            <div className="mb-11 no-scrollbar mx-0 flex flex-row gap-2 overflow-x-auto sm:flex-wrap sm:overflow-hidden">
              {tags}
            </div>
            <p className="mb-3 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
              Tools
            </p>
            <div className="no-scrollbar mx-0 flex flex-row gap-2 overflow-x-auto sm:flex-wrap sm:overflow-hidden">
              {tools}
            </div>
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
