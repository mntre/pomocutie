'use client'

import { useState, useEffect } from 'react'

const ACCOUNTING_QUOTES = [
  {
    text: "Accounting is the language of business. Master it, and you'll understand the world.",
    author: "Warren Buffett"
  },
  {
    text: "Accounting does not make corporate earnings or balance sheets more volatile. Accounting just increases the transparency.",
    author: "Diane Garnick"
  },
  {
    text: "The goal is to turn data into information, and information into insight.",
    author: "Carly Fiorina"
  },
  {
    text: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    text: "In the world of accounting, accuracy is not just important—it's everything.",
    author: "Anonymous"
  },
  {
    text: "Every accomplishment starts with the decision to try. Keep going!",
    author: "John F. Kennedy"
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss"
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn"
  },
  {
    text: "Your future self will thank you for the work you put in today.",
    author: "Anonymous"
  },
]

export default function MotivationalQuote() {
  const [quote, setQuote] = useState(ACCOUNTING_QUOTES[0])

  useEffect(() => {
    const randomQuote = ACCOUNTING_QUOTES[Math.floor(Math.random() * ACCOUNTING_QUOTES.length)]
    setQuote(randomQuote)
  }, [])

  const getNewQuote = () => {
    let newQuote
    do {
      newQuote = ACCOUNTING_QUOTES[Math.floor(Math.random() * ACCOUNTING_QUOTES.length)]
    } while (newQuote.text === quote.text && ACCOUNTING_QUOTES.length > 1)
    setQuote(newQuote)
  }

  return (
    <div className="bg-gradient-to-r from-primary-light to-secondary-light dark:from-primary-dark/30 dark:to-secondary-dark/30 rounded-3xl shadow-lg p-8 text-center">
      <div className="text-4xl mb-4">💡</div>
      <blockquote className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 mb-4 italic">
        "{quote.text}"
      </blockquote>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        — {quote.author}
      </p>
      <button
        onClick={getNewQuote}
        className="px-6 py-2 rounded-full bg-white dark:bg-gray-800 text-primary-dark dark:text-primary-light font-medium hover:shadow-md transition-all transform hover:scale-105 active:scale-95"
        aria-label="Get new motivational quote"
      >
        ✨ New Quote
      </button>
    </div>
  )
}
