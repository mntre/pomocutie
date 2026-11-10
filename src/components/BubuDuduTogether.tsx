// Bubu and Dudu Together - Holding Hands
export default function BubuDuduTogether({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 240 140" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Baby Blue Background */}
      <rect width="240" height="140" fill="#89CFF0" opacity="0.3" rx="20" />
      
      {/* Bubu - White Bear (Left) */}
      <g>
        {/* Left Ear */}
        <circle cx="30" cy="25" r="14" fill="#E8E8E8" />
        <circle cx="30" cy="25" r="9" fill="#FFFFFF" />
        
        {/* Right Ear */}
        <circle cx="70" cy="25" r="14" fill="#E8E8E8" />
        <circle cx="70" cy="25" r="9" fill="#FFFFFF" />
        
        {/* Head */}
        <ellipse cx="50" cy="45" rx="35" ry="38" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="0.5"/>
        
        {/* Eyes */}
        <circle cx="40" cy="45" r="4" fill="#3B2414" />
        <circle cx="60" cy="45" r="4" fill="#3B2414" />
        
        {/* Snout */}
        <ellipse cx="50" cy="56" rx="12" ry="10" fill="#FFF5F5" />
        
        {/* Smile */}
        <path d="M 46 58 Q 50 61 54 58" stroke="#3B2414" strokeWidth="2" fill="none" strokeLinecap="round"/>
        
        {/* Nose */}
        <ellipse cx="50" cy="55" rx="3" ry="2.5" fill="#3B2414" />
        
        {/* Body */}
        <ellipse cx="50" cy="95" rx="30" ry="26" fill="#FFFFFF" stroke="#E5E5E5" strokeWidth="0.5"/>
        
        {/* Arms */}
        <ellipse cx="25" cy="85" rx="10" ry="22" fill="#FFFFFF" transform="rotate(-15 25 85)"/>
        <ellipse cx="75" cy="85" rx="10" ry="22" fill="#FFFFFF" transform="rotate(15 75 85)"/>
        
        {/* Feet */}
        <ellipse cx="38" cy="115" rx="12" ry="8" fill="#E8E8E8" />
        <ellipse cx="62" cy="115" rx="12" ry="8" fill="#E8E8E8" />
      </g>
      
      {/* Dudu - Brown Panda (Right) */}
      <g transform="translate(100, 0)">
        {/* Left Ear */}
        <circle cx="30" cy="25" r="14" fill="#6B4423" />
        
        {/* Right Ear */}
        <circle cx="70" cy="25" r="14" fill="#6B4423" />
        
        {/* Head */}
        <ellipse cx="50" cy="45" rx="35" ry="38" fill="#A0826D" />
        
        {/* Eyes */}
        <circle cx="40" cy="45" r="4" fill="#3B2414" />
        <circle cx="60" cy="45" r="4" fill="#3B2414" />
        
        {/* Snout */}
        <ellipse cx="50" cy="56" rx="12" ry="10" fill="#C9A88B" />
        
        {/* Smile */}
        <path d="M 46 58 Q 50 61 54 58" stroke="#3B2414" strokeWidth="2" fill="none" strokeLinecap="round"/>
        
        {/* Nose */}
        <ellipse cx="50" cy="55" rx="3" ry="2.5" fill="#3B2414" />
        
        {/* Blush */}
        <ellipse cx="68" cy="52" rx="6" ry="5" fill="#FFB6C1" opacity="0.6" />
        
        {/* Body */}
        <ellipse cx="50" cy="95" rx="30" ry="26" fill="#A0826D" />
        
        {/* Arms */}
        <ellipse cx="25" cy="85" rx="10" ry="22" fill="#A0826D" transform="rotate(-15 25 85)"/>
        <ellipse cx="75" cy="85" rx="10" ry="22" fill="#A0826D" transform="rotate(15 75 85)"/>
        
        {/* Tail */}
        <circle cx="70" cy="105" r="8" fill="#6B4423" />
        
        {/* Feet */}
        <ellipse cx="38" cy="115" rx="12" ry="8" fill="#8B6F47" />
        <ellipse cx="62" cy="115" rx="12" ry="8" fill="#8B6F47" />
      </g>
      
      {/* Holding Hands Connection */}
      <ellipse cx="120" cy="85" rx="8" ry="18" fill="#F5DEB3" opacity="0.6" />
      
      {/* Heart Symbol Above */}
      <g transform="translate(110, 5)">
        <path 
          d="M 10 8 C 10 5 7 3 5 5 C 3 3 0 5 0 8 C 0 12 5 15 5 15 C 5 15 10 12 10 8 Z" 
          fill="#FF69B4" 
          opacity="0.7"
        />
      </g>
    </svg>
  )
}
