/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import { Pagination } from '@/components/Button'
import { usePathname } from 'next/navigation'
import { Loader } from '@/components/Loader'
import { SearchBarRedirect } from '@/components/Button'
import { useAppSelector, useAppDispatch } from '@/session/store'
import { Card } from '@/components/Card'
import logoStar from '@/images/logos/star.svg'
import logoComment from '@/images/logos/comment.svg'
import Image from 'next/image'
import { formatNumber } from '@/service/format'
import { loadSearchPage } from '@/session/manager'
import { useAppRoute } from '@/service/custom'
import { useTranslations } from 'next-intl'

export default function Home(props: {
  params: { query: string }
  searchParams: { page: string }
}) {
  const t = useTranslations("Search")
  const router=useAppRoute()
  const locale=router.locale
  const [initLoading, setInitLoading] = useState(true)
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.searchSession.loading)
  const content = useAppSelector((state) => state.searchSession.content)
  const pathName = usePathname()
  const totalBanner = useAppSelector((state) => state.searchSession.totalBanner)

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitLoading(false)
    }, 2000) // Set the delay to 1 second

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if(props.searchParams.page) {
      dispatch(loadSearchPage(props.params.query, parseInt(props.searchParams.page),locale))
    }else{
      dispatch(loadSearchPage(props.params.query, 1, locale))
    }
  }, [props.searchParams.page])

  const cardList = content?.map((project, index) => (
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
          <div className="w-full sm:pb-12 pb-8 pt-16 ">
            <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-5xl">
              {decodeURIComponent(props.params.query)}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base text-zinc-500">
              {t('discover')}{' '}
              {decodeURIComponent(props.params.query)}
            </p>
            <SearchBarRedirect />
          </div>
          <div className="w-full">
            <hr className="border-zinc-300 dark:border-zinc-300/50"/>
            <Transition
              show={!isLoading}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="relative flex flex-wrap">
                {cardList ? (
                  cardList
                ) : (
                  <div className="mt-12 w-full text-center text-xl font-semibold text-zinc-400">
                    No results found
                  </div>
                )}
              </div>
            </Transition>
            <Transition
              show={!isLoading}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="relative mt-4 flex justify-center">
                {cardList ? (
                  <Pagination
                    page={
                      props.searchParams.page
                        ? parseInt(props.searchParams.page)
                        : 1
                    }
                    bannerPerPage={12}
                    totalBanner={totalBanner}
                    url={pathName}
                  />
                ) : (
                  <></>
                )}
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
