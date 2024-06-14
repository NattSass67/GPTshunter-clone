'use client'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const useAppRoute = () => {
  const locale = usePathname().split('/')[1]
  const router = useRouter()

  const push = (path: string) => {
    router.push("/"+locale + path)
  }

  return {
    push,
  }
}

export {useAppRoute}
