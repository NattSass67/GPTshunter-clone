/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
'use client'

import { Container } from '@/components/Container'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { useAppDispatch, useAppSelector } from '@/session/store'
import { useTranslations } from 'next-intl'
import { loadCategoryPage } from '@/session/manager'
import { Loader } from '@/components/Loader'
import { useAppRoute } from '@/service/custom'

export default function Categories() {
  const [initLoading, setInitLoading] = useState(true)
  const dispatch = useAppDispatch()
  const t = useTranslations('Category')

  useEffect(() => {
    dispatch(loadCategoryPage())
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
          <div className="w-full pt-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-500">
              {t('description')}
            </p>
          </div>
          <div className="w-full mt-12">
            <div className="relative"><Home /></div>
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


function Home() {
  return (
    <div className="flex w-full flex-col text-center">
      <AllCategories />
    </div>
  )
}

function AllCategories() {
  const router=useAppRoute()
  const locale=router.locale
  const allCategories = useAppSelector(
    (state) => state.categorySession.dropSelect,
  )

  const categoryList = allCategories.map((object, index) => (
    <a
      href={"/"+locale+"/categories/"+object.name+"?page=1"}
      key={index}
      className="w-full flex-none p-4 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-300/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 flex justify-between dark:text-zinc-200 text-sm sm:text-base"
    >
      <p className='font-semibold'>{object.name}</p>
      <p>{object.count}</p>
      
    </a>
  ))

  return <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2">{categoryList}</div>
}
