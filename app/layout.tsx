// import Nav from './auth/Nav'
import './globals.css'
import { Montserrat } from '@next/font/google'
import QueryWrapper from './auth/QueryWrapper'
import Nav from './components/nav/Nav'
import clsx from 'clsx'

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(children)
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        montserrat.variable
      )}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto font-serif`}>
        <QueryWrapper>
          <Nav />
          <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
            {children}
            {/* <AnalyticsWrapper /> */}
          </main>
        </QueryWrapper>
      </body>
    </html>
  )
}
