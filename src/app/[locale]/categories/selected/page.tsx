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

function Pagination() {
  const page = useAppSelector((state) => state.categorySession.page)
  const dispatch = useAppDispatch()
  const switchPage = (nextPage: number) => {
    dispatch(categoryFunction.setPage(nextPage))
  }

  const foward = () => {
    dispatch(categoryFunction.setPage(page + 1))
  }
  const backward = () => {
    dispatch(categoryFunction.setPage(page - 1))
  }

  if (page == 1) {
    return (
      <>
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              switchPage(1)
            }}
            className="flex select-none items-center gap-2 rounded-full px-3 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-400 transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:px-6"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
            <div className="hidden sm:flex">Previous</div>
          </button>
          <div className="flex items-center gap-2">
            <button
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full bg-zinc-800 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                1
              </span>
            </button>
            <button
              onClick={() => {
                switchPage(2)
              }}
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                2
              </span>
            </button>
            <button
              onClick={() => {
                switchPage(3)
              }}
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                3
              </span>
            </button>
            <button
              onClick={() => {
                switchPage(4)
              }}
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                4
              </span>
            </button>
            <button
              onClick={() => {
                switchPage(5)
              }}
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                5
              </span>
            </button>
          </div>
          <button
            onClick={() => {
              foward()
            }}
            className="flex select-none items-center gap-2 rounded-full px-3 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:px-6"
            type="button"
          >
            <div className="hidden sm:flex">Next</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </>
    )
  }

  if (page == 2) {
    return (
      <>
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              switchPage(1)
            }}
            className="flex select-none items-center gap-2 rounded-full px-3 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:px-6"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              ></path>
            </svg>
            <div className="hidden sm:flex">Previous</div>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                switchPage(1)
              }}
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                1
              </span>
            </button>
            <button
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full bg-zinc-800 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                2
              </span>
            </button>
            <button
              onClick={() => {
                switchPage(3)
              }}
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                3
              </span>
            </button>
            <button
              onClick={() => {
                switchPage(4)
              }}
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                4
              </span>
            </button>
            <button
              onClick={() => {
                switchPage(5)
              }}
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                5
              </span>
            </button>
          </div>
          <button
            onClick={() => {
              foward()
            }}
            className="flex select-none items-center gap-2 rounded-full px-3 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:px-6"
            type="button"
          >
            <div className="hidden sm:flex">Next</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="flex items-center gap-1">
        <button
          onClick={() => {
            switchPage(page - 1)
          }}
          className="flex select-none items-center gap-2 rounded-full px-3 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:px-6"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          <div className="hidden sm:flex">Previous</div>
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              switchPage(page - 2)
            }}
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              {page - 2}
            </span>
          </button>
          <button
            onClick={() => {
              switchPage(page - 1)
            }}
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              {page - 1}
            </span>
          </button>
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full bg-zinc-800 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              {page}
            </span>
          </button>
          <button
            onClick={() => {
              switchPage(page + 1)
            }}
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              {page + 1}
            </span>
          </button>
          <button
            onClick={() => {
              switchPage(page + 2)
            }}
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              {page + 2}
            </span>
          </button>
        </div>
        <button
          onClick={() => {
            switchPage(page + 1)
          }}
          className="flex select-none items-center gap-2 rounded-full px-3 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:px-6"
          type="button"
        >
          <div className="hidden sm:flex">Next</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </button>
      </div>
    </>
  )
}

import { Transition } from '@headlessui/react'
import { CardBanner } from '@/types/category'

export default function Home(props:{params:{locale:string}}) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const switchPage = (nextPage: number) => {
    dispatch(categoryFunction.setPage(nextPage))
  }

  const page = useAppSelector((state) => state.categorySession.page)
  const isLoading = useAppSelector(
    (state) => state.categorySession.secondaryLoading,
  )
  const dropChoosen = useAppSelector(
    (state) => state.categorySession.dropChoosen,
  )
  const data: CardBanner[] | null = useAppSelector(
    (state) => state.categorySession.filteredContent,
  )
  const local = usePathname().split('/')[1]
  useEffect(() => {

    if (dropChoosen == '') {
      router.push('/' + local + '/categories')
    } else {
      dispatch(fetchCategoryContent(dropChoosen))
      window.scrollBy({
        top: -window.scrollY,
      })
    }
    console.log(props)
  }, [dropChoosen, page])

  const CardList = data?.map((project, index) => (
    <Card
      as="div"
      key={index}
      className={`w-1/2 flex-none p-4 hover:bg-zinc-50 lg:w-1/3`}
    >
      <Card.Link href={"/"+props.params.locale+"/gpt-store/"+project.id}></Card.Link>
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
      {isLoading ? (
        <div className="top-0 mx-0 mt-24 flex flex w-full justify-center ">
          <Loader />
        </div>
      ) : (
        <></>
      )}

      <Transition
        show={!isLoading}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="w-full">
          <div className={`flex w-full flex-wrap text-center`}>{CardList}</div>
          <div className="mt-6 flex w-full justify-center">
            <Pagination />
          </div>
        </div>
      </Transition>
    </>
  )
}
