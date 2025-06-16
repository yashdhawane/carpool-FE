import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  Users,
  MapPin,
  Calendar,
  DollarSign,
  Leaf,
  Shield,
  Star,
  ArrowRight,
  Search,
  Clock,
  CheckCircle,
  Smartphone,
  Menu,
} from "lucide-react"
import Link from "next/link"

// Custom SVG Illustrations
const HeroIllustration = () => (
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

const BenefitsIllustration = () => (
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

const SafetyIllustration = () => (
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

const MobileAppIllustration = () => (
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

export default function CarpoolingLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed w-full px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
        <Link className="flex items-center justify-center group" href="#" aria-label="RideShare Home">
          <Car className="h-8 w-8 text-green-600 transition-transform group-hover:scale-110" />
          <span className="ml-2 text-xl font-bold text-gray-900">RideShare</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6" role="navigation" aria-label="Main navigation">
          <Link
            className="text-sm font-medium hover:text-green-600 transition-colors relative group"
            href="#how-it-works"
          >
            How it works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors relative group" href="#safety">
            Safety
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors relative group" href="#about">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="ml-6 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-green-50 transition-colors"
            aria-label="Log in to your account"
          >
            Log in
          </Button>
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
            aria-label="Sign up for RideShare"
          >
            Sign up
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-green-50 transition-colors"
            aria-label="Open mobile menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
         <section className="h-screen w-full bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden flex items-center">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-2000"></div>
            <div className="absolute top-40 left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-4000"></div>
          </div>

           <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-7xl "> {/* Added pt-16 to account for fixed header */}
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-4 animate-slide-in-left">
                <div className="space-y-2">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                  >
                    🌱 Eco-Friendly Travel
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ">
                    Your pick of rides at low prices
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                    Travel comfortably for less. Find rides with friendly drivers going your way
                  </p>
                </div>

                {/* Enhanced Search Form */}
                <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300 border-green-100">
                  <CardContent className="p-6">
                    <form className="space-y-4" role="search" aria-label="Find rides">
                      <div className="relative group">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600 transition-colors group-focus-within:text-green-700" />
                        <Input
                          placeholder="Leaving from..."
                          className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
                          aria-label="Departure location"
                        />
                      </div>
                      <div className="relative group">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500 transition-colors group-focus-within:text-red-600" />
                        <Input
                          placeholder="Going to..."
                          className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
                          aria-label="Destination location"
                        />
                      </div>
                      <div className="relative group">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 transition-colors group-focus-within:text-gray-600" />
                        <Input
                          type="date"
                          className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
                          aria-label="Travel date"
                        />
                      </div>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        type="submit"
                        aria-label="Search for rides"
                      >
                        <Search className="mr-2 h-4 w-4" />
                        Search rides
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              <div className="flex items-center justify-center animate-slide-in-right">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10M+", label: "Happy members", delay: "animate-delay-0" },
                { value: "1M+", label: "Rides per month", delay: "animate-delay-200" },
                { value: "50+", label: "Countries", delay: "animate-delay-400" },
                { value: "4.8★", label: "Average rating", delay: "animate-delay-600" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`group hover:scale-105 transition-transform duration-300 cursor-pointer animate-count-up ${stat.delay}`}
                >
                  <div className="text-3xl font-bold text-green-600 group-hover:text-green-700 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced How it Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Simple Process
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How RideShare works</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting around has never been easier. Here's how it works.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: Search,
                  title: "Search",
                  description:
                    "Enter your departure and destination cities, choose your date and find the perfect ride.",
                  step: 1,
                  delay: "animate-delay-0",
                },
                {
                  icon: Users,
                  title: "Book",
                  description: "Book your seat and pay securely online. Chat with your driver to coordinate pickup.",
                  step: 2,
                  delay: "animate-delay-300",
                },
                {
                  icon: Car,
                  title: "Travel",
                  description: "Meet your driver and fellow passengers, then enjoy your comfortable journey.",
                  step: 3,
                  delay: "animate-delay-600",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`text-center group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-green-200 animate-fade-in-up ${item.delay} relative`}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-green-100 text-green-600 group-hover:bg-green-200 p-3 transition-all duration-300 group-hover:scale-110">
                        <item.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center animate-bounce-subtle">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
                    🌍 Environmental Impact
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why choose carpooling?</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Save money, meet people, and help the environment. Carpooling is the smart way to travel.
                  </p>
                </div>
                <div className="grid gap-4">
                  {[
                    {
                      icon: DollarSign,
                      title: "Save up to 70%",
                      description: "Travel for a fraction of the cost of other transport options.",
                      color: "text-yellow-600",
                      delay: "animate-delay-0",
                    },
                    {
                      icon: Leaf,
                      title: "Reduce CO2 emissions",
                      description: "Share rides and reduce your carbon footprint by up to 75%.",
                      color: "text-green-600",
                      delay: "animate-delay-200",
                    },
                    {
                      icon: Users,
                      title: "Meet new people",
                      description: "Connect with friendly locals and fellow travelers.",
                      color: "text-blue-600",
                      delay: "animate-delay-400",
                    },
                    {
                      icon: Clock,
                      title: "Door-to-door convenience",
                      description: "Get picked up and dropped off wherever is convenient for you.",
                      color: "text-purple-600",
                      delay: "animate-delay-600",
                    },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 group hover:bg-green-50 p-3 rounded-lg transition-all duration-300 hover:scale-105 animate-slide-in-left ${benefit.delay}`}
                    >
                      <benefit.icon
                        className={`h-5 w-5 ${benefit.color} mt-1 group-hover:scale-110 transition-transform`}
                      />
                      <div>
                        <h3 className="font-semibold group-hover:text-green-700 transition-colors">{benefit.title}</h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <BenefitsIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Safety Section */}
        <section id="safety" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  🛡️ Trust & Safety
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your safety is our priority</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We've built multiple safety features to ensure you have a secure and comfortable journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Verified profiles",
                    description: "All members verify their identity and phone number before joining.",
                    delay: "animate-delay-0",
                  },
                  {
                    icon: Star,
                    title: "Ratings and reviews",
                    description: "Rate your experience and read reviews from other members.",
                    delay: "animate-delay-200",
                  },
                  {
                    icon: CheckCircle,
                    title: "Secure payments",
                    description: "Pay securely online with our encrypted payment system.",
                    delay: "animate-delay-400",
                  },
                  {
                    icon: Smartphone,
                    title: "24/7 support",
                    description: "Our customer support team is available around the clock.",
                    delay: "animate-delay-600",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 group hover:bg-white p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 animate-slide-in-left ${feature.delay}`}
                  >
                    <feature.icon className="h-5 w-5 text-green-600 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-green-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <SafetyIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Driver CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  💰 Earn Money
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Drive and earn money</h2>
                <p className="max-w-[900px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Turn your empty seats into extra income. Offer rides on routes you're already taking.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-green-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start earning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-200"
                >
                  Learn more
                </Button> */}

                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                  Start earning
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced App Download Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <MobileAppIllustration />
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2 animate-slide-in-right">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800">
                    📱 Mobile App
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Take RideShare with you</h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Download our mobile app for the best carpooling experience. Book rides, chat with drivers, and
                    manage your trips on the go.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {/* <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    Download for iOS
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    Get it on Android
                  </Button> */}
                  <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Smartphone className="mr-2 h-5 w-5" />

                   Download for iOS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Final CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  🚀 Get Started
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to start your journey?</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join millions of people who choose carpooling for their travels.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Find a ride
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-200"
                >
                  Offer a ride
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center gap-2 group">
          <Car className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
          <span className="text-sm font-medium">RideShare</span>
        </div>
        <p className="text-xs text-gray-500 sm:ml-auto">© 2024 RideShare. All rights reserved.</p>
        <nav className="sm:ml-6 flex gap-4 sm:gap-6" role="navigation" aria-label="Footer navigation">
          <Link className="text-xs hover:underline underline-offset-4 hover:text-green-600 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 hover:text-green-600 transition-colors" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 hover:text-green-600 transition-colors" href="#">
            Help Center
          </Link>
        </nav>
      </footer>
    </div>
  )
}
