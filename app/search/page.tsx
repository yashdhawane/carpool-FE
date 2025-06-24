'use client'
import { useEffect, useState } from "react"
import { fetchWithAuth } from "@/app/utils/fetchWithAuth"  
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Car,
  Users,
  Star,
  Shield,
  Clock,
  Cigarette,
  PawPrint,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/header/navbar"
import { RideSearchForm } from "@/components/searchform/page"

export default function SearchPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rides, setRides] = useState<any[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const limit = 6 // Default rides per page

  // Redirect to home on back button
  useEffect(() => {
    const handlePopState = () => {
      router.replace("/")
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [router])

  // Fetch rides from backend when search params or page changes
  useEffect(() => {
    const fetchRides = async () => {
      setLoading(true)
      setError(null)
      try {
        const params = new URLSearchParams({
          from: searchParams.get("from") || "",
          to: searchParams.get("to") || "",
          date: searchParams.get("date") || "",
          seats: searchParams.get("seats") || "1",
          page: String(page),
          limit: String(limit),
        }).toString()
        // const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
        const res = await fetchWithAuth(`http://localhost:3001/v1/rides/search?${params}`)
        //   headers: {
        //     "Content-Type": "application/json",
        //     ...(token && { Authorization: `Bearer ${token}` }),
        //   },
        // });
        if(res.status===404){
          const data = await res.json();
          setRides([]);
          setTotal(0);
          setTotalPages(1);
          setError(data.message || "No rides found.");
          setLoading(false);
          return;
        }
        if (!res.ok) throw new Error("Failed to fetch rides")
        const data = await res.json()
        // Always use data.rides (backend always returns { rides: [...] })
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mappedRides = (Array.isArray(data.rides) ? data.rides : []).map((ride: any) => ({
          id: ride._id,
          departure: {
            time: new Date(ride.departureTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            location: ride.origin?.address || ride.origin?.city || "Unknown",
          },
          arrival: {
            time: new Date(ride.departureTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            location: ride.destination?.address || ride.destination?.city || "Unknown",
          },
          duration: "N/A",
          driver: {
            name: "Driver",
            avatar: "/placeholder.svg",
            verified: false,
            rating: "5.0",
          },
          price: ride.price,
          availableSeats: ride.availableSeats,
          instantBooking: false,
          amenities: [],
        }))
        setRides(mappedRides)
        setTotalPages(data.totalPages || 1)
        setTotal(data.total || 0)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred")
      } finally {
        setLoading(false)
      }
    }
    fetchRides()
  }, [searchParams, page])

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <RideSearchForm variant="search" />
        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                <span className="text-green-600">{searchParams.get("date") || "Today"}</span>{" "}
                {searchParams.get("from") || "From"} → {searchParams.get("to") || "To"}
              </h1>
              <p className="text-green-600 font-medium">
         {loading ? "Loading..." : `${total} rides available`}
              </p>
              
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
                                  {ride.amenities?.includes("max-2-back") && (
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
                {!loading && rides.length === 0 && !error && (
                  <div className="text-center text-gray-500 py-8">No rides found.</div>
                )}
                
              </div>
              {/* Pagination Controls */}
              <div className="flex justify-center items-center gap-2 mt-8">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600"
                  disabled={page === 1}
                  onClick={() => handlePageChange(page - 1)}
                >
                  Previous
                </Button>
                <span className="px-4">
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600"
                  disabled={page === totalPages}
                  onClick={() => handlePageChange(page + 1)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}