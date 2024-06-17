/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Carousel } from '@/components/Carousel'
import { FilterSelect } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { useAppDispatch, useAppSelector } from '@/session/store'
import { fetchContent } from '@/session/manager'
import logoSubmit from '@/images/logos/submit.svg'
import logoApply from '@/images/logos/apply.svg'
import logoAdd from '@/images/logos/add.svg'
import { SearchBarRedirect } from '@/components/Button'

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
  const locale = usePathname().split('/')[1]

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
    dispatch(fetchContent(locale))
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
              <SearchBarRedirect />
              <div className="flex justify-center">
                <div className="grid grid-cols-1 min-[560px]:grid-cols-2 px-4 text-sm text-zinc-600 sm:text-base gap-x-4 ">
                  <a
                    href={'/' + locale + '/submit'}
                    className="flex items-center gap-x-2 hover:text-zinc-500 dark:text-zinc-400"
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
                    className="flex items-center gap-x-2 hover:text-zinc-500 dark:text-zinc-400"
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
                    className="flex items-center gap-x-2 hover:text-zinc-500 min-[560px]:col-span-2 min-[560px]:justify-center dark:text-zinc-400"
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
          </div>
          <div className="mt-12 w-full border-t border-zinc-300 dark:border-zinc-300/20">
            <FilterSelect />
            <Carousel
              content={selectedFilterContent}
              title={selectedFilter}
              isLoading={secondaryLoading}
            />
            <br></br>
            <hr className='border-zinc-300 dark:border-zinc-300/20 mb-8'/>
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
