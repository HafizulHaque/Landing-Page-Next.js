import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'] ,
  weight: ['400', '700']
})

const clashDisplay = localFont({
  src: './font/local/ClashDisplay-Variable.ttf',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Assignment Project',
  description: 'Assignment Project for Brain Station 23',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clashDisplay.className}>
        {children}
      </body>
    </html>
  )
}
