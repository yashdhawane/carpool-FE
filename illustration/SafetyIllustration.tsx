export const SafetyIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 300 300" className="w-full h-full max-w-sm">
      {/* Shield background */}
      <path
        d="M150 50 L200 80 L200 180 Q200 220 150 240 Q100 220 100 180 L100 80 Z"
        fill="#dcfce7"
        className="animate-pulse-slow"
      />
      <path d="M150 60 L190 85 L190 175 Q190 210 150 225 Q110 210 110 175 L110 85 Z" fill="#22c55e" />

      {/* Checkmark */}
      <g className="animate-draw-check animate-delay-1000">
        <path
          d="M125 150 L140 165 L175 130"
          stroke="white"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Stars around shield */}
      <g className="animate-twinkle">
        <path d="M80 100 L85 110 L95 110 L87 117 L90 127 L80 120 L70 127 L73 117 L65 110 L75 110 Z" fill="#fbbf24" />
      </g>
      <g className="animate-twinkle animate-delay-500">
        <path
          d="M220 120 L225 130 L235 130 L227 137 L230 147 L220 140 L210 147 L213 137 L205 130 L215 130 Z"
          fill="#fbbf24"
        />
      </g>
      <g className="animate-twinkle animate-delay-1000">
        <path
          d="M100 220 L105 230 L115 230 L107 237 L110 247 L100 240 L90 247 L93 237 L85 230 L95 230 Z"
          fill="#fbbf24"
        />
      </g>

      {/* User avatars */}
      <circle cx="120" cy="200" r="15" fill="#3b82f6" className="animate-bounce-subtle" />
      <circle cx="150" cy="210" r="15" fill="#8b5cf6" className="animate-bounce-subtle animate-delay-300" />
      <circle cx="180" cy="200" r="15" fill="#ef4444" className="animate-bounce-subtle animate-delay-600" />
    </svg>
  </div>
)
