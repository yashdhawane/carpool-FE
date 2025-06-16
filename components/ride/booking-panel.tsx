"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Star, Users, Minus, Plus, CreditCard } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface BookingPanelProps {
  route: {
    departure: {
      time: string
      location: string
      address: string
    }
    arrival: {
      time: string
      location: string
      address: string
    }
  }
  date: string
  driver: {
    name: string
    rating: number
    avatar: string
  }
  price: number
  availableSeats: number
}

export function BookingPanel({ route, date, driver, price, availableSeats }: BookingPanelProps) {
  const [selectedPassengers, setSelectedPassengers] = useState(1)

  const handlePassengerChange = (change: number) => {
    const newCount = selectedPassengers + change
    if (newCount >= 1 && newCount <= availableSeats) {
      setSelectedPassengers(newCount)
    }
  }

  const totalPrice = price * selectedPassengers

  return (
    <Card className="sticky top-24 border-green-100 shadow-lg">
      <CardContent className="p-6 space-y-6">
        {/* Route Summary */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">{date}</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-green-600"></div>
              <div>
                <div className="font-medium text-gray-900">{route.departure.time}</div>
                <div className="text-sm text-gray-600">{route.departure.location}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 ml-1.5">
              <div className="w-0.5 h-8 bg-green-300"></div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div>
                <div className="font-medium text-gray-900">{route.arrival.time}</div>
                <div className="text-sm text-gray-600">{route.arrival.location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Summary */}
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Car className="w-5 h-5 text-green-600" />
          <Image
            src={driver.avatar || "/placeholder.svg"}
            alt={driver.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="flex-1">
            <div className="font-medium text-gray-900">{driver.name}</div>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{driver.rating}</span>
            </div>
          </div>
        </div>

        {/* Passenger Selection */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Passengers</span>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => handlePassengerChange(-1)}
                disabled={selectedPassengers <= 1}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <span className="font-medium text-gray-900 min-w-[2rem] text-center">{selectedPassengers}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => handlePassengerChange(1)}
                disabled={selectedPassengers >= availableSeats}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Price Display */}
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <span className="text-gray-700">
              {selectedPassengers} passenger{selectedPassengers > 1 ? "s" : ""}
            </span>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">₹{totalPrice}.00</div>
              {selectedPassengers > 1 && <div className="text-sm text-gray-500">₹{price} per person</div>}
            </div>
          </div>
        </div>

        {/* Available Seats Info */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-800">
              {availableSeats} seat{availableSeats > 1 ? "s" : ""} available
            </span>
          </div>
        </div>

        {/* Book Button */}
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium">
          <CreditCard className="w-5 h-5 mr-2" />
          Request to book
        </Button>

        {/* Booking Note */}
        <div className="text-xs text-gray-500 text-center">
          Your booking request will be sent to the driver for approval
        </div>
      </CardContent>
    </Card>
  )
}
