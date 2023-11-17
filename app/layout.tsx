import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const poppins = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile Card',
  description: 'Developed by Mziyanda Joko',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
