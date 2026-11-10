'use client'

interface CharacterDisplayProps {
  mode: 'work' | 'shortBreak' | 'longBreak'
  isActive: boolean
}

export default function CharacterDisplay({ mode, isActive }: CharacterDisplayProps) {
  const getCharacterEmoji = () => {
    if (mode === 'work') {
      return isActive ? '🐻📚' : '🐻💭'
    } else {
      return isActive ? '🐼☕' : '🐼✨'
    }
  }

  const getCharacterMessage = () => {
    if (mode === 'work') {
      return isActive 
        ? 'Bubu is studying with you! Stay focused! 💪'
        : 'Bubu is ready to study! Click start! 📖'
    } else {
      return isActive
        ? 'Dudu says: Take a good break! 🌸'
        : 'Dudu is waiting! Time to relax! ☕'
    }
  }

  return (
    <div className="text-center mb-8">
      <div className={`text-8xl mb-4 ${isActive ? 'animate-bounce-soft' : ''}`}>
        {getCharacterEmoji()}
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
        {getCharacterMessage()}
      </p>
    </div>
  )
}
