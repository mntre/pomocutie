'use client'

interface SessionStats {
  completedPomodoros: number
  totalWorkMinutes: number
  currentStreak: number
  lastSessionDate: string
}

interface StatisticsProps {
  stats: SessionStats
  onReset: () => void
}

export default function Statistics({ stats, onReset }: StatisticsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          📊 Your Statistics
        </h2>
        <button
          onClick={onReset}
          className="text-sm px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 text-red-700 dark:text-red-200 transition-colors"
          aria-label="Reset statistics"
        >
          Reset Stats
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon="🍅"
          label="Total Pomodoros"
          value={stats.completedPomodoros}
          color="primary"
        />
        <StatCard
          icon="⏱️"
          label="Study Minutes"
          value={stats.totalWorkMinutes}
          color="secondary"
        />
        <StatCard
          icon="🔥"
          label="Current Streak"
          value={stats.currentStreak}
          color="accent"
        />
      </div>

      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        Last session: {stats.lastSessionDate}
      </div>
    </div>
  )
}

interface StatCardProps {
  icon: string
  label: string
  value: number
  color: 'primary' | 'secondary' | 'accent'
}

function StatCard({ icon, label, value, color }: StatCardProps) {
  const colorClasses = {
    primary: 'bg-primary-light dark:bg-primary-dark/30 text-primary-dark dark:text-primary-light',
    secondary: 'bg-secondary-light dark:bg-secondary-dark/30 text-secondary-dark dark:text-secondary-light',
    accent: 'bg-accent-light dark:bg-accent-dark/30 text-accent-dark dark:text-accent-light',
  }

  return (
    <div className={`${colorClasses[color]} rounded-2xl p-6 text-center transition-transform hover:scale-105`}>
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm font-medium opacity-80">{label}</div>
    </div>
  )
}
