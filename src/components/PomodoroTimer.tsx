'use client'

import { useState, useEffect, useCallback } from 'react'
import CharacterDisplay from './CharacterDisplay'
import TimerDisplay from './TimerDisplay'
import TimerControls from './TimerControls'
import TaskSelector from './TaskSelector'
import Statistics from './Statistics'
import MotivationalQuote from './MotivationalQuote'
import ConfirmModal from './ConfirmModal'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useNotification } from '@/hooks/useNotification'
import { playNotificationSound } from '@/utils/sound'

type TimerMode = 'work' | 'shortBreak' | 'longBreak'

interface SessionStats {
  completedPomodoros: number
  totalWorkMinutes: number
  currentStreak: number
  lastSessionDate: string
}

const TIMER_DURATIONS = {
  work: 25 * 60, // 25 minutes
  shortBreak: 5 * 60, // 5 minutes
  longBreak: 15 * 60, // 15 minutes
}

export default function PomodoroTimer() {
  const [mode, setMode] = useState<TimerMode>('work')
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATIONS.work)
  const [isActive, setIsActive] = useState(false)
  const [pomodoroCount, setPomodoroCount] = useState(0)
  const [currentTask, setCurrentTask] = useState('Study Session')
  const [showResetModal, setShowResetModal] = useState(false)
  
  const [stats, setStats] = useLocalStorage<SessionStats>('pomodoroStats', {
    completedPomodoros: 0,
    totalWorkMinutes: 0,
    currentStreak: 0,
    lastSessionDate: new Date().toDateString(),
  })

  const { requestPermission, showNotification } = useNotification()

  // Request notification permission on mount
  useEffect(() => {
    requestPermission()
  }, [requestPermission])

  const handleTimerComplete = useCallback(() => {
    setIsActive(false)
    playNotificationSound()

    if (mode === 'work') {
      const newCount = pomodoroCount + 1
      setPomodoroCount(newCount)
      
      // Update statistics
      const today = new Date().toDateString()
      const isNewDay = stats.lastSessionDate !== today
      
      setStats({
        completedPomodoros: stats.completedPomodoros + 1,
        totalWorkMinutes: stats.totalWorkMinutes + 25,
        currentStreak: isNewDay ? 1 : stats.currentStreak + 1,
        lastSessionDate: today,
      })

      showNotification(
        'Work Session Complete! 🎉',
        `Great job! Time for a ${newCount % 4 === 0 ? 'long' : 'short'} break.`
      )

      // Determine next break type
      if (newCount % 4 === 0) {
        setMode('longBreak')
        setTimeLeft(TIMER_DURATIONS.longBreak)
      } else {
        setMode('shortBreak')
        setTimeLeft(TIMER_DURATIONS.shortBreak)
      }
    } else {
      showNotification(
        'Break Complete! ✨',
        'Ready to get back to work? You got this!'
      )
      setMode('work')
      setTimeLeft(TIMER_DURATIONS.work)
    }
  }, [mode, pomodoroCount, stats, setStats, showNotification])

  // Timer countdown logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      handleTimerComplete()
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft, handleTimerComplete])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(TIMER_DURATIONS[mode])
  }

  const skipSession = () => {
    setIsActive(false)
    if (mode === 'work') {
      setMode('shortBreak')
      setTimeLeft(TIMER_DURATIONS.shortBreak)
    } else {
      setMode('work')
      setTimeLeft(TIMER_DURATIONS.work)
    }
  }

  const resetStats = () => {
    setShowResetModal(true)
  }

  const confirmResetStats = () => {
    setStats({
      completedPomodoros: 0,
      totalWorkMinutes: 0,
      currentStreak: 0,
      lastSessionDate: new Date().toDateString(),
    })
    setPomodoroCount(0)
    setShowResetModal(false)
  }

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
        <CharacterDisplay mode={mode} isActive={isActive} />
        
        <TaskSelector 
          currentTask={currentTask} 
          onTaskChange={setCurrentTask}
          mode={mode}
        />

        <TimerDisplay
          timeLeft={timeLeft}
          mode={mode}
          isActive={isActive}
        />

        <TimerControls
          isActive={isActive}
          onToggle={toggleTimer}
          onReset={resetTimer}
          onSkip={skipSession}
          mode={mode}
        />

        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light dark:bg-primary-dark/30 rounded-full">
            <span className="text-2xl">🍅</span>
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              {pomodoroCount} Pomodoro{pomodoroCount !== 1 ? 's' : ''} Today
            </span>
          </div>
        </div>
      </div>

      <MotivationalQuote />

      <Statistics stats={stats} onReset={resetStats} />

      <ConfirmModal
        isOpen={showResetModal}
        title="Reset Statistics?"
        message="This will permanently delete all your Pomodoro statistics and progress. This action cannot be undone."
        confirmText="Yes, Reset"
        cancelText="Cancel"
        onConfirm={confirmResetStats}
        onCancel={() => setShowResetModal(false)}
        type="danger"
      />
    </div>
  )
}
