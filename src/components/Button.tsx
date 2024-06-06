'use client'
import Link from 'next/link'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '@/session/store'
import { useRef } from 'react'
import { setFilterChoosen } from '@/session/home'

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
  const content: string[]= useAppSelector(
    (state) => state.homeSession.filterSelect.title
  )

  const dispatch = useAppDispatch()
  const choosedFilter = useAppSelector((state) => state.homeSession.filterChoosen)

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const onFilterClick = (name: string) => {
    dispatch(setFilterChoosen(name))
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

  const filterList = content?.map((object) => {
    return (
      <button
        onClick={() => {
          onFilterClick(object)
        }}
        aria-hidden="true"
        key={object}
        className={`flex-none rounded-full px-3 py-1.5 ${
          choosedFilter === object
            ? 'bg-zinc-800 text-white'
            : 'bg-zinc-100 text-zinc-800'
        }`}
      >
        <p className="text-center text-[14px] ">
          {object}
        </p>
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