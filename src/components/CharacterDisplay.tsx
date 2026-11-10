'use client'

import Image from 'next/image'

interface CharacterDisplayProps {
  mode: 'work' | 'shortBreak' | 'longBreak'
  isActive: boolean
}

export default function CharacterDisplay({ mode, isActive }: CharacterDisplayProps) {
  const getCharacterMessage = () => {
    if (mode === 'work') {
      return isActive 
        ? 'Bubu is studying with you! Stay focused! 💪'
        : 'Bubu is ready to study! Click start! 📖'
    } else {
      return isActive
        ? 'Time to rest with Bubu & Dudu! 🌸'
        : 'Ready for a break? Bubu & Dudu are waiting! ☕'
    }
  }

  const renderCharacter = () => {
    if (mode === 'work') {
      // Show Bubu studying during work sessions
      return (
        <div className={`w-48 h-48 mx-auto relative ${isActive ? 'animate-float' : ''}`}>
          <Image 
            src="/bubu-studying.jpg"
            alt="Bubu studying"
            width={192}
            height={192}
            className="w-full h-full object-contain drop-shadow-lg rounded-2xl"
            priority
          />
        </div>
      )
    } else {
      // Show Bubu and Dudu together during breaks
      return (
        <div className={`w-56 h-56 mx-auto relative ${isActive ? 'animate-bounce-soft' : ''}`}>
          <Image 
            src="/bubu-dudu-together.jpg"
            alt="Bubu and Dudu together"
            width={224}
            height={224}
            className="w-full h-full object-contain drop-shadow-lg rounded-2xl"
            priority
          />
        </div>
      )
    }
  }

  return (
    <div className="text-center mb-8">
      <div className="mb-4">
        {renderCharacter()}
      </div>
      <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
        {getCharacterMessage()}
      </p>
    </div>
  )
}
