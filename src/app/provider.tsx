'use client'
import store from '@/store'
import { Provider } from 'react-redux'

export function ReduxToolkitProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <Provider store={store}>{children}</Provider>
}
