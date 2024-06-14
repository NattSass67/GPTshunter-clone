import { Footer } from '@/components/Footer'
import FooterGPT from './FooterGPTs'
import { HeaderGPT } from './HeaderGPT'

export function LayoutGPTs({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full border-x border-zinc-100 bg-white dark:border-zinc-300/20 dark:bg-zinc-900" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <HeaderGPT />
        <main className="flex-auto">{children}</main>
        <FooterGPT />
        <Footer />
      </div>
    </>
  )
}
