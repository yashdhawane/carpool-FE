export const SignupIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
      {/* Background circles */}
      <circle cx="200" cy="150" r="110" fill="#dcfce7" className="animate-pulse-slow" />
      <circle cx="200" cy="150" r="80" fill="#bbf7d0" className="animate-pulse-slow animate-delay-500" />

      {/* Central community circle */}
      <g className="animate-float">
        <circle cx="200" cy="150" r="50" fill="#16a34a" className="drop-shadow-lg" />
        <circle cx="200" cy="150" r="40" fill="#22c55e" />

        {/* Plus sign for joining */}
        <rect x="195" y="135" width="10" height="30" rx="2" fill="#ffffff" />
        <rect x="185" y="145" width="30" height="10" rx="2" fill="#ffffff" />
      </g>

      {/* User avatars around the circle */}
      <g className="animate-bounce-subtle">
        <circle cx="150" cy="100" r="12" fill="#3b82f6" />
        <circle cx="150" cy="100" r="8" fill="#60a5fa" />
        <text x="150" y="105" textAnchor="middle" fontSize="8" fill="#ffffff" fontWeight="bold">
          👤
        </text>
      </g>

      <g className="animate-bounce-subtle animate-delay-300">
        <circle cx="250" cy="100" r="12" fill="#8b5cf6" />
        <circle cx="250" cy="100" r="8" fill="#a78bfa" />
        <text x="250" y="105" textAnchor="middle" fontSize="8" fill="#ffffff" fontWeight="bold">
          👤
        </text>
      </g>

      <g className="animate-bounce-subtle animate-delay-600">
        <circle cx="280" cy="180" r="12" fill="#ef4444" />
        <circle cx="280" cy="180" r="8" fill="#f87171" />
        <text x="280" y="185" textAnchor="middle" fontSize="8" fill="#ffffff" fontWeight="bold">
          👤
        </text>
      </g>

      <g className="animate-bounce-subtle animate-delay-900">
        <circle cx="120" cy="180" r="12" fill="#f59e0b" />
        <circle cx="120" cy="180" r="8" fill="#fbbf24" />
        <text x="120" y="185" textAnchor="middle" fontSize="8" fill="#ffffff" fontWeight="bold">
          👤
        </text>
      </g>

      <g className="animate-bounce-subtle animate-delay-1200">
        <circle cx="200" cy="80" r="12" fill="#10b981" />
        <circle cx="200" cy="80" r="8" fill="#34d399" />
        <text x="200" y="85" textAnchor="middle" fontSize="8" fill="#ffffff" fontWeight="bold">
          👤
        </text>
      </g>

      <g className="animate-bounce-subtle animate-delay-1500">
        <circle cx="200" cy="220" r="12" fill="#06b6d4" />
        <circle cx="200" cy="220" r="8" fill="#22d3ee" />
        <text x="200" y="225" textAnchor="middle" fontSize="8" fill="#ffffff" fontWeight="bold">
          👤
        </text>
      </g>

      {/* Connection lines */}
      <path
        d="M162 110 Q180 130 188 140"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
        className="animate-dash"
      />
      <path
        d="M238 110 Q220 130 212 140"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
        className="animate-dash animate-delay-300"
      />
      <path
        d="M268 170 Q240 160 220 155"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
        className="animate-dash animate-delay-600"
      />
      <path
        d="M132 170 Q160 160 180 155"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3,3"
        className="animate-dash animate-delay-900"
      />

      {/* Floating eco elements */}
      <g className="animate-sway">
        <path d="M80 120 Q85 110 90 120 Q85 130 80 120" fill="#22c55e" />
        <path d="M85 125 Q90 115 95 125 Q90 135 85 125" fill="#16a34a" />
      </g>

      <g className="animate-sway animate-delay-1000">
        <path d="M320 140 Q325 130 330 140 Q325 150 320 140" fill="#22c55e" />
        <path d="M325 145 Q330 135 335 145 Q330 155 325 145" fill="#16a34a" />
      </g>

      {/* Join message */}
      <g className="animate-fade-in-up animate-delay-2000">
        <rect x="130" y="40" width="140" height="20" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
        <text x="200" y="52" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="bold">
          Join Our Community!
        </text>
      </g>
    </svg>
  </div>
)