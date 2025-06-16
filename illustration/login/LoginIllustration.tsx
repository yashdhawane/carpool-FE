export const LoginIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
      {/* Background circles */}
      <circle cx="200" cy="150" r="100" fill="#dcfce7" className="animate-pulse-slow" />
      <circle cx="200" cy="150" r="70" fill="#bbf7d0" className="animate-pulse-slow animate-delay-500" />

      {/* Login shield/security */}
      <g className="animate-float">
        <path
          d="M200 80 L240 100 L240 180 Q240 210 200 220 Q160 210 160 180 L160 100 Z"
          fill="#16a34a"
          className="drop-shadow-lg"
        />
        <path d="M200 90 L230 105 L230 175 Q230 200 200 210 Q170 200 170 175 L170 105 Z" fill="#22c55e" />

        {/* Lock icon */}
        <rect x="185" y="140" width="30" height="25" rx="3" fill="#ffffff" />
        <circle cx="200" cy="130" r="8" fill="none" stroke="#ffffff" strokeWidth="3" />
        <circle cx="200" cy="150" r="2" fill="#16a34a" />
      </g>

      {/* Floating eco elements */}
      <g className="animate-sway">
        <path d="M120 100 Q125 90 130 100 Q125 110 120 100" fill="#22c55e" />
        <path d="M125 105 Q130 95 135 105 Q130 115 125 105" fill="#16a34a" />
      </g>

      <g className="animate-sway animate-delay-1000">
        <path d="M270 120 Q275 110 280 120 Q275 130 270 120" fill="#22c55e" />
        <path d="M275 125 Q280 115 285 125 Q280 135 275 125" fill="#16a34a" />
      </g>

      {/* Welcome message */}
      <g className="animate-fade-in-up animate-delay-1500">
        <rect x="140" y="50" width="120" height="20" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
        <text x="200" y="62" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="bold">
          Welcome Back!
        </text>
      </g>

      {/* Connected users */}
      <circle cx="100" cy="200" r="8" fill="#3b82f6" className="animate-bounce-subtle" />
      <circle cx="300" cy="180" r="8" fill="#8b5cf6" className="animate-bounce-subtle animate-delay-300" />
      <circle cx="80" cy="250" r="8" fill="#ef4444" className="animate-bounce-subtle animate-delay-600" />

      {/* Connection lines */}
      <path
        d="M108 200 Q150 190 192 200"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
        className="animate-dash"
      />
      <path
        d="M208 200 Q250 185 292 180"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
        className="animate-dash animate-delay-500"
      />
    </svg>
  </div>
)