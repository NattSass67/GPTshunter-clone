'use client'
import { useState, useEffect } from 'react'
import { emailSchema, linksSchema, submitSchema } from '@/types/submit'
import { z } from 'zod'

export function SubmitSimple() {
  const [email, setEmail] = useState('')
  const [links, setLinks] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidLinks, setIsValidLinks] = useState(true)

  const validEmail = () => {
    try {
      emailSchema.parse(email)
      setIsValidEmail(true)
      console.log('Email is valid')
    } catch (error) {
      setIsValidEmail(false)
      if (error instanceof z.ZodError) {
        //console.log(error.errors)
      }
    }
  }

  const validLinks = () => {
    try {
      linksSchema.parse(links)
      setIsValidLinks(true)
    } catch (error) {
      setIsValidLinks(false)
      if (error instanceof z.ZodError) {
        //console.log(error.errors)
      }
    }
  }

  return (
    <>
      <div className="w-full rounded-lg bg-white p-6 md:p-10">
        <label className="mb-2 flex text-sm">* Email</label>
        <input
          className="flex h-full w-full rounded-md mb-1 px-3 py-2 text-sm text-zinc-800 ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-gray-400 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
          placeholder=""
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          onBlur={validEmail}
        />
        <p className="mb-4 h-4 text-[12px] text-red-500 font-medium">
          {!isValidEmail && 'Invalid email address'}
        </p>

        <label className="mb-2 flex text-sm">* Links</label>
        <textarea
          rows={8}
          name="comment"
          id="comment"
          placeholder="One url per line. Please avoid submitting content related to politics, pornography, or violence."
          className="w-full resize-none rounded-md border-0 px-3 py-2 text-sm text-zinc-800 ring-1 ring-inset ring-gray-200 focus:outline-none focus:ring-gray-400"
          defaultValue={''}
          onBlur={validLinks}
          onChange={(event) => {
            setLinks(event.target.value)
          }}
        />
         <p className="mb-4 h-4 text-[12px] text-red-500 font-medium">
          {!isValidLinks && 'Required'}
        </p>
        <div className="flex justify-end">
          <button
            onClick={() => {}}
            className="rounded-md bg-orange-500 px-4 py-1.5 text-xs font-semibold text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}
