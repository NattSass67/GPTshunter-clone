/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useAppDispatch, useAppSelector } from '@/session/store'
import logoStar from '@/images/logos/star.svg'
import logoComment from '@/images/logos/comment.svg'
import { Card } from '@/components/Card'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { loadTagsPage } from '@/session/manager'
import { formatNumber } from '@/service/format'
import { Loader } from '@/components/Loader'
import { Container } from '@/components/Container'
import { Transition } from '@headlessui/react'
import { CardBanner } from '@/types/category'
import { Pagination } from '@/components/Button'
import { useAppRoute } from '@/service/custom'
import { useTranslations } from 'next-intl'

export default function Home(props: {
  params: { selected: string }
  searchParams: { page: string }
}) {
  const t =useTranslations("Tag")
  const router = useAppRoute()
  const locale = router.locale
  const pathName = usePathname()
  const { selected } = props.params
  const dispatch = useAppDispatch()
  const [initLoading, setInitLoading] = useState<boolean>(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitLoading(false)
    }, 2000)

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [])

  const isLoading = useAppSelector((state) => state.tagsSession.loading)
  const relatedTags = useAppSelector((state) => state.tagsSession.relatedTags)
  const totalBanner = useAppSelector((state) => state.tagsSession.totalBanner)


  const data: CardBanner[] | null = useAppSelector(
    (state) => state.tagsSession.filteredContent,
  )

  useEffect(() => {
    if(props.searchParams.page){
      dispatch(loadTagsPage(selected, parseInt(props.searchParams.page),locale))
    }else{
      dispatch(loadTagsPage(selected, 1, locale))
    }
  }, [props.searchParams.page])

  const tags = relatedTags?.map((object, index) => (
    <a
      key={index}
      href={"/"+locale+"/tags/"+object+"?page=1"}
      className="flex-none rounded-full bg-zinc-100 px-3 py-1.5 text-zinc-800 hover:bg-zinc-800/50 dark:text-zinc-400 dark:bg-zinc-800/50 dark:hover:text-zinc-200"
    >
      <p className="text-center text-[14px]">{object}</p>
    </a>
  ))

  const cardList = data?.map((project, index) => (
    <Card
      as="div"
      key={index}
      className={`w-1/2 flex-none p-4 hover:bg-zinc-50 lg:w-1/3 dark:hover:bg-zinc-800/50`}
    >
      <Card.Link href={'/' + locale + '/gpt-store/' + project.id}></Card.Link>
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
      <Transition
        show={!initLoading}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <Container className="mt-16">
          <div className="w-full pb-12 pt-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-200">
              {t('best-front')} {decodeURIComponent(selected)} GPTs {t('best-back')}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-500">
               {totalBanner} GPTs {t('founded')} {decodeURIComponent(selected)} {t('on')} official GPT store
            </p>
          </div>
          <div className="w-full">
            <hr className="border-zinc-300/50" />
            <Transition
              show={!isLoading}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div className="relative flex flex-wrap">{cardList}</div>
            </Transition>
            <Transition
              show={!isLoading}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <div>
                <div className="relative mt-4 flex justify-center">
                  <Pagination
                    page={
                      props.searchParams.page
                        ? parseInt(props.searchParams.page)
                        : 1
                    }
                    url={pathName}
                    totalBanner={totalBanner}
                    bannerPerPage={12}

                  />
                </div>
                <div>
                  <p className="mt-4 text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
                  {t('related')} {decodeURIComponent(selected)} {t('on')} GPT store
                  </p>
                  <div className="no-scrollbar mx-0 mt-2 flex flex-row gap-2 overflow-x-auto sm:flex-wrap sm:overflow-hidden">
                    {tags}
                  </div>
                </div>
              </div>
            </Transition>
            {isLoading && (
              <div className="mt-20">
                <Loader />
              </div>
            )}
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
