'use client'

export function playNotificationSound() {
  try {
    // Check if Web Audio API is supported
    if (!window.AudioContext && !(window as any).webkitAudioContext) {
      console.warn('Web Audio API not supported')
      return
    }

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    
    // Create a bell-like sound with multiple harmonics
    const playBellNote = (frequency: number, startTime: number, duration: number, volume: number) => {
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = frequency
      oscillator.type = 'sine'

      // Bell envelope - quick attack, slow decay
      gainNode.gain.setValueAtTime(volume, startTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

      oscillator.start(startTime)
      oscillator.stop(startTime + duration)
    }

    // Create a pleasant bell sound with harmonics (like a notification chime)
    const baseTime = audioContext.currentTime
    const baseFreq = 800 // Base frequency
    
    // First chime (ding) - Louder and longer
    playBellNote(baseFreq, baseTime, 1.5, 0.5)           // Fundamental
    playBellNote(baseFreq * 2, baseTime, 1.2, 0.25)     // Octave
    playBellNote(baseFreq * 3, baseTime, 1.0, 0.15)     // Fifth
    
    // Second chime (dong) - Louder and longer, slightly delayed
    playBellNote(baseFreq * 0.75, baseTime + 0.3, 2.0, 0.45)    // Lower fundamental
    playBellNote(baseFreq * 1.5, baseTime + 0.3, 1.5, 0.22)     // Octave
    playBellNote(baseFreq * 2.25, baseTime + 0.3, 1.2, 0.12)    // Fifth
    
    // Third chime (ding) - for longer duration
    playBellNote(baseFreq * 1.2, baseTime + 1.0, 1.5, 0.4)      // Higher note
    playBellNote(baseFreq * 2.4, baseTime + 1.0, 1.2, 0.2)      // Octave
    
  } catch (error) {
    console.error('Error playing notification sound:', error)
  }
}
