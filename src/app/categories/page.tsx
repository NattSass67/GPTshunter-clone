/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useAppDispatch } from '@/session/store'
import { useEffect } from 'react'
import { loadCategoryPage } from '@/session/my-state'

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadCategoryPage())
  }, [])

  return (
    <div className="flex w-full flex-col text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-500">
        Please select GPT Categories
      </h1>
    </div>
  )
}
