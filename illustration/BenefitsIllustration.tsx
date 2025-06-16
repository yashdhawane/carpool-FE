export const BenefitsIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
      {/* Earth/Globe */}
      <circle cx="200" cy="150" r="80" fill="#22c55e" className="animate-pulse-slow" />
      <circle cx="200" cy="150" r="70" fill="#16a34a" />

      {/* Continents */}
      <path
        d="M160 120 Q180 110 200 120 Q220 115 240 125 Q235 140 220 145 Q200 150 180 145 Q165 140 160 120"
        fill="#15803d"
      />
      <path d="M170 160 Q190 155 210 160 Q225 165 230 180 Q215 185 200 180 Q185 175 170 160" fill="#15803d" />

      {/* Money savings */}
      <g className="animate-bounce-subtle animate-delay-500">
        <circle cx="120" cy="100" r="25" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
        <text x="120" y="107" textAnchor="middle" fontSize="16" fill="#f59e0b" fontWeight="bold">
          $
        </text>
        <path
          d="M95 85 L105 75 M135 75 L145 85"
          stroke="#f59e0b"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
      </g>

      {/* People connection */}
      <g className="animate-fade-in-up animate-delay-1000">
        <circle cx="300" cy="120" r="12" fill="#3b82f6" />
        <circle cx="320" cy="140" r="12" fill="#8b5cf6" />
        <circle cx="280" cy="140" r="12" fill="#ef4444" />
        <path d="M300 132 Q310 135 320 128 M300 132 Q290 135 280 128" stroke="#6b7280" strokeWidth="2" fill="none" />
      </g>

      {/* Green leaves floating */}
      <g className="animate-float animate-delay-1500">
        <path d="M100 200 Q105 190 110 200 Q105 210 100 200" fill="#22c55e" />
        <path d="M320 200 Q325 190 330 200 Q325 210 320 200" fill="#22c55e" />
        <path d="M150 250 Q155 240 160 250 Q155 260 150 250" fill="#16a34a" />
      </g>

      {/* Connecting lines */}
      <path
        d="M145 125 Q170 140 195 130"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        className="animate-dash"
      />
      <path
        d="M275 135 Q250 145 225 140"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5,5"
        className="animate-dash animate-delay-500"
      />
    </svg>
  </div>
)