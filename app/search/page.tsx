'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Car,
  MapPin,
  Calendar,
  Users,
  Star,
  Shield,
  Clock,
  Cigarette,
  PawPrint,
  Plus,
  ChevronDown,
  User,
  RotateCcw,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useUser } from "@/hooks/useUser"
import { useRouter } from "next/navigation"

// Sample ride data
const rides = [
  {
    id: 1,
    driver: {
      name: "Amit",
      rating: 4.8,
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    departure: {
      time: "16:50",
      location: "Navi Mumbai",
    },
    arrival: {
      time: "18:50",
      location: "Pimpri-Chinchwad",
    },
    duration: "2h 00m",
    price: 560,
    instantBooking: true,
    maxPassengers: 2,
    amenities: ["instant-booking"],
  },
  {
    id: 2,
    driver: {
      name: "Swapnil",
      rating: 4.7,
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    departure: {
      time: "16:50",
      location: "Navi Mumbai",
    },
    arrival: {
      time: "19:30",
      location: "Pune",
    },
    duration: "2h 40m",
    price: 680,
    instantBooking: false,
    maxPassengers: 2,
    amenities: ["max-2-back"],
  },
  {
    id: 3,
    driver: {
      name: "Omkar",
      rating: 4.5,
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    departure: {
      time: "17:00",
      location: "Mumbai",
    },
    arrival: {
      time: "19:10",
      location: "Pimpri-Chinchwad",
    },
    duration: "2h 10m",
    price: 560,
    instantBooking: true,
    maxPassengers: 2,
    amenities: ["instant-booking", "max-2-back"],
  },
  {
    id: 4,
    driver: {
      name: "Vijay",
      rating: 5.0,
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    departure: {
      time: "17:00",
      location: "Navi Mumbai",
    },
    arrival: {
      time: "19:10",
      location: "Pune",
    },
    duration: "2h 10m",
    price: 600,
    instantBooking: true,
    maxPassengers: 3,
    amenities: ["instant-booking"],
  },
  {
    id: 5,
    driver: {
      name: "Dnyaneshwar",
      rating: 4.6,
      avatar: "/placeholder.svg?height=40&width=40",
      verified: false,
    },
    departure: {
      time: "17:00",
      location: "Navi Mumbai",
    },
    arrival: {
      time: "19:00",
      location: "Pune",
    },
    duration: "2h 00m",
    price: 620,
    instantBooking: true,
    maxPassengers: 2,
    amenities: ["instant-booking"],
  },
  {
    id: 6,
    driver: {
      name: "Priya",
      rating: 4.9,
      avatar: "/placeholder.svg?height=40&width=40",
      verified: true,
    },
    departure: {
      time: "17:00",
      location: "Thane",
    },
    arrival: {
      time: "18:50",
      location: "Pune",
    },
    duration: "1h 50m",
    price: 640,
    instantBooking: false,
    maxPassengers: 2,
    amenities: ["max-2-back"],
  },
]

export default function SearchPage() {
    const {user}=useUser();
    const router = useRouter();
    console.log(user)
    const checkrole=()=>{
        
        console.log(user)
        if (!user) return alert('Login required');
        if (user?.role === 'passenger') {
        router.push('/create-driver-profile');
      } else {
        router.push('/create-ride');
      }
    }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          {/* Top Navigation */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo */}
            <Link className="flex items-center group" href="/">
              <Car className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">RideShare</span>
            </Link>

            {/* Right Side - Publish Ride + User Avatar */}
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

          {/* Search Form */}
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
                      defaultValue="Mumbai, Maharashtra, India"
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
                      defaultValue="Pune, Maharashtra, India"
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
                      defaultValue={new Date().toISOString().split("T")[0]}
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
                    <select className="w-full text-gray-900 border-none outline-none bg-transparent" defaultValue="1">
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
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              <span className="text-green-600">Today</span> Mumbai, Maharashtra, India → Pune, Maharashtra, India
            </h1>
            <p className="text-green-600 font-medium">{rides.length} rides available</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                {/* Sort By */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Sort by</h3>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                      Clear all
                    </Button>
                  </div>
                  <RadioGroup defaultValue="earliest" className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="earliest" id="earliest" className="text-green-600" />
                      <Label htmlFor="earliest" className="text-sm">
                        Earliest departure
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="lowest" id="lowest" className="text-green-600" />
                      <Label htmlFor="lowest" className="text-sm">
                        Lowest price
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="close-departure" id="close-departure" className="text-green-600" />
                      <Label htmlFor="close-departure" className="text-sm">
                        Close to departure point
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="close-arrival" id="close-arrival" className="text-green-600" />
                      <Label htmlFor="close-arrival" className="text-sm">
                        Close to arrival point
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="shortest" id="shortest" className="text-green-600" />
                      <Label htmlFor="shortest" className="text-sm">
                        Shortest ride
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Departure Time */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Departure time</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="afternoon" className="border-green-300 text-green-600" />
                        <Label htmlFor="afternoon" className="text-sm">
                          12:01 - 18:00
                        </Label>
                      </div>
                      <span className="text-xs text-gray-500">37</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="evening" className="border-green-300 text-green-600" />
                        <Label htmlFor="evening" className="text-sm">
                          After 18:00
                        </Label>
                      </div>
                      <span className="text-xs text-gray-500">23</span>
                    </div>
                  </div>
                </div>

                {/* Trust and Safety */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Trust and safety</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verified" className="border-green-300 text-green-600" />
                      <Label htmlFor="verified" className="text-sm flex items-center">
                        <Shield className="w-4 h-4 mr-1 text-green-600" />
                        Verified Profile
                      </Label>
                    </div>
                    <span className="text-xs text-gray-500">28</span>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Amenities</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="max-2" className="border-green-300 text-green-600" />
                        <Label htmlFor="max-2" className="text-sm">
                          Max. 2 in the back
                        </Label>
                      </div>
                      <span className="text-xs text-gray-500">13</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="instant" className="border-green-300 text-green-600" />
                        <Label htmlFor="instant" className="text-sm">
                          Instant Booking
                        </Label>
                      </div>
                      <span className="text-xs text-gray-500">46</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="smoking" className="border-green-300 text-green-600" />
                        <Label htmlFor="smoking" className="text-sm flex items-center">
                          <Cigarette className="w-4 h-4 mr-1 text-gray-500" />
                          Smoking allowed
                        </Label>
                      </div>
                      <span className="text-xs text-gray-500">50</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pets" className="border-green-300 text-green-600" />
                        <Label htmlFor="pets" className="text-sm flex items-center">
                          <PawPrint className="w-4 h-4 mr-1 text-gray-500" />
                          Pets allowed
                        </Label>
                      </div>
                      <span className="text-xs text-gray-500">49</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {rides.map((ride) => (
                <Link key={ride.id} href={`/ride/${ride.id}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-200 border-green-100 hover:border-green-200 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        {/* Left Side - Time and Route */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            {/* Departure */}
                            <div className="text-center">
                              <div className="text-lg font-semibold text-gray-900">{ride.departure.time}</div>
                              <div className="text-sm text-gray-600">{ride.departure.location}</div>
                            </div>

                            {/* Route Visualization */}
                            <div className="flex-1 flex items-center">
                              <div className="w-3 h-3 rounded-full bg-green-600"></div>
                              <div className="flex-1 h-0.5 bg-green-300 relative">
                                <Car className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-green-600 bg-white rounded-full p-0.5" />
                              </div>
                              <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            </div>

                            {/* Arrival */}
                            <div className="text-center">
                              <div className="text-lg font-semibold text-gray-900">{ride.arrival.time}</div>
                              <div className="text-sm text-gray-600">{ride.arrival.location}</div>
                            </div>
                          </div>

                          {/* Duration */}
                          <div className="text-center text-sm text-gray-500 mb-4">{ride.duration}</div>

                          {/* Driver Info */}
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <Image
                                src={ride.driver.avatar || "/placeholder.svg"}
                                alt={ride.driver.name}
                                width={40}
                                height={40}
                                className="rounded-full"
                              />
                              {ride.driver.verified && (
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                                  <Shield className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-gray-900">{ride.driver.name}</span>
                                <div className="flex items-center space-x-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-sm text-gray-600">{ride.driver.rating}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2 mt-1">
                                {ride.instantBooking && (
                                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                    <Clock className="w-3 h-3 mr-1" />
                                    Instant Booking
                                  </Badge>
                                )}
                                {ride.amenities.includes("max-2-back") && (
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                                    <Users className="w-3 h-3 mr-1" />
                                    Max. 2 in the back
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Side - Price and Book */}
                        <div className="text-right ml-6">
                          <div className="text-2xl font-bold text-gray-900 mb-2">₹{ride.price}.00</div>
                          <Button className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Load more rides
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
