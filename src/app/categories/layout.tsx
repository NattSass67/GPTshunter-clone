/* eslint-disable react/no-unescaped-entities */
'use client'

import { Container } from '@/components/Container'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

function Dropdown() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false)
  const [selected, setSelected] = useState('Category')
  const checkList = mock.map((object) => (
    <li key={object.name}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            onChange={() => {
              setSelected(object.name)
              router.push(`/categories/selected/?selected=${object.name}&page=1`)
            }}
            id="default-radio-1"
            type="radio"
            checked={selected == object.name}
            name="default-radio"
            className="h-4 w-4 border-gray-300 bg-gray-100 accent-zinc-600 focus:outline-none"
          />
          <label
            htmlFor="default-radio-1"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
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
        className="inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-zinc-600 hover:text-zinc-800 focus:outline-none"
        type="button"
        onClick={() => {
          setClicked(true)
        }}
        onBlur={() => {
          setTimeout(async () => {
            setClicked(false)
            // Set success after 2000 milliseconds
          }, 100)
        }}
      >
        {selected}
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
          <ul className="no-scrollbar max-h-48 space-y-3 overflow-y-auto p-3 text-sm text-gray-700 dark:text-gray-200">
            {checkList}
          </ul>
        </div>
      </Transition>
    </>
  )
}
const mock = [
  {
    name: 'Dalle',
    count: '17K+',
  },
  {
    name: 'Education',
    count: '69K+',
  },
  {
    name: 'Lifestyle',
    count: '53K+',
  },
  {
    name: 'Productivity',
    count: '55K+',
  },
  {
    name: 'Programming',
    count: '29K+',
  },
  {
    name: 'Research',
    count: '44K+',
  },
  {
    name: 'Writing',
    count: '44K+',
  },
  {
    name: 'Other',
    count: '151K+',
  },
]


export default function CategoriesLayout(props: { children: React.ReactNode }) {

  return (
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
          <div className="absolute left-0 top-0">
            <Dropdown />
          </div>
        </section>
        <div className="mt-12">{props.children}</div>
      </div>
    </Container>
  )
}
