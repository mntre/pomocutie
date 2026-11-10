'use client'

import Image from 'next/image'
import PomodoroTimer from '@/components/PomodoroTimer'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="max-w-4xl w-full">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <Image 
              src="/dudu-icon.jpg"
              alt="Dudu"
              width={60}
              height={60}
              className="rounded-full shadow-lg"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-primary-light">
              Pomocutie
            </h1>
            <Image 
              src="/bubu-icon.jpg"
              alt="Bubu"
              width={60}
              height={60}
              className="rounded-full shadow-lg"
            />
          </div>
        </header>

        <PomodoroTimer />

        <footer className="text-center mt-12 text-sm text-gray-600 dark:text-gray-300">
          <p>Stay focused, stay productive! 📚✨</p>
        </footer>
      </div>
    </main>
  )
}
