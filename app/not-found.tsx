import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {  ArrowLeft } from "lucide-react"
import Link from "next/link"

const NotFoundIllustration = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
      {/* Background circle */}
      <circle cx="200" cy="150" r="120" fill="#dcfce7" className="animate-pulse-slow" />
      
      {/* 404 Text */}
      <text x="200" y="140" textAnchor="middle" fontSize="60" fontWeight="bold" fill="#16a34a" className="animate-bounce-subtle">
        404
      </text>
      
      {/* Car */}
      <g className="animate-slide-in-left">
        <rect x="120" y="180" width="160" height="60" rx="30" fill="#16a34a" />
        <rect x="130" y="170" width="140" height="40" rx="20" fill="#22c55e" />
        <circle cx="150" cy="240" r="15" fill="#374151" />
        <circle cx="250" cy="240" r="15" fill="#374151" />
      </g>
    </svg>
  </div>
)

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              404 Error
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Page not found</h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oops! The page you looking for seems to have taken a wrong turn.
            </p>
          </div>
          
          <div className="w-full max-w-sm h-64">
            <NotFoundIllustration />
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}