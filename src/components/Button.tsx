'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '@/session/store'
import { useRef } from 'react'
import { setFilterChoosen } from '@/session/home'
import { fetchHomeFilterContent } from '@/session/my-state'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}

export function FilterSelect() {
  const content: string[] = useAppSelector(
    (state) => state.homeSession.filterSelect,
  )

  const dispatch = useAppDispatch()
  const choosedFilter = useAppSelector(
    (state) => state.homeSession.filterChoosen,
  )

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const onFilterClick = (name: string) => {
    dispatch(setFilterChoosen(name))
    dispatch(fetchHomeFilterContent(name))
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -160, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 160, behavior: 'smooth' })
    }
  }

  const filterList = content?.map((object, index) => {
    return (
      <button
        onClick={() => {
          onFilterClick(object)
        }}
        aria-hidden="true"
        key={index}
        className={`flex-none rounded-full px-3 py-1.5 ${
          choosedFilter === object
            ? 'bg-zinc-800 text-white'
            : 'bg-zinc-100 text-zinc-800'
        }`}
      >
        <p className="text-center text-[14px] ">{object}</p>
      </button>
    )
  })

  return (
    <>
      {' '}
      <div className="relative mt-4 flex flex-col">
        <div className="absolute left-0 top-0 z-10 h-12 w-12 -translate-x-1 bg-gradient-to-r from-white md:left-6">
          {' '}
        </div>
        <button
          onClick={scrollLeft}
          aria-label="Save"
          className="absolute left-0 top-0 z-10 hidden rounded-full px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur md:flex"
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

        <div
          ref={scrollContainerRef}
          className="no-scrollbar mx-0 flex flex-row gap-x-2 overflow-x-auto px-4 md:mx-8 "
        >
          {filterList}
        </div>

        <div className="absolute right-0 top-0 z-10 h-12 w-12 translate-x-1 bg-gradient-to-l from-white md:right-6">
          {' '}
        </div>
        <button
          onClick={scrollRight}
          aria-label="Save"
          className="absolute right-0 top-0 z-10 hidden rounded-full px-2 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur md:flex"
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

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export function SearchBar() {
  const [query, setQuery] = useState<string>('')

  return (
    <div className="my-4 flex w-full justify-center">
      <div className="flex w-full max-w-2xl rounded-3xl border border-zinc-300 px-2 shadow">
        <input
          autoFocus
          className="flex w-full rounded-full bg-white/90 pl-3 text-sm text-zinc-800 focus:outline-none sm:text-base dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
          placeholder="Search..."
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
          }}
          onBlur={() => {}}
        />
        <a
          href={`https://pantip.com/search?q=${query}`}
          className="group my-2 rounded-full px-3 py-0.5 transition hover:scale-110 sm:py-1.5 dark:bg-zinc-800/90 "
        >
          <MagnifyingGlassIcon
            className="pointer-events-none h-5 w-5 text-zinc-500 group-hover:text-zinc-700"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  )
}

import { categoryFunction } from '@/session/category'
import { useRouter } from 'next/navigation'

export function Pagination(props: { url: string; page: number }) {
  const page = props.page
  const router = useRouter()
  const dispatch = useAppDispatch()
  const url = props.url
  const switchPage = (nextPage: number) => {
    router.push(url+"/?page="+nextPage.toString())
  }

  const foward = () => {
    router.push(url+"/?page="+(page+1).toString())
  }
  const backward = () => {
    router.push(url+"/?page="+(page-1).toString())
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
              strokeWidth="2"
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
              strokeWidth="2"
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
              strokeWidth="2"
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
              strokeWidth="2"
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
            strokeWidth="2"
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
            strokeWidth="2"
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
