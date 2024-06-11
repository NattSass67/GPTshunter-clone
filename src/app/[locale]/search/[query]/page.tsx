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

export default function Home(props: {
  params: { locale: string; query: string }
  searchParams: { page: string }
}) {
  const [initLoading, setInitLoading] = useState(true)
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.searchSession.loading)
  const content = useAppSelector((state) => state.searchSession.content)

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitLoading(false)
    }, 2000) // Set the delay to 1 second

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    dispatch(loadSearchPage(props.params.query, parseInt(props.searchParams.page)))
  }, [props.searchParams.page])

  const cardList = content?.map((project, index) => (
    <Card
      as="div"
      key={index}
      className={`w-1/2 flex-none p-4 hover:bg-zinc-50 lg:w-1/3`}
    >
      <Card.Link
        href={'/' + props.params.locale + '/gpt-store/' + project.id}
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
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Container className="mt-16">
          <div className="w-full pb-12 pt-16 ">
            <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              {decodeURIComponent(props.params.query)}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base text-zinc-500">
              Discover The Best GPTs For {decodeURIComponent(props.params.query)}
            </p>
            <SearchBarRedirect />
          </div>
          <div className="w-full">
            <hr />
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