import { useAppRoute } from '@/service/custom'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import { CardBanner } from '@/types/category'
import { formatNumber } from '@/service/format'

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <>
      <div className="absolute inset-0 z-0" />
      <Link {...props}>
        <span className="absolute inset-0 sm:rounded-2xl" />
        <span className="relative">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T
  href?: string
}) {
  let Component = as ?? 'h2'

  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p className="relative z-10 mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T
  decorate?: boolean
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}

export function MyCustomCard({ project }: { project: CardBanner }) {
  const router = useAppRoute()
  const locale = router.locale
  return (
    <Card
      as="div"
      className={`w-full flex-none flex-col overflow-hidden rounded-2xl p-4 shadow-lg dark:bg-zinc-800/50`}
    >
      <div className="h-56 w-full">
        <div className="relative z-10 mt-8 flex h-16 w-full items-center justify-center">
          <Image src={project.logo} alt="" className="h-16 w-16" unoptimized />
        </div>
        {/* <div className="absolute top-0 w-full h-20 bg-zinc-700 left-0 "></div> */}
        <h2 className="mt-6 w-full text-center text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {project.name}
        </h2>
        <p className="line-clamp-3 text-center text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
      </div>

      <div className="w-full">
        <div className="w-full">
          <hr className="mt-4 border-zinc-300/30 dark:border-zinc-300/10" />
        </div>
        <div className="grid w-full grid-cols-2 gap-x-2 ">
          <div className="mt-2 flex flex-col items-center justify-center gap-x-1">
            <div className="flex items-center text-xl font-semibold">
              {formatNumber(project.rate)}
            </div>
            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              Rating
            </p>
          </div>
          <div className="mt-2 flex flex-col items-center justify-center gap-x-1">
            <div className="flex items-center text-xl font-semibold">
              {formatNumber(project.comments)}K
            </div>
            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              Comments
            </p>
          </div>
        </div>
        <div className="w-full">
          <hr className="mt-4 border-zinc-300/30 dark:border-zinc-300/10" />
        </div>
        <div className="mt-2 flex w-full justify-center">
          <a
            href={'/' + locale + '/gpt-store/' + project.id}
            className="rounded-lg bg-zinc-800 px-4 py-2 w-full text-center text-sm font-semibold text-zinc-200 hover:bg-zinc-900 dark:hover:bg-zinc-800/50"
          >
            View on GPT Store
          </a>
        </div>
      </div>
    </Card>
  )
}
