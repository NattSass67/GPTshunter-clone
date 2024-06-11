/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Carousel } from '@/components/Carousel'
import { FilterSelect } from '@/components/Button'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { useAppDispatch, useAppSelector } from '@/session/store'
import { fetchContent } from '@/session/my-state'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import logoSubmit from '@/images/logos/submit.svg'
import logoApply from '@/images/logos/apply.svg'
import logoAdd from '@/images/logos/add.svg'
import { SearchBar } from '@/components/Button'

import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

import { Transition } from '@headlessui/react'
import { useState } from 'react'
import { Loader } from '@/components/Loader'
import { useRouter, usePathname } from 'next/navigation'
import { CardBanner } from '@/types/category'
import { HomeCarousel } from '@/types/home'

export default function Home() {
  const local = usePathname().split('/')[1]

  const t = useTranslations('Home')

  const dispatch = useAppDispatch()
  const loading = useAppSelector((state) => state.homeSession.loading)
  const secondaryLoading = useAppSelector(
    (state) => state.homeSession.secondaryLoading,
  )
  const selectedFilter = useAppSelector(
    (state) => state.homeSession.filterChoosen,
  )
  const selectedFilterContent: CardBanner[] | null = useAppSelector(
    (state) => state.homeSession.filteredContent,
  )
  const categories: HomeCarousel[] = useAppSelector(
    (state) => state.homeSession.homeCategory,
  )

  const carouselList = categories.map((object, index) => (
    <Carousel
      key={index}
      title={object.name}
      content={object.content}
      isLoading={false}
    />
  ))

  useEffect(() => {
    dispatch(fetchContent())
  }, [])
  //------------------loadingPage
  const [initLoading, setInitLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitLoading(false)
    }, 200) // Set the delay to 1 second

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [])

  if (initLoading) {
    return (
      <>
        <Container className="pt-48">
          <Loader />
        </Container>
      </>
    )
  }

  return (
    <>
      <Transition
        show={!loading}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Container className="pt-32">
          <div className="flex w-full flex-wrap justify-center gap-x-2">
            <div className="mb-4 flex w-full flex-col">
              <h1 className="inline-block text-center text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {t('title')}
              </h1>
              <SearchBar />
              <div className="flex justify-center">
                <div className="flex flex-col px-4 text-sm text-zinc-600 sm:text-base">
                  <a
                    href={'/' + local + '/submit'}
                    className="flex items-center gap-x-2 hover:text-zinc-500"
                  >
                    <Image
                      src={logoSubmit}
                      alt=""
                      className="h-5 w-5"
                      unoptimized
                    />
                    {t('submit')}
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScVIeiFq4TBx3R-rkR0oOaatZdJ3rKxNC1t9Qr9oXUmeCh8JQ/viewform"
                    className="flex items-center gap-x-2 hover:text-zinc-500"
                  >
                    <Image
                      src={logoApply}
                      alt=""
                      className="h-5 w-5"
                      unoptimized
                    />
                    {t('apply')}
                  </a>
                  <a
                    href="https://www.webpilot.ai/post-gpts/"
                    className="flex items-center gap-x-2 hover:text-zinc-500"
                  >
                    <Image
                      src={logoAdd}
                      alt=""
                      className="h-5 w-5"
                      unoptimized
                    />
                    {t('pilot')}
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="mx-auto mt-2 flex max-w-xs flex-col">
              <img
                alt="GPTs Hunter - Share and discover custom GPTs | Product Hunt"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=424020&amp;theme=light"
                className="z-0 mb-4 h-auto w-auto"
              />
              <dd className="text-center text-3xl font-semibold tracking-tight text-zinc-800 sm:text-5xl">
                678K+
              </dd>
              <dt className="text-center text-sm leading-7 text-zinc-500 sm:text-base">
                {t('count')}
              </dt>
            </div> */}
          </div>
          <div className="mt-16 w-full border-t">
            <FilterSelect />
            <Carousel
              content={selectedFilterContent}
              title={selectedFilter}
              isLoading={secondaryLoading}
            />
            <br></br>
            <hr></hr>
            {carouselList}
          </div>
        </Container>
        {/* <Photos /> */}
      </Transition>
      {loading && (
        <Container className="pt-48">
          <Loader />
        </Container>
      )}
    </>
  )
}
