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
import { CardBanner } from '@/types/category'
import logoStar from '@/images/logos/star.svg'
import logoComment from '@/images/logos/comment.svg'
import Image from 'next/image'
import { MyCustomCard } from '@/components/Card'
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

  const cardList = content?.map((project:CardBanner, index) => (
    <MyCustomCard project={project} key={index} />
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
            <h1 className="text-center text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-4xl">
              {decodeURIComponent(props.params.query)}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base text-zinc-500">
              {t('discover')}{' '}
              {decodeURIComponent(props.params.query)}
            </p>
            <SearchBarRedirect />
          </div>
          <div className="w-full">
            <hr className="border-zinc-300 dark:border-zinc-300/20 mb-4"/>
            <Transition
              show={!isLoading}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="relative grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="relative mt-8 flex justify-center">
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
