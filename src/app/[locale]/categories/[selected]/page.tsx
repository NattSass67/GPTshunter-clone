/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useAppDispatch, useAppSelector } from '@/session/store'
import logoStar from '@/images/logos/star.svg'
import logoComment from '@/images/logos/comment.svg'
import { Card } from '@/components/Card'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { fetchCategoryContent } from '@/session/my-state'
import { formatNumber } from '@/service/format'
import { categoryFunction } from '@/session/category'
import { Loader } from '@/components/Loader'
import { Container } from '@/components/Container'

import { Transition } from '@headlessui/react'
import { CardBanner } from '@/types/category'
import { Pagination } from '@/components/Button'

export default function Home(props: {
  params: { locale: string; selected: string }
  searchParams: { page: string }
}) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const switchPage = (nextPage: number) => {
    dispatch(categoryFunction.setPage(nextPage))
  }

  const isLoading = useAppSelector(
    (state) => state.categorySession.secondaryLoading,
  )

  const data: CardBanner[] | null = useAppSelector(
    (state) => state.categorySession.filteredContent,
  )
  const local = usePathname().split('/')[1]

  useEffect(() => {
    dispatch(fetchCategoryContent(props.params.selected, parseInt(props.searchParams.page)))
    console.log(props)
  }, [props.searchParams.page])

  const cardList = data?.map((project, index) => (
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
      <Container className="mt-16">
        <div className="w-full pb-12 pt-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            {props.params.selected}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-500">
            Best GPTs For {props.params.selected} On The GPT Store
          </p>
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
              <Pagination page={(props.searchParams.page) ? parseInt(props.searchParams.page):1} url={usePathname()}/>
            </div>
          </Transition>
          {isLoading && (
            <div className="mt-20">
              <Loader />
            </div>
          )}
        </div>
      </Container>
    </>
  )
}
