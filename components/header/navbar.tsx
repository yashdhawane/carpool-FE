"use client"

import Link from "next/link"
import { Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Plus, User, ChevronDown } from "lucide-react"
import { useUser } from "@/hooks/useUser"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const { user } = useUser()
  const router = useRouter()

  const checkrole = () => {
    if (!user) return alert('Login required')
    if (user?.role === 'passenger') {
      router.push('/create-driver-profile')
    } else {
      router.push('/create-ride')
    }
  }

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-6">
          {/* Logo */}
          <Link className="flex items-center group" href="/">
            <Car className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">RideShare</span>
          </Link>
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={checkrole}
              className="border-green-600 text-green-600 hover:bg-green-50 flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Publish a ride</span>
            </Button>
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}