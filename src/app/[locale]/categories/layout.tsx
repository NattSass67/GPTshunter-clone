/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
'use client'

import { Container } from '@/components/Container'
import { useRouter,usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '@/session/store'
import { categoryFunction } from '@/session/category'

function Dropdown() {
  const local = usePathname().split("/")[1]
  const dispatch = useAppDispatch()
  const allCategories = useAppSelector(
    (state) => state.categorySession.dropSelect,
  )
  const dropChoosen = useAppSelector(
    (state) => state.categorySession.dropChoosen,
  )

  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const checkList = allCategories?.map((object) => (
    <li key={object.name}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            onChange={() => {
              dispatch(categoryFunction.setDropChoosen(object.name))
              dispatch(categoryFunction.setPage(1))
              setTimeout(async () => {
                setClicked(false)
                router.push(`/${local}/categories/selected`)
                // Set success after 2000 milliseconds
              }, 100)
            }}
            type="radio"
            checked={dropChoosen == object.name}
            className="h-4 w-4 border-gray-300 bg-gray-100 accent-zinc-600 focus:outline-none"
          />
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {object.name}
          </label>
        </div>

        <label className="font-base ms-2 text-sm text-zinc-400">
          {object.count}
        </label>
      </div>
    </li>
  ))

  return (
    <>
      <button
        className="inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-zinc-600 hover:text-zinc-800 focus:outline-none sm:text-base"
        type="button"
        onClick={() => {
          if (clicked) {
            setClicked(false)
          } else {
            setClicked(true)
          }
        }}
        onBlur={() => {}}
      >
        {dropChoosen == '' ? 'Category' : dropChoosen}
        <svg
          className="ms-3 h-2.5 w-2.5 translate-y-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="#27272a"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <Transition
        show={clicked}
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="z-10 w-48 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
          <ul
            className="no-scrollbar max-h-48 space-y-3 overflow-y-auto p-3 text-sm text-gray-700 dark:text-gray-200"
            onBlur={() => {
              setTimeout(async () => {
                setClicked(false)
                // Set success after 2000 milliseconds
              }, 100)
            }}
          >
            {checkList}
          </ul>
        </div>
      </Transition>
    </>
  )
}

import { Loader } from '@/components/Loader'
export default function CategoriesLayout(props: { children: React.ReactNode }) {
  const [initLoading, setInitLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitLoading(false)
    }, 2000) // Set the delay to 1 second

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [])

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
          <div className="w-full py-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              GPT Store Categories
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-500">
              Explore GPT Store's Categories
            </p>
          </div>
          <div className="w-full">
            <section
              aria-labelledby="filter-heading"
              className="relative border-t border-gray-200"
            >
              <div className="absolute left-0 top-0 z-20">
                <Dropdown />
              </div>
            </section>
            <div className="mt-12 relative">{props.children}</div>
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