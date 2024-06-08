import { Providers } from '@/app/[locale]/providers'
import { LayoutGPTs } from '@/components/LayoutGPTs'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import '@/styles/tailwind.css'

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()
  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className="flex w-full">
              <LayoutGPTs>{children}</LayoutGPTs>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
