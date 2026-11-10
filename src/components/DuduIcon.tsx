// Dudu - The Brown Panda Character
export default function DuduIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 120 140" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brown Panda Body */}
      <g>
        {/* Left Ear */}
        <circle cx="30" cy="35" r="18" fill="#6B4423" />
        <circle cx="30" cy="35" r="12" fill="#8B6F47" />
        
        {/* Right Ear */}
        <circle cx="90" cy="35" r="18" fill="#6B4423" />
        <circle cx="90" cy="35" r="12" fill="#8B6F47" />
        
        {/* Head */}
        <ellipse cx="60" cy="60" rx="45" ry="48" fill="#A0826D" />
        
        {/* Face Details */}
        {/* Left Eye */}
        <circle cx="45" cy="60" r="5" fill="#3B2414" />
        
        {/* Right Eye */}
        <circle cx="75" cy="60" r="5" fill="#3B2414" />
        
        {/* Snout */}
        <ellipse cx="60" cy="75" rx="15" ry="12" fill="#C9A88B" />
        
        {/* Cute Smile */}
        <path 
          d="M 55 78 Q 60 82 65 78" 
          stroke="#3B2414" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round"
        />
        
        {/* Nose */}
        <ellipse cx="60" cy="73" rx="4" ry="3" fill="#3B2414" />
        
        {/* Blush */}
        <ellipse cx="85" cy="72" rx="8" ry="6" fill="#FFB6C1" opacity="0.5" />
        
        {/* Body */}
        <ellipse cx="60" cy="115" rx="38" ry="32" fill="#A0826D" />
        
        {/* Left Arm - reaching out */}
        <ellipse 
          cx="30" 
          cy="105" 
          rx="12" 
          ry="28" 
          fill="#A0826D"
          transform="rotate(-20 30 105)"
        />
        
        {/* Right Arm */}
        <ellipse 
          cx="90" 
          cy="105" 
          rx="12" 
          ry="28" 
          fill="#A0826D"
          transform="rotate(20 90 105)"
        />
        
        {/* Belly Spot */}
        <ellipse cx="60" cy="115" rx="22" ry="18" fill="#C9A88B" opacity="0.6" />
        
        {/* Tail */}
        <circle cx="85" cy="130" r="10" fill="#6B4423" />
        
        {/* Left Foot */}
        <ellipse cx="45" cy="135" rx="14" ry="10" fill="#8B6F47" />
        
        {/* Right Foot */}
        <ellipse cx="75" cy="135" rx="14" ry="10" fill="#8B6F47" />
      </g>
    </svg>
  )
}
