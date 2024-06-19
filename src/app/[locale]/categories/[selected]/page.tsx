/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Pagination } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Loader } from '@/components/Loader'
import { fetchCategoryContent } from '@/session/manager'
import { useAppDispatch, useAppSelector } from '@/session/store'
import { CardBanner } from '@/types/category'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useAppRoute } from '@/service/custom'
import { MyCustomCard } from '@/components/Card'

export default function Home(props: {
  params: { selected: string }
  searchParams: { page: string }
}) {
  const dispatch = useAppDispatch()
  const [initLoading, setInitLoading] = useState(true)
  const { selected } = props.params
  const router = useAppRoute()
  const locale = router.locale
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
    if (props.searchParams.page) {
      dispatch(
        fetchCategoryContent(
          selected,
          parseInt(props.searchParams.page),
          locale,
        ),
      )
    } else {
      dispatch(fetchCategoryContent(selected, 1, locale))
    }
  }, [props.searchParams.page])

  const cardList = data?.map((project: CardBanner, index) => (
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
          <div className="w-full pb-12 pt-16 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-200">
              {selected}
            </h1>
            <p className="mx-auto mt-2 max-w-3xl text-lg text-zinc-500">
              {t('best')} {selected} {t('on-store')}
            </p>
          </div>
          <div className="w-full">
            <hr className="border-zinc-300/20 mb-4" />
            <Transition
              show={!isLoading}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="relative grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {cardList}
              </div>
            </Transition>
            <Transition
              show={!isLoading}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="relative mt-8 flex justify-center">
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
