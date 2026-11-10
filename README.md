# 🐻🐼 Pomodoro Timer for Accountancy Students

A beautiful, feature-rich Pomodoro timer web application designed specifically for accountancy students, featuring adorable Bubu and Dudu characters as mascots.

## ✨ Features

### 🍅 Core Pomodoro Functionality
- **25-minute work sessions** - Focused study time
- **5-minute short breaks** - Quick rest periods
- **15-minute long breaks** - Extended rest after 4 Pomodoros
- **Visual countdown timer** with progress bar
- **Audio notifications** when sessions complete
- **Browser notifications** (with permission)
- **Pause/Resume** functionality
- **Reset timer** to restart current session
- **Skip session** to move to next phase

### 📚 Accountancy Student Features
- **Task selector** with accounting-specific topics:
  - Financial Accounting
  - Tax Preparation Practice
  - Audit Review
  - Cost Accounting
  - Management Accounting
  - CPA Exam Preparation
  - And more!
- **Motivational quotes** tailored for accounting students
- **Study statistics tracking**:
  - Total Pomodoros completed
  - Total study minutes
  - Current streak counter
  - Last session date

### 🎨 Design & User Experience
- **Bubu & Dudu characters** with different states:
  - 🐻 Bubu appears during work sessions
  - 🐼 Dudu appears during breaks
  - Character animations based on timer state
- **Soft pastel color scheme** matching Bubu & Dudu aesthetic
- **Dark mode support** with theme toggle
- **Responsive design** - works on mobile and desktop
- **Smooth animations** and transitions
- **Accessibility features** (ARIA labels, keyboard navigation)

### 💾 Data Persistence
- **Local storage** saves your progress between sessions
- Statistics persist across browser sessions
- Current task and preferences remembered

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository:
```bash
cd c:/Users/charvin.penaverde/Desktop/pomodoro
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the application:
```bash
vercel
```

4. Follow the prompts to configure your deployment.

5. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your Git repository

5. Vercel will automatically detect Next.js and configure build settings

6. Click "Deploy"

Your app will be live at a URL like: `https://your-project-name.vercel.app`

## 📱 Usage Instructions

### Starting a Study Session

1. **Select your task** from the dropdown menu (only visible during work sessions)
2. **Click "▶️ Start"** to begin your 25-minute Pomodoro
3. **Stay focused** - Bubu is studying with you! 🐻📚
4. When the timer completes, you'll hear a notification sound

### Taking Breaks

1. After completing a work session, the timer automatically switches to break mode
2. **Short breaks** (5 min) occur after Pomodoros 1, 2, and 3
3. **Long breaks** (15 min) occur after every 4th Pomodoro
4. Dudu appears during breaks to remind you to relax! 🐼☕

### Tracking Progress

- View your **completed Pomodoros** counter at the bottom of the timer
- Check your **statistics** below the motivational quote:
  - Total Pomodoros completed
  - Total study minutes
  - Current streak
- Statistics are saved and persist between sessions

### Customization

- **Dark Mode**: Click the sun/moon icon in the top-right corner
- **New Quote**: Click "✨ New Quote" to get fresh motivation
- **Reset Stats**: Use the "Reset Stats" button if you want to start fresh

### Keyboard Shortcuts

The app is fully keyboard accessible:
- `Tab` to navigate between controls
- `Enter` or `Space` to activate buttons
- `Escape` to close dialogs (if any)

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Notifications**: Web Notifications API
- **Audio**: Web Audio API
- **Storage**: Local Storage API
- **Deployment**: Vercel

## 📂 Project Structure

```
pomodoro/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── PomodoroTimer.tsx   # Main timer component
│   │   ├── CharacterDisplay.tsx # Bubu & Dudu character
│   │   ├── TimerDisplay.tsx    # Timer countdown display
│   │   ├── TimerControls.tsx   # Start/Pause/Reset buttons
│   │   ├── TaskSelector.tsx    # Accounting task dropdown
│   │   ├── Statistics.tsx      # Stats display
│   │   ├── MotivationalQuote.tsx # Quote generator
│   │   └── ThemeToggle.tsx     # Dark mode toggle
│   ├── hooks/
│   │   ├── useLocalStorage.ts  # Local storage hook
│   │   └── useNotification.ts  # Notification hook
│   └── utils/
│       └── sound.ts            # Audio notification utility
├── public/
│   └── favicon.ico             # App icon
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## 🎨 Character Attribution

This application uses Bubu and Dudu as mascot characters represented through emojis:
- 🐻 Bear emoji represents Bubu during work sessions
- 🐼 Panda emoji represents Dudu during break sessions

For a production version, you may want to:
1. Purchase official Bubu & Dudu character licenses
2. Create custom SVG illustrations
3. Use royalty-free character illustrations with proper attribution

## 🔧 Customization

### Changing Timer Durations

Edit the `TIMER_DURATIONS` constant in `src/components/PomodoroTimer.tsx`:

```typescript
const TIMER_DURATIONS = {
  work: 25 * 60,        // 25 minutes
  shortBreak: 5 * 60,   // 5 minutes
  longBreak: 15 * 60,   // 15 minutes
}
```

### Adding More Tasks

Edit the `ACCOUNTING_TASKS` array in `src/components/TaskSelector.tsx`:

```typescript
const ACCOUNTING_TASKS = [
  'Your Custom Task',
  // ... existing tasks
]
```

### Customizing Colors

Edit the theme colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    light: '#FFE5E5',
    DEFAULT: '#FFB3BA',
    dark: '#FF8FA3',
  },
  // ... other colors
}
```

## 🐛 Troubleshooting

### Timer not starting
- Check if JavaScript is enabled in your browser
- Try refreshing the page
- Clear browser cache and local storage

### Notifications not showing
- Click "Allow" when prompted for notification permission
- Check browser notification settings
- Ensure notifications are enabled for the site

### Statistics not saving
- Ensure local storage is enabled in your browser
- Check if you're in private/incognito mode (local storage may be disabled)

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! Suggestions and improvements are welcome.

## 💖 Acknowledgments

- Built with love for accountancy students
- Inspired by the Pomodoro Technique by Francesco Cirillo
- Character inspiration from Bubu and Dudu

---

**Happy studying! You've got this! 📚✨**

Made with 💕 for accountancy students everywhere 🐻🐼
