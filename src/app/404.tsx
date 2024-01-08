import { useRouter } from 'next/router'

export default function _404() {
  const router = useRouter()

  if (typeof document !== 'undefined') {
    router.replace('/not-found')
  }

  return null
}
