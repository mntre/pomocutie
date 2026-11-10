'use client'

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
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark dark:text-primary-light mb-2">
            🐻 Pomodoro Study Timer 🐼
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            For Accountancy Students • Featuring Bubu & Dudu
          </p>
        </header>

        <PomodoroTimer />

        <footer className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>Stay focused, stay productive! 📚✨</p>
          <p className="mt-2">Built with 💕 for accountancy students</p>
        </footer>
      </div>
    </main>
  )
}
