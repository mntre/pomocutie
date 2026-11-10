// Bubu - The White Bear Character
export default function BubuIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 120 140" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* White Bear Body */}
      <g>
        {/* Left Ear */}
        <circle cx="30" cy="35" r="18" fill="#E8E8E8" />
        <circle cx="30" cy="35" r="12" fill="#FFFFFF" />
        
        {/* Right Ear */}
        <circle cx="90" cy="35" r="18" fill="#E8E8E8" />
        <circle cx="90" cy="35" r="12" fill="#FFFFFF" />
        
        {/* Head */}
        <ellipse cx="60" cy="60" rx="45" ry="48" fill="#FFFFFF" />
        <ellipse cx="60" cy="60" rx="44" ry="47" fill="#FEFEFE" stroke="#E5E5E5" strokeWidth="0.5" />
        
        {/* Face Details */}
        {/* Left Eye */}
        <circle cx="45" cy="60" r="5" fill="#3B2414" />
        
        {/* Right Eye */}
        <circle cx="75" cy="60" r="5" fill="#3B2414" />
        
        {/* Snout */}
        <ellipse cx="60" cy="75" rx="15" ry="12" fill="#FFF5F5" />
        
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
        
        {/* Body */}
        <ellipse cx="60" cy="115" rx="38" ry="32" fill="#FFFFFF" />
        <ellipse cx="60" cy="115" rx="37" ry="31" fill="#FEFEFE" stroke="#E5E5E5" strokeWidth="0.5" />
        
        {/* Left Arm */}
        <ellipse 
          cx="30" 
          cy="105" 
          rx="12" 
          ry="28" 
          fill="#FFFFFF"
          transform="rotate(-20 30 105)"
        />
        
        {/* Right Arm - reaching out */}
        <ellipse 
          cx="90" 
          cy="105" 
          rx="12" 
          ry="28" 
          fill="#FFFFFF"
          transform="rotate(20 90 105)"
        />
        
        {/* Belly Spot */}
        <ellipse cx="60" cy="115" rx="22" ry="18" fill="#F5F5F5" opacity="0.6" />
        
        {/* Left Foot */}
        <ellipse cx="45" cy="135" rx="14" ry="10" fill="#E8E8E8" />
        
        {/* Right Foot */}
        <ellipse cx="75" cy="135" rx="14" ry="10" fill="#E8E8E8" />
      </g>
    </svg>
  )
}
