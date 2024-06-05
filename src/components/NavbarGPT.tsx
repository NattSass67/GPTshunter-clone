/* eslint-disable @next/next/no-img-element */
'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export default function NavbarGPT() {
  let { resolvedTheme, setTheme } = useTheme()
  useEffect(() => {
    setTheme('light')
  })
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 py-1.5 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <a href="/" className="flex items-center gap-2 sm:gap-3">
                  <img
                    className="h-9 w-auto"
                    src="https://www.gptshunter.com/_nuxt/logo.DQOOruJz.png"
                    alt="Your Company"
                  />
                  <span className="text-lg font-semibold text-zinc-900 max-[370px]:hidden sm:text-xl">
                    {' '}
                    GPTs Hunter{' '}
                  </span>
                </a>
                <div className="ml-6 hidden text-sm font-semibold md:ml-16 md:flex md:gap-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="/submit"
                    className="inline-flex items-center pt-1 text-zinc-500 hover:text-zinc-700"
                  >
                    Submit
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center pt-1 text-zinc-500 hover:text-zinc-700"
                  >
                    Categories
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center pt-1 text-zinc-500 hover:text-zinc-700"
                  >
                    Download Data
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="ml-6 flex items-center gap-x-1">
                  <a className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-orange-500/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.0}
                      stroke="#3f3f46"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                      />
                    </svg>
                  </a>
                  <a className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-orange-500/10">
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="0 0 23 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#3f3f46"
                      className="h-5 w-5"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            fillRule="nonzero"
                            d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-orange-500/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="3f3f46"
                      className="h-5 w-5"
                    >
                      <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                    </svg>
                  </a>
                  <a className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-orange-500/10">
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="0 0 900 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#3f3f46"
                      stroke="#3f3f46"
                      strokeWidth="17.408"
                      className="h-4 w-4"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fill="#3f3f46"
                          d="M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
                <div className="-mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="shadow md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <DisclosureButton
                as="a"
                href="/submit"
                className="block px-4 py-2 text-sm font-semibold text-zinc-500 hover:bg-zinc-100"
              >
                Submit
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block px-4 py-2 text-sm font-semibold text-zinc-500 hover:bg-zinc-100"
              >
                Categories
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block px-4 py-2 text-sm font-semibold text-zinc-500 hover:bg-zinc-100"
              >
                Download Data
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
