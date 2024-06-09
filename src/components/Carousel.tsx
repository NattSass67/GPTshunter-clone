'use client'
import { useRef, useEffect, useState } from 'react'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStar from '@/images/logos/star.svg'
import logoComment from '@/images/logos/comment.svg'
import { Card } from '@/components/Card'
import Image from 'next/image'
import { formatNumber } from '@/service/format'
import { object } from 'zod'
import { Transition } from '@headlessui/react'
import { Loader } from './Loader'
import { useRouter } from 'next/navigation'

interface data {
  logo: any
  description: string
  name: string
  rate: number
  comments: number
}
export function Carousel(props: {
  content: data[] | null
  title: string
  isLoading: boolean
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const reset = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.scrollWidth,
      })
    }
  }

  useEffect(() => {
    reset()
  }, [props.isLoading])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.offsetWidth,
        behavior: 'smooth',
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.offsetWidth,
        behavior: 'smooth',
      })
    }
  }
  const router = useRouter()

  let CardList = props.content?.map((project, index) => (
    <Card
      as="div"
      key={index}
      className={`w-1/2 flex-none p-4 hover:bg-zinc-50 lg:w-1/3`}
    >
      <Card.Link href="https://www.gptshunter.com/gpt-store/MzUwODMyNTYxYjM0NTIwYTJl"></Card.Link>
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
      <div className="relative mt-8 flex w-full flex-col">
        <h2 className="absolute left-0 top-0 z-10 w-[250px] text-lg font-bold tracking-tight text-gray-900 sm:w-full sm:text-xl">
          {props.title}
        </h2>

        <button
          onClick={scrollLeft}
          aria-label="Save"
          className="absolute right-10 top-0 z-10 flex rounded-full px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
                fill="#000000"
              />
            </g>
          </svg>
        </button>

        {props.isLoading ? (
          <div className="no-scrollbar mx-0 my-28 flex flex w-full justify-center ">
            <Loader />
          </div>
        ) : (
          <></>
        )}

        <Transition
          show={!props.isLoading}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div
            ref={scrollContainerRef}
            className={`no-scrollbar mx-0 mt-12 flex w-full flex-row overflow-x-auto`}
          >
            {CardList}
          </div>
        </Transition>

        <button
          onClick={scrollRight}
          aria-label="Save"
          className="absolute right-0 top-0 z-10 flex rounded-full px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                fill="#000000"
              />
            </g>
          </svg>
        </button>
      </div>
    </>
  )
}
