'use client'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { emailSchema, linksSchema, submitSchema } from '@/types/submit';
import { useTranslations } from 'next-intl';
import { SubmitForm } from '@/types/submit';

export function SubmitSimple() {
  const t = useTranslations('Submit');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitForm>({
    resolver: zodResolver(submitSchema),
  });

  const onSubmit = (data: SubmitForm) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full rounded-lg bg-white dark:bg-zinc-900 p-6 md:p-10">
        <label className="mb-2 flex text-sm">* Email</label>
        <input
          className="flex h-full w-full rounded-md mb-1 px-3 py-2 text-sm text-zinc-800 ring-1 ring-inset ring-zinc-300 focus:outline-none focus:ring-gray-400 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
          placeholder=""
          {...register('email')}
        />
        <p className="mb-4 h-4 text-[12px] text-red-500 font-medium">
          {errors.email?.message}
        </p>

        <label className="mb-2 flex text-sm">* Links</label>
        <textarea
          rows={8}
          id="links"
          placeholder={t('message')}
          className="w-full resize-none rounded-md dark:bg-zinc-800 px-3 py-2 text-sm text-zinc-800 dark:text-zinc-200 ring-1 ring-zinc-300 focus:outline-none focus:ring-gray-400 dark:ring-white/10"
          defaultValue={''}
          {...register('links')}
        />
        <p className="mb-4 h-4 text-[12px] text-red-500 font-medium">
          {errors.links?.message}
        </p>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-zinc-800 px-4 py-1.5 text-base font-semibold text-white dark:text-zinc-200 shadow-sm hover:bg-zinc-900 "
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
