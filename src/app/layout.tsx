import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pomodoro Timer - Accountancy Student Study App',
  description: 'A Pomodoro timer designed for accountancy students featuring Bubu and Dudu characters. Stay focused and productive with customized study sessions.',
  keywords: ['pomodoro', 'timer', 'accountancy', 'study', 'productivity', 'bubu', 'dudu'],
  authors: [{ name: 'Accountancy Pomodoro' }],
  openGraph: {
    title: 'Pomodoro Timer - Accountancy Student Study App',
    description: 'Stay focused with our cute Bubu and Dudu Pomodoro timer for accountancy students',
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
