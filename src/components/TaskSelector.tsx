'use client'

interface TaskSelectorProps {
  currentTask: string
  onTaskChange: (task: string) => void
  mode: 'work' | 'shortBreak' | 'longBreak'
}

const ACCOUNTING_TASKS = [
  'Study Session',
  'Financial Accounting',
  'Tax Preparation Practice',
  'Audit Review',
  'Cost Accounting',
  'Management Accounting',
  'Accounting Information Systems',
  'Financial Statement Analysis',
  'CPA Exam Preparation',
  'Bookkeeping Practice',
  'Excel Formulas Practice',
  'Case Study Analysis',
]

export default function TaskSelector({ currentTask, onTaskChange, mode }: TaskSelectorProps) {
  if (mode !== 'work') return null

  return (
    <div className="mb-8">
      <label 
        htmlFor="task-selector" 
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        📋 Current Task:
      </label>
      <select
        id="task-selector"
        value={currentTask}
        onChange={(e) => onTaskChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border-2 border-primary-light dark:border-primary-dark bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary-dark dark:focus:ring-primary-light transition-all"
        aria-label="Select current study task"
      >
        {ACCOUNTING_TASKS.map((task) => (
          <option key={task} value={task}>
            {task}
          </option>
        ))}
      </select>
    </div>
  )
}
