export const HeroIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center animate-float">
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
      {/* Background circles for depth */}
      <circle cx="200" cy="150" r="120" fill="#dcfce7" className="animate-pulse-slow" />
      <circle cx="200" cy="150" r="80" fill="#bbf7d0" className="animate-pulse-slow animate-delay-1000" />

      {/* Main car */}
      <g className="animate-bounce-subtle">
        <rect x="120" y="120" width="160" height="60" rx="30" fill="#16a34a" />
        <rect x="130" y="110" width="140" height="40" rx="20" fill="#22c55e" />

        {/* Windows */}
        <rect x="140" y="115" width="30" height="25" rx="5" fill="#e0f2fe" opacity="0.8" />
        <rect x="180" y="115" width="40" height="25" rx="5" fill="#e0f2fe" opacity="0.8" />
        <rect x="230" y="115" width="30" height="25" rx="5" fill="#e0f2fe" opacity="0.8" />

        {/* Wheels */}
        <circle cx="150" cy="180" r="15" fill="#374151" />
        <circle cx="250" cy="180" r="15" fill="#374151" />
        <circle cx="150" cy="180" r="8" fill="#6b7280" />
        <circle cx="250" cy="180" r="8" fill="#6b7280" />
      </g>

      {/* Passengers (dots) */}
      <circle cx="155" cy="127" r="3" fill="#1f2937" className="animate-pulse" />
      <circle cx="200" cy="127" r="3" fill="#1f2937" className="animate-pulse animate-delay-500" />
      <circle cx="245" cy="127" r="3" fill="#1f2937" className="animate-pulse animate-delay-1000" />

      {/* Eco elements */}
      <g className="animate-sway">
        <path d="M80 80 Q85 70 90 80 Q85 90 80 80" fill="#22c55e" />
        <path d="M85 85 Q90 75 95 85 Q90 95 85 85" fill="#16a34a" />
      </g>

      <g className="animate-sway animate-delay-1000">
        <path d="M310 70 Q315 60 320 70 Q315 80 310 70" fill="#22c55e" />
        <path d="M315 75 Q320 65 325 75 Q320 85 315 75" fill="#16a34a" />
      </g>

      {/* CO2 reduction indicator */}
      <g className="animate-fade-in-up animate-delay-2000">
        <rect x="160" y="60" width="80" height="25" rx="12" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" />
        <text x="200" y="75" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="bold">
          -75% CO₂
        </text>
      </g>
    </svg>
  </div>
)