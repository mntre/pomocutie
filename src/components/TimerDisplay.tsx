'use client'

interface TimerDisplayProps {
  timeLeft: number
  mode: 'work' | 'shortBreak' | 'longBreak'
  isActive: boolean
}

export default function TimerDisplay({ timeLeft, mode, isActive }: TimerDisplayProps) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const getModeLabel = () => {
    switch (mode) {
      case 'work':
        return 'Work Session'
      case 'shortBreak':
        return 'Short Break'
      case 'longBreak':
        return 'Long Break'
    }
  }

  const getModeColor = () => {
    switch (mode) {
      case 'work':
        return 'text-primary-dark dark:text-primary-light'
      case 'shortBreak':
        return 'text-secondary-dark dark:text-secondary-light'
      case 'longBreak':
        return 'text-accent-dark dark:text-accent-light'
    }
  }

  return (
    <div className="text-center mb-8">
      <h2 className={`text-2xl font-semibold mb-4 ${getModeColor()}`}>
        {getModeLabel()}
      </h2>
      
      <div className={`text-8xl md:text-9xl font-bold mb-4 ${getModeColor()} ${isActive ? 'animate-pulse-soft' : ''}`}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ${
            mode === 'work'
              ? 'bg-primary-dark dark:bg-primary-light'
              : mode === 'shortBreak'
              ? 'bg-secondary-dark dark:bg-secondary-light'
              : 'bg-accent-dark dark:bg-accent-light'
          }`}
          style={{
            width: `${((TIMER_DURATIONS[mode] - timeLeft) / TIMER_DURATIONS[mode]) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

const TIMER_DURATIONS = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
}
