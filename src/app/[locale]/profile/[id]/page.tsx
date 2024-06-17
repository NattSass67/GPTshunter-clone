/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { Loader } from '@/components/Loader'
import logoComment from '@/images/logos/comment.svg'
import logoStar from '@/images/logos/star.svg'
import { formatNumber } from '@/service/format'
import { loadProfilePage } from '@/session/manager'
import { useAppDispatch, useAppSelector } from '@/session/store'
import { CardBanner } from '@/types/category'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useAppRoute } from '@/service/custom'
import { MyCustomCard } from '@/components/Card'


export default function Home(props: {
  params: { id: string }
  searchParams: { page: string }
}) {
  const router = useAppRoute()
  const { id } = props.params
  const locale = router.locale
  const dispatch = useAppDispatch()
  const [initLoading, setInitLoading] = useState<boolean>(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitLoading(false)
    }, 2000)

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [])

  const isLoading = useAppSelector((state) => state.profileSession.loading)
  const username = useAppSelector((state) => state.profileSession.profile?.name)
  const totalBanner = useAppSelector(
    (state) => state.profileSession.profile?.totalBanner,
  )

  const data: CardBanner[] | undefined = useAppSelector(
    (state) => state.profileSession.profile?.content,
  )

  useEffect(() => {
    dispatch(loadProfilePage(id, locale))
  }, [])

  const cardList = data?.map((project:CardBanner, index) => (
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
              GPT built by {decodeURIComponent(username as string)}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base text-zinc-500">
              Founded {totalBanner} GPTs
            </p>
          </div>
          <div className="w-full">
            <hr className="mb-4 border-zinc-300 dark:border-zinc-300/20" />
            <Transition
              show={!isLoading}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="relative grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cardList}
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
