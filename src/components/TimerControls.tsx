'use client'

interface TimerControlsProps {
  isActive: boolean
  onToggle: () => void
  onReset: () => void
  onSkip: () => void
  mode: 'work' | 'shortBreak' | 'longBreak'
}

export default function TimerControls({
  isActive,
  onToggle,
  onReset,
  onSkip,
  mode,
}: TimerControlsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <button
        onClick={onToggle}
        className={`px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg ${
          isActive
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
        aria-label={isActive ? 'Pause timer' : 'Start timer'}
      >
        {isActive ? '⏸️ Pause' : '▶️ Start'}
      </button>

      <button
        onClick={onReset}
        className="px-8 py-4 rounded-full font-semibold text-lg bg-gray-500 hover:bg-gray-600 text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        aria-label="Reset timer"
      >
        🔄 Reset
      </button>

      <button
        onClick={onSkip}
        className="px-8 py-4 rounded-full font-semibold text-lg bg-blue-500 hover:bg-blue-600 text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        aria-label="Skip to next session"
      >
        ⏭️ Skip
      </button>
    </div>
  )
}
