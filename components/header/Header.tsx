"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Car, Menu } from "lucide-react"
import { useUser } from "@/hooks/useUser"

export default function Header() {
  const { user, setUser } = useUser()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [dropdownOpen])

  const handleLogout = () => {
    // Remove token if you store it
    localStorage.removeItem("accessToken")
    setUser(null)
    setDropdownOpen(false)
  }

  return (
    <header className="w-full px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300">
      <Link className="flex items-center justify-center group" href="/" aria-label="RideShare Home">
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
        {user && (user.role === "driver" || user.role === "both") && (
  // <Link href="/my-rides" className="...">My Rides</Link>
   <Link  href="/my-rides" className="text-sm font-medium hover:text-green-600 transition-colors relative group">
          My Rides
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
        </Link>
)}
        <Link className="text-sm font-medium hover:text-green-600 transition-colors relative group" href="#about">
          About
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
        </Link>
      </nav>
      <div className="ml-6 flex items-center gap-4">
        {!user ? (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-green-50 transition-colors"
              aria-label="Log in to your account"
            >
              <Link href="/login">Log in</Link>
            </Button>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
              aria-label="Sign up for RideShare"
            >
              <Link href="/signup">Sign up</Link>
            </Button>
          </>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 focus:outline-none"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-label="User menu"
              type="button"
            >
              <Image
                src={"/avatar.png"}
                alt={user.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border border-green-200"
              />
              <span className="text-sm font-medium text-gray-900">{user.name}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                  onClick={() => setDropdownOpen(false)}
                >
                  Settings
                </Link>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-green-50"
                  onClick={handleLogout}
                  type="button"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
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
  )
}