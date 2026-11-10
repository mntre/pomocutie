import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pomocutie - Pomodoro Timer with Bubu & Dudu',
  description: 'A cute Pomodoro timer featuring Bubu and Dudu characters. Stay focused and productive with customized study sessions.',
  keywords: ['pomodoro', 'timer', 'study', 'productivity', 'bubu', 'dudu', 'pomocutie'],
  authors: [{ name: 'Pomocutie' }],
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Pomocutie - Pomodoro Timer with Bubu & Dudu',
    description: 'Stay focused with our cute Bubu and Dudu Pomodoro timer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
