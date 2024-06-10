/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useAppDispatch } from '@/session/store'
import { useEffect } from 'react'
import { loadCategoryPage } from '@/session/my-state'
import { useTranslations } from 'next-intl'

export default function Home() {
  const dispatch = useAppDispatch()
  const t = useTranslations('Category')

  return (
    <div className="flex w-full flex-col text-center">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-500">
        {t('message')}
      </h1>
    </div>
  )
}
