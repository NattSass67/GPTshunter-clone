/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import { Container } from '@/components/Container'
import Image from 'next/image'
import sample from '@/images/500.png'
import sample1 from '@/images/trending-data.png'
import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import { Loader } from '@/components/Loader'
import { useTranslations } from 'next-intl'
import logoApply from '@/images/logos/apply.svg'

export default function Example() {
  const [initLoading, setInitLoading] = useState(true)
  const t = useTranslations('Download')

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitLoading(false)
    }, 2000)

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
        <Container className="pt-32">
          <div className="bg-white dark:bg-zinc-900">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <p className="text-base font-semibold leading-7 text-zinc-400">
                  Posted on Feb 18, 2024
                </p>
                <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-200">
                  {t('title')}
                </h1>
                <p className="mb-4 mt-2 max-w-lg text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
                  {t('description')}
                </p>
                <hr className="dark:border-zinc-300/20 mt-8 border-zinc-300" />
                <div className="my-10 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-7 text-zinc-600 sm:text-base lg:max-w-none lg:grid-cols-3 dark:text-zinc-400">
                  <div className="lg:col-span-2">
                    <p className="text-2xl font-bold text-zinc-800 sm:text-3xl dark:text-zinc-200">
                      {t('backup')}
                    </p>
                    <p className="mt-4">{t('backup-description')}</p>
                    <p className="my-4 flex items-center gap-x-1 flex-wrap">
                      {t('backup-link')}
                      <a
                        href="https://github.com/AINativeLab/gptstore-data-backup"
                        className="underline underline-offset-2 hover:opacity-50 flex items-center"
                      >
                        <Image
                          src={logoApply}
                          alt=""
                          className="h-5 w-5"
                          unoptimized
                        />
                        Click
                      </a>
                    </p>
                  </div>
                  <div>
                    <Image
                      src={sample1}
                      alt=""
                      className="lg:max-h-64 h-auto w-full rounded-lg object-cover object-top shadow-lg"
                    />
                  </div>
                  <div className="lg:col-span-2 mt-4 lg:mt-0">
                    <p className="text-2xl font-bold text-zinc-800 sm:text-3xl dark:text-zinc-200 ">
                      {t('500-gpt')}
                    </p>
                    <p className="mt-4">{t('500-description')}</p>
                    <p className="my-4 flex items-center gap-x-1 flex-wrap">
                      {t('500-link')}
                      <a
                        href="https://github.com/AINativeLab/gptstore-data-backup"
                        className="underline underline-offset-2 hover:opacity-50 flex items-center"
                      >
                        <Image
                          src={logoApply}
                          alt=""
                          className="h-5 w-5"
                          unoptimized
                        />
                        Click
                      </a>
                    </p>
                  </div>
                  <div>
                    <Image
                      src={sample}
                      alt=""
                      className="lg:max-h-64 w-full h-auto rounded-lg object-cover object-top shadow-lg"
                    />
                  </div>
                </div>
                <hr className="dark:border-zinc-300/20 mt-8 border-zinc-300" />
                <div className="mt-2 grid grid-cols-1 text-sm sm:text-base lg:grid-cols-3">
                  <div className="col-span-3">
                    <p className="mt-8 text-2xl font-bold text-zinc-800 sm:text-3xl dark:text-zinc-200">
                      {t('download')}
                    </p>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                      {t('download-description')}
                    </p>
                    <p className="mt-4 flex flex-wrap items-center gap-x-1 text-zinc-600 dark:text-zinc-400">
                      {t('1-month')}
                      <a
                        href="https://store.ai.ls/checkout/buy/a9f28827-21c2-4d0f-9605-0a921ac2e44d"
                        className="underline underline-offset-2 hover:opacity-50 flex items-center"
                      >
                        <Image
                          src={logoApply}
                          alt=""
                          className="h-5 w-5"
                          unoptimized
                        />
                        Click
                      </a>
                    </p>

                    <p className="flex flex-wrap items-center gap-x-1 text-zinc-600 dark:text-zinc-400">
                      {t('renewal')}{' '}
                      <a
                        href="https://store.ai.ls/buy/dc7c96a6-95c6-4b9b-9369-1861a060bfb1"
                        className="underline underline-offset-2 hover:opacity-50 flex items-center"
                      >
                        <Image
                          src={logoApply}
                          alt=""
                          className="h-5 w-5"
                          unoptimized
                        />
                        Click
                      </a>
                    </p>
                    <p className="mt-4 text-zinc-600 dark:text-zinc-400 ">
                      {t('note-1')}{' '}
                      <a
                        href="https://store.ai.ls/buy/dc7c96a6-95c6-4b9b-9369-1861a060bfb1"
                        className="underline underline-offset-2 hover:opacity-50"
                      >
                        hi@ai.ci
                      </a>{' '}
                      {t('note-2')}
                    </p>
                  </div>
                  <div className="col-span-1 lg:col-span-3">
                    <p className="mt-8 text-2xl sm:text-3xl font-bold text-zinc-800 dark:text-zinc-200">
                      {t('sample')}
                    </p>
                    <div>
                      <textarea
                        rows={40}
                        className="no-scrollbar mt-4 w-full resize-none rounded-2xl bg-zinc-800 p-4 text-sm text-zinc-50 focus:outline-none sm:text-base "
                        readOnly
                        value={jsonString}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

const jsonObject = [
  {
    id: 'g-2DQzU5UZl',
    created_at: '2023-11-07T20:50:47.587Z',
    updated_at: '2024-04-03T09:12:41.927Z',
    gpt_updated_at: '2024-04-02T08:11:18.629Z',
    data: {
      gizmo: {
        id: 'g-2DQzU5UZl',
        organization_id: 'org-JYIjv71VrRxSi7ON7eyQnBbd',
        short_url: 'g-2DQzU5UZl-code-copilot',
        author: {
          user_id: 'user-6aFDZhDCRHmM3i0cFMPreja8',
          display_name: 'promptspellsmith.com',
          link_to: 'https://promptspellsmith.com',
          is_verified: true,
          selected_display: 'website',
          will_receive_support_emails: true,
          display_socials: [
            {
              id: 'twitterverify-43d2-b12a-bbe33d600487',
              type: 'twitter',
              display_name: 'X',
              verified: true,
              verified_data: {
                id: '4855776815',
                username: '@lroolle',
                type: 'twitter',
                link_to: 'https://twitter.com/lroolle',
              },
            },
          ],
        },
        voice: {
          id: 'ember',
        },
        workspace_id: null,
        model: null,
        instructions: null,
        settings: null,
        display: {
          name: 'Code Copilot',
          description:
            'Code Smarter, Build Faster—With the Expertise of a 10x Programmer by Your Side.',
          prompt_starters: [
            '/start python',
            '/search ln -s',
            '/quick_fix git rebase accept remote changes package-lock',
            '/readme',
          ],
          profile_pic_id: 'file-rPvmtaeOjKELh5SjSJIoC2bn',
          profile_picture_url:
            'https://files.oaiusercontent.com/file-rPvmtaeOjKELh5SjSJIoC2bn?se=2123-12-21T14%3A52%3A47Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D1209600%2C%20immutable&rscd=attachment%3B%20filename%3Dfile-UQLX4c22Xf5n5sxQqAnvnIzS.png&sig=v6T1iw/Xv54UzVzflRcKYJfB73LMBzFC4qTOdC68H1E%3D',
          categories: ['programming'],
        },
        share_recipient: 'marketplace',
        created_at: '2023-11-07T01:00:36.878445+00:00',
        updated_at: '2024-04-02T08:11:18.629155+00:00',
        last_interacted_at: null,
        num_interactions: null,
        tags: ['public', 'reportable'],
        version: null,
        live_version: null,
        training_disabled: null,
        sharing_targets: null,
        appeal_info: null,
        vanity_metrics: {
          num_conversations: null,
          num_conversations_str: '200K+',
          created_ago_str: '4 months ago',
          review_stats: {
            total: 37571,
            count: 9081,
          },
        },
        workspace_approval_date: null,
        workspace_approved: null,
        sharing: null,
        current_user_permission: null,
      },
      tools: [
        {
          id: 'gzm_cnf_Q5xenVVRggXomhbe90xgLcbU~gzm_tool_60B6cSC6hTzOhgPXVvCVrMwi',
          type: 'browser',
          settings: null,
          metadata: null,
        },
        {
          id: 'gzm_cnf_Q5xenVVRggXomhbe90xgLcbU~gzm_tool_3CRytLrqQsX3rCLeB8BGz0KA',
          type: 'python',
          settings: null,
          metadata: null,
        },
      ],
      files: [
        {
          id: 'T3W5VprbgkrN2WqC08WsUdHM',
          type: '',
          file_id: '',
          location: '',
        },
        {
          id: 'ZCfrKRsloTkJgJ6KWkm6jyij',
          type: '',
          file_id: '',
          location: '',
        },
      ],
      product_features: {
        attachments: {
          type: 'retrieval',
          accepted_mime_types: [
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'text/x-php',
            'text/html',
            'application/x-latext',
            'text/x-script.python',
            'application/msword',
            'text/x-c++',
            'text/x-tex',
            'application/pdf',
            'text/x-java',
            'text/x-c',
            'text/x-typescript',
            'text/x-sh',
            'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            'text/x-csharp',
            'text/markdown',
            'text/javascript',
            'text/plain',
            'text/x-ruby',
            'application/json',
          ],
          image_mime_types: [
            'image/gif',
            'image/jpeg',
            'image/webp',
            'image/png',
          ],
          can_accept_all_mime_types: true,
        },
      },
    },
  },
]

const jsonString = JSON.stringify(jsonObject, null, 2) // Pretty-print with 2 spaces
