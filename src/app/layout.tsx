import { Breadcrumbs, Footer, Header } from '@/components'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import './globals.css'
import styles from './layout.module.css'
import { contacts, navigationLinks, servicesTitles } from '@/constants'
import { ReduxToolkitProvider } from './provider'

const raleWay = Raleway({
  subsets: ['cyrillic', 'latin'],
  display: 'swap'
})


export const metadata: Metadata = {
  title: 'Автосервис CITY SERVIS AUTOMATIC',
  description: 'Ремонт и техническое обслуживание машин в Краснодаре',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const services = servicesTitles.map((el) => el.title)
  return (
    <ReduxToolkitProvider>
      <html lang="ru">
        <body className={`relative ${raleWay.className}`}>
          <div id='portal'></div>
          <Header />
          <main className={styles.container}>
            <Breadcrumbs />
            {children}
          </main>
          <Footer contacts={contacts} navigation={navigationLinks} services={services} />
        </body>
      </html>
    </ReduxToolkitProvider>
  )
}
