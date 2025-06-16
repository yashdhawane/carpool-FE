export const MobileAppIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 200 350" className="w-full h-full max-w-xs">
      {/* Phone outline */}
      <rect x="20" y="20" width="160" height="310" rx="25" fill="#1f2937" />
      <rect x="30" y="40" width="140" height="270" rx="15" fill="#ffffff" />

      {/* Screen content */}
      <rect x="40" y="60" width="120" height="30" rx="15" fill="#22c55e" className="animate-pulse-slow" />
      <text x="100" y="78" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
        RideShare
      </text>

      {/* Map representation */}
      <rect x="40" y="100" width="120" height="80" rx="8" fill="#f3f4f6" />
      <path
        d="M50 120 Q80 110 110 120 Q140 130 150 140"
        stroke="#22c55e"
        strokeWidth="3"
        fill="none"
        className="animate-dash"
      />

      {/* Location pins */}
      <g className="animate-bounce-subtle">
        <circle cx="60" cy="125" r="4" fill="#ef4444" />
        <path d="M60 121 L60 129 L64 125 Z" fill="#ef4444" />
      </g>
      <g className="animate-bounce-subtle animate-delay-500">
        <circle cx="140" cy="145" r="4" fill="#22c55e" />
        <path d="M140 141 L140 149 L144 145 Z" fill="#22c55e" />
      </g>

      {/* Ride cards */}
      <rect x="40" y="190" width="120" height="25" rx="5" fill="#f9fafb" stroke="#e5e7eb" />
      <circle cx="55" cy="202" r="6" fill="#3b82f6" />
      <rect x="70" y="197" width="40" height="3" rx="1" fill="#d1d5db" />
      <rect x="70" y="203" width="60" height="3" rx="1" fill="#d1d5db" />
      <text x="140" y="205" fontSize="8" fill="#22c55e" fontWeight="bold">
        $15
      </text>

      <rect x="40" y="220" width="120" height="25" rx="5" fill="#f9fafb" stroke="#e5e7eb" />
      <circle cx="55" cy="232" r="6" fill="#8b5cf6" />
      <rect x="70" y="227" width="35" height="3" rx="1" fill="#d1d5db" />
      <rect x="70" y="233" width="55" height="3" rx="1" fill="#d1d5db" />
      <text x="140" y="235" fontSize="8" fill="#22c55e" fontWeight="bold">
        $12
      </text>

      {/* Bottom button */}
      <rect x="50" y="260" width="100" height="30" rx="15" fill="#22c55e" className="animate-pulse-slow" />
      <text x="100" y="278" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
        Book Ride
      </text>

      {/* Floating elements */}
      <g className="animate-float animate-delay-1000">
        <circle cx="190" cy="100" r="8" fill="#fef3c7" />
        <text x="190" y="104" textAnchor="middle" fontSize="8" fill="#f59e0b">
          💰
        </text>
      </g>
      <g className="animate-float animate-delay-1500">
        <circle cx="10" cy="200" r="8" fill="#dcfce7" />
        <text x="10" y="204" textAnchor="middle" fontSize="8" fill="#22c55e">
          🌱
        </text>
      </g>
    </svg>
  </div>
)