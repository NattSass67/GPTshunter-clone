/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Pagination } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Loader } from '@/components/Loader'
import logoComment from '@/images/logos/comment.svg'
import logoStar from '@/images/logos/star.svg'
import { formatNumber } from '@/service/format'
import { fetchCategoryContent } from '@/session/manager'
import { useAppDispatch, useAppSelector } from '@/session/store'
import { CardBanner } from '@/types/category'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useAppRoute } from '@/service/custom'

export default function Home(props: {
  params: { selected: string }
  searchParams: { page: string }
}) {
  const dispatch = useAppDispatch()
  const [initLoading, setInitLoading] = useState(true)
  const {selected}= props.params
  const router=useAppRoute()
  const locale= router.locale
  const t = useTranslations('Category')

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitLoading(false)
    }, 2000)

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [])

  const totalBanner = useAppSelector(
    (state) => state.categorySession.totalBanner,
  )
  const isLoading = useAppSelector(
    (state) => state.categorySession.secondaryLoading,
  )

  const data: CardBanner[] | null = useAppSelector(
    (state) => state.categorySession.filteredContent,
  )

  useEffect(() => {
    if(props.searchParams.page){
      dispatch(fetchCategoryContent(selected, parseInt(props.searchParams.page), locale))
    } else {
      dispatch(fetchCategoryContent(selected, 1, locale))
    }
  }, [props.searchParams.page])

  const cardList = data?.map((project, index) => (
    <Card
      as="div"
      key={index}
      className={`w-1/2 flex-none p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 lg:w-1/3`}
    >
      <Card.Link
        href={'/' + locale + '/gpt-store/' + project.id}
      ></Card.Link>
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white">
        <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {project.name}
      </h2>
      <Card.Description>{project.description}</Card.Description>
      <div className="flex gap-x-4">
        <div className="mt-2 flex items-center gap-x-1">
          <Image src={logoStar} alt="" className="h-4 w-4" unoptimized />{' '}
          {formatNumber(project.rate)}
        </div>
        <div className="mt-2 flex items-center gap-x-1">
          <Image src={logoComment} alt="" className="h-4 w-4" unoptimized />{' '}
          {formatNumber(project.comments)}K
        </div>
      </div>
    </Card>
  ))

  return (
    <>
      <Transition
        show={!initLoading}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Container className="mt-16">
          <div className="w-full pb-12 pt-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-200">
              {selected}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-400">
              {t('best')} {selected} {t('on-store')}
            </p>
          </div>
          <div className="w-full">
            <hr className='border-zinc-300/50 '/>
            <Transition
              show={!isLoading}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="relative flex flex-wrap">{cardList}</div>
            </Transition>
            <Transition
              show={!isLoading}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="relative mt-4 flex justify-center">
                <Pagination
                  page={
                    props.searchParams.page
                      ? parseInt(props.searchParams.page)
                      : 1
                  }
                  url={usePathname()}
                  bannerPerPage={12}
                  totalBanner={totalBanner}
                />
              </div>
            </Transition>
            {isLoading && (
              <div className="mt-20">
                <Loader />
              </div>
            )}
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
