'use client'

import { createContext, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider, useTheme } from 'next-themes'
import { store } from '@/session/store'
import { persistor } from '@/session/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function usePrevious<T>(value: T) {
  let ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function ThemeWatcher() {
  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

export const AppContext = createContext<{ previousPathname?: string }>({})

export function Providers({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let previousPathname = usePrevious(pathname)

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ThemeWatcher />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

{
  /*
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    {children}
  </PersistGate>
</Provider> 
*/
}
