'use client'

import { Providers } from '@/app/providers'
import { LayoutGPTs } from '@/components/LayoutGPTs'
import { store } from '@/session/store'
import { persistor } from '@/session/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import '@/styles/tailwind.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Providers>
              <div className="flex w-full">
                <LayoutGPTs>{children}</LayoutGPTs>
              </div>
            </Providers>
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
