import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Mail, Lock, ArrowLeft, Leaf, Users } from "lucide-react"
import Link from "next/link"

// Login Illustration
const LoginIllustration = () => (
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

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animate-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center group" href="/" aria-label="Back to RideShare Home">
          <ArrowLeft className="h-5 w-5 text-green-600 mr-2 group-hover:translate-x-1 transition-transform" />
          <Car className="h-8 w-8 text-green-600 transition-transform group-hover:scale-110" />
          <span className="ml-2 text-xl font-bold text-gray-900">RideShare</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-8">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Illustration Side */}
          <div className="hidden lg:flex items-center justify-center animate-slide-in-left">
            <div className="text-center space-y-6">
              <LoginIllustration />
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-gray-900">Secure & Trusted</h2>
                <p className="text-gray-600 max-w-md">
                  Your data is protected with enterprise-grade security. Join our community of eco-conscious travelers.
                </p>
                <div className="flex items-center justify-center gap-4 pt-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <Leaf className="w-3 h-3 mr-1" />
                    Eco-Friendly
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    <Users className="w-3 h-3 mr-1" />
                    10M+ Users
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Login Form Side */}
          <div className="flex items-center justify-center animate-slide-in-right">
            <Card className="w-full max-w-md shadow-2xl border-green-100 hover:shadow-3xl transition-shadow duration-300">
              <CardHeader className="text-center space-y-2">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Welcome Back
                </CardTitle>
                <p className="text-gray-600">Sign in to your RideShare account</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4" role="form" aria-label="Login form">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600 transition-colors group-focus-within:text-green-700" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-300"
                        aria-label="Email address"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative group">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600 transition-colors group-focus-within:text-green-700" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-300"
                        aria-label="Password"
                        required
                      />
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-green-300 text-green-600 focus:ring-green-500" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm text-green-600 hover:text-green-700 hover:underline transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    size="lg"
                  >
                    Sign In
                  </Button>
                </form>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="hover:bg-gray-50 transition-colors"
                    aria-label="Sign in with Google"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="hover:bg-gray-50 transition-colors"
                    aria-label="Sign in with Facebook"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Dont have an account?{" "}
                    <Link
                      href="/signup"
                      className="text-green-600 hover:text-green-700 font-medium hover:underline transition-colors"
                    >
                      Sign up for free
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
