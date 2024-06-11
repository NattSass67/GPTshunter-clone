'use client'
import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { Container } from '@/components/Container'
import { Pagination } from '@/components/Button'
import { usePathname } from 'next/navigation'
import { Loader } from '@/components/Loader'

export default function Home(props: { params: { query: string } }) {
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
          <div className="w-full pb-12 pt-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
              {props.params.query}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-500">
              Best GPTs For {props.params.query} On The GPT Store
            </p>
          </div>
          <div className="w-full">
            <hr />
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
