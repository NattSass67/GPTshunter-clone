import { Footer } from '@/components/Footer'
import { HeaderGPTs } from './HeaderGPTs'
import NavbarGPT from './NavbarGPT'
import FooterGPT from './FooterGPTs'
import { HeaderPantip } from './HeaderPantip'

export function LayoutGPTs({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <HeaderPantip />
        <main className="flex-auto">{children}</main>
        <FooterGPT />
        <Footer />
      </div>
    </>
  )
}
