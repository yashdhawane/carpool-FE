"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Users, RotateCcw } from "lucide-react"
import { useState } from "react"

export default function SearchBar() {
  const [from, setFrom] = useState("Mumbai, Maharashtra, India")
  const [to, setTo] = useState("Pune, Maharashtra, India")
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])
  const [passengers, setPassengers] = useState("1")

  const swapLocations = () => {
    setFrom(to)
    setTo(from)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
      <div className="flex items-center space-x-4">
        {/* From Field */}
        <div className="flex-1 relative">
          <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-green-300 focus-within:border-green-500 transition-colors">
            <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
            <div className="flex-1">
              <input
                type="text"
                placeholder="From"
                value={from}
                onChange={e => setFrom(e.target.value)}
                className="w-full text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
        {/* Swap Button */}
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-green-50 text-green-600 flex-shrink-0"
          aria-label="Swap locations"
          onClick={swapLocations}
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        {/* To Field */}
        <div className="flex-1 relative">
          <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-green-300 focus-within:border-green-500 transition-colors">
            <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
            <div className="flex-1">
              <input
                type="text"
                placeholder="To"
                value={to}
                onChange={e => setTo(e.target.value)}
                className="w-full text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
        {/* Date Field */}
        <div className="w-40 relative">
          <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-green-300 focus-within:border-green-500 transition-colors">
            <Calendar className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <div className="flex-1">
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                className="w-full text-gray-900 border-none outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
        {/* Passengers Field */}
        <div className="w-36 relative">
          <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-green-300 focus-within:border-green-500 transition-colors">
            <Users className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <div className="flex-1">
              <select
                className="w-full text-gray-900 border-none outline-none bg-transparent"
                value={passengers}
                onChange={e => setPassengers(e.target.value)}
              >
                <option value="1">1 passenger</option>
                <option value="2">2 passengers</option>
                <option value="3">3 passengers</option>
                <option value="4">4 passengers</option>
              </select>
            </div>
          </div>
        </div>
        {/* Search Button */}
        <Button className="bg-green-600 hover:bg-green-700 px-8 py-3 text-white font-medium rounded-lg">
          Search
        </Button>
      </div>
    </div>
  )
}