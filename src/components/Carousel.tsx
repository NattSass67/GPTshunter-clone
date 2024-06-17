'use client'
import { useRef, useEffect, useState } from 'react'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStar from '@/images/logos/star.svg'
import logoComment from '@/images/logos/comment.svg'
import { Card, MyCustomCard } from '@/components/Card'
import Image from 'next/image'
import { formatNumber } from '@/service/format'
import { object } from 'zod'
import { Transition } from '@headlessui/react'
import { Loader } from './Loader'
import { useRouter } from 'next/navigation'
import { CardBanner } from '@/types/category'
import { usePathname } from 'next/navigation'

export function Carousel(props: {
  content: CardBanner[] | null
  title: string
  isLoading: boolean
}) {
  const locale = usePathname().split('/')[1]
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
    <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 flex-none">
          <MyCustomCard project={project} />
    </div>

  ))

  return (
    <>
      <div className="relative mt-8 flex w-full flex-col">
        <h2 className="absolute left-0 top-0 z-10 w-[250px] truncate text-lg font-bold tracking-tight text-zinc-800 sm:w-full sm:text-xl dark:text-zinc-200">
          {props.title}
        </h2>

        <button
          onClick={scrollLeft}
          aria-label="Save"
          className="absolute right-10 top-0 z-10 flex rounded-full px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur hover:ring-zinc-300/50"
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#71717a"
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
                fill="#71717a"
              />
            </g>
          </svg>
        </button>

        {props.isLoading ? (
          <div className="no-scrollbar mx-0 my-28 flex w-full justify-center ">
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
            className={`no-scrollbar mx-0 mt-12 flex w-full flex-row overflow-x-auto pt-2 pb-8 pointer-events-none`}
          >
            {CardList}
          </div>
        </Transition>
        <button
          onClick={scrollRight}
          aria-label="Save"
          className="absolute right-0 top-0 z-10 flex rounded-full px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur hover:ring-zinc-300/50"
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#71717a"
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
                fill="#71717a"
              />
            </g>
          </svg>
        </button>
      </div>
    </>
  )
}
