import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  ArrowLeft,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Cigarette,
  PawPrint,
  SlidersHorizontal,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          {/* Top Navigation */}
          <div className="flex items-center justify-between mb-4">
            <Link className="flex items-center group" href="/">
              <ArrowLeft className="h-5 w-5 text-green-600 mr-2 group-hover:-translate-x-1 transition-transform" />
              <Car className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">RideShare</span>
            </Link>
          </div>

          {/* Search Form */}
          <Card className="shadow-lg border-green-100">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">From</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600" />
                    <Input
                      value="Mumbai, Maharashtra, India"
                      className="pl-10 border-green-200 focus:border-green-500"
                      readOnly
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-green-50 text-green-600"
                    aria-label="Swap locations"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">To</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
                    <Input
                      value="Pune, Maharashtra, India"
                      className="pl-10 border-green-200 focus:border-green-500"
                      readOnly
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input value="Today" className="pl-10 border-green-200 focus:border-green-500" readOnly />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Passengers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input value="2 passengers" className="pl-10 border-green-200 focus:border-green-500" readOnly />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <Button className="bg-green-600 hover:bg-green-700 px-8">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Update Search
                </Button>
              </div>
            </CardContent>
          </Card>
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
