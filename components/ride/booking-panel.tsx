// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Car, Star, Users, Minus, Plus, CreditCard ,Loader2 ,CheckCircle2 } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useState } from "react"
// import { useRouter } from "next/navigation"
// import { fetchWithAuth } from "@/app/utils/fetchWithAuth"
// import { useUser } from "@/hooks/useUser"

// interface BookingPanelProps {
//   route: {
//     departure: {
//       time: string
//       location: string
//       address: string
//     }
//     arrival: {
//       time: string
//       location: string
//       address: string
//     }
//   }
//   date: string
//   driver: {
//     name: string
//     rating: number
//     avatar: string
//   }
//   price: number
//   availableSeats: number
//   rideId: string
// }

// export function BookingPanel({ route, date, driver, price, availableSeats ,rideId}: BookingPanelProps) {
//   const [selectedPassengers, setSelectedPassengers] = useState(1)
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)
//   const [isCheckingStatus, setIsCheckingStatus] = useState(true);
//   const [alreadyBooked, setAlreadyBooked] = useState(false)
//   const router = useRouter()
//   const { user } = useUser()


  
//   useEffect(() => {
//     const checkAlreadyBooked = async () => {
//       if (!user) {
//         setIsCheckingStatus(false)
//         return
//       }
//       try {
//         const res = await fetchWithAuth(
//           `http://localhost:3001/v1/rides/${rideId}/booking-status`,
//           { method: "GET" }
//         )
//         if (res.ok) {
//           const data = await res.json()
//           setAlreadyBooked(data.alreadyBooked)
//         }
//       } finally {
//         setIsCheckingStatus(false)
//       }
//     }
//     checkAlreadyBooked()
//   }, [user, rideId])

//   if (isCheckingStatus) {
//   return (
//     <div className="flex items-center justify-center h-48 bg-white rounded-xl shadow-md">
//       <Loader2 className="w-6 h-6 text-green-600 animate-spin" />
//       <span className="ml-2 text-gray-600">Checking booking status...</span>
//     </div>
//   );
// }



//   const handlePassengerChange = (change: number) => {
//     const newCount = selectedPassengers + change
//     if (newCount >= 1 && newCount <= availableSeats) {
//       setSelectedPassengers(newCount)
//     }
//   }
  
// if (!user) {
//   return (
//     <Card className="border-green-100 shadow-lg">
//       <CardContent className="p-6 space-y-6 text-center">
//         <div className="text-xl font-semibold text-gray-800">
//           Want to book this ride?
//         </div>
//         <p className="text-gray-600">
//           Please <span className="text-green-600 font-semibold">log in</span> to continue with your booking.
//         </p>
//         <Button
//           className="bg-green-600 hover:bg-green-700 text-white"
//           onClick={() => router.push("/login")}
//         >
//           Log in to Book
//         </Button>
//       </CardContent>
//     </Card>
//   )
// }

//   const handleBooking = async () => {
//     // const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null
//     // if (!token) {
//     //   router.push("/login")
//     //   return
//     // }
//     if (!user) {
//       alert("Please log in to book a ride")
//       router.push("/login")
//       return
//     }

//     setLoading(true)
//     setSuccess(false)
//     console.log(selectedPassengers, rideId)
//     try {
//        const res = await fetchWithAuth(
//         `http://localhost:3001/v1/rides/book/${rideId}`,
//         {
//           method: "POST",
//           body: JSON.stringify({ seats: selectedPassengers }),
//         }
//     )
//       if (!res.ok) throw new Error("Booking failed")
//       setSuccess(true)
//       setAlreadyBooked(true)
//       setTimeout(() => setSuccess(false), 2500) // Hide splash after 2.5s
//     } catch (err) {
//       alert(`Booking failed. Please try again. ${err}`)
//     } finally {
//       setLoading(false)
//     }
//   }

//   const totalPrice = price * selectedPassengers

//   if (loading) {
//   return (
//     <div className="flex flex-col items-center justify-center h-96 bg-white rounded-xl shadow-lg">
//       <Loader2 className="w-16 h-16 text-green-600 animate-spin mb-4" />
//       <div className="text-lg font-semibold text-gray-700">Sending request...</div>
//     </div>
//   )
// }

// if (success || alreadyBooked) {
//   return (
//     <div className="flex flex-col items-center justify-center h-96 bg-white rounded-xl shadow-lg">
//       <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
//       <div className="text-xl font-bold text-green-700 mb-2">Request sent to the driver!</div>
//       <div className="text-gray-600 mb-6 text-center">
//         You’ll be notified once the driver responds to your booking request.
//       </div>
//       <Button
//         className="bg-green-600 hover:bg-green-700 text-white"
//          onClick={() => router.push("/")}
//       >
//         Book another ride
//       </Button>
//     </div>
//   )
// }


//   return (
    
//     <Card className="sticky top-24 border-green-100 shadow-lg">
//       <CardContent className="p-6 space-y-6">
//         {/* Route Summary */}
//         <div>
//           <h3 className="font-semibold text-gray-900 mb-3">{date}</h3>
//           <div className="space-y-3">
//             <div className="flex items-center space-x-3">
//               <div className="w-3 h-3 rounded-full bg-green-600"></div>
//               <div>
//                 <div className="font-medium text-gray-900">{route.departure.time}</div>
//                 <div className="text-sm text-gray-600">{route.departure.location}</div>
//               </div>
//             </div>
//             <div className="flex items-center space-x-3 ml-1.5">
//               <div className="w-0.5 h-8 bg-green-300"></div>
//             </div>
//             <div className="flex items-center space-x-3">
//               <div className="w-3 h-3 rounded-full bg-red-500"></div>
//               <div>
//                 <div className="font-medium text-gray-900">{route.arrival.time}</div>
//                 <div className="text-sm text-gray-600">{route.arrival.location}</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Driver Summary */}
//         <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//           <Car className="w-5 h-5 text-green-600" />
//           <Image
//             src={driver.avatar || "/placeholder.svg"}
//             alt={driver.name}
//             width={32}
//             height={32}
//             className="rounded-full"
//           />
//           <div className="flex-1">
//             <div className="font-medium text-gray-900">{driver.name}</div>
//             <div className="flex items-center space-x-1">
//               <Star className="w-3 h-3 text-yellow-400 fill-current" />
//               <span className="text-sm text-gray-600">{driver.rating}</span>
//             </div>
//           </div>
//         </div>

//         {/* Passenger Selection */}
//         <div className="space-y-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <Users className="w-4 h-4 text-gray-500" />
//               <span className="text-gray-700">Passengers</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="h-8 w-8 rounded-full"
//                 onClick={() => handlePassengerChange(-1)}
//                 disabled={selectedPassengers <= 1}
//               >
//                 <Minus className="w-3 h-3" />
//               </Button>
//               <span className="font-medium text-gray-900 min-w-[2rem] text-center">{selectedPassengers}</span>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="h-8 w-8 rounded-full"
//                 onClick={() => handlePassengerChange(1)}
//                 disabled={selectedPassengers >= availableSeats}
//               >
//                 <Plus className="w-3 h-3" />
//               </Button>
//             </div>
//           </div>

//           {/* Price Display */}
//           <div className="flex items-center justify-between py-3 border-t border-gray-100">
//             <span className="text-gray-700">
//               {selectedPassengers} passenger{selectedPassengers > 1 ? "s" : ""}
//             </span>
//             <div className="text-right">
//               <div className="text-2xl font-bold text-gray-900">₹{totalPrice}.00</div>
//               {selectedPassengers > 1 && <div className="text-sm text-gray-500">₹{price} per person</div>}
//             </div>
//           </div>
//         </div>

//         {/* Available Seats Info */}
//         <div className="bg-green-50 border border-green-200 rounded-lg p-3">
//           <div className="flex items-center space-x-2">
//             <Users className="w-4 h-4 text-green-600" />
//             <span className="text-sm text-green-800">
//               {availableSeats} seat{availableSeats > 1 ? "s" : ""} available
//             </span>
//           </div>
//         </div>

//         {/* Book Button */}
//         <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium"
//           onClick={handleBooking}
//           disabled={loading || alreadyBooked}>
//           <CreditCard className="w-5 h-5 mr-2" />
//           Request to book
//         </Button>

//         {/* Booking Note */}
//         <div className="text-xs text-gray-500 text-center">
//           Your booking request will be sent to the driver for approval
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Star, Users, Minus, Plus, CreditCard, Loader2, CheckCircle2, XCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { fetchWithAuth } from "@/app/utils/fetchWithAuth"
import { useUser } from "@/hooks/useUser"
import useSWR from "swr"

interface BookingPanelProps {
  route: {
    departure: { time: string; location: string; address: string }
    arrival: { time: string; location: string; address: string }
  }
  date: string
  driver: { name: string; rating: number; avatar: string }
  price: number
  availableSeats: number
  rideId: string
}

export function BookingPanel({ route, date, driver, price, availableSeats, rideId }: BookingPanelProps) {
  const [selectedPassengers, setSelectedPassengers] = useState(1)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const { user } = useUser()

  // Poll booking status every 5 seconds
  const { data: bookingStatus, isLoading: isCheckingStatus, mutate } = useSWR(
    user ? `http://localhost:3001/v1/rides/${rideId}/booking-status` : null,
    url => fetchWithAuth(url, { method: "GET" }).then(res => res.json()),
    { refreshInterval: 5000 }
  )

  //avoiding polling


  const rideFetcher = (url: string) =>
  fetchWithAuth(url, { method: "GET" }).then(res => res.json())

const { data: rideLive, isLoading: rideLoading } = useSWR(
  `http://localhost:3001/v1/rides/${rideId}`,
  rideFetcher,
  { refreshInterval: 5000 }
)

if (rideLoading) {
  return (
    <div className="flex items-center justify-center h-48 bg-white rounded-xl shadow-md">
      <Loader2 className="w-6 h-6 text-green-600 animate-spin" />
      <span className="ml-2 text-gray-600">Loading ride data...</span>
    </div>
  )
}

  // const handlePassengerChange = (change: number) => {
  //   const newCount = selectedPassengers + change
  //   if (newCount >= 1 && newCount <= availableSeats) {
  //     setSelectedPassengers(newCount)
  //   }
  // }
const dynamicAvailableSeats = rideLive?.data?.availableSeats ?? availableSeats

const handlePassengerChange = (change: number) => {
  const newCount = selectedPassengers + change
  if (newCount >= 1 && newCount <= dynamicAvailableSeats) {
    setSelectedPassengers(newCount)
  }
}
  if (isCheckingStatus) {
    return (
      <div className="flex items-center justify-center h-48 bg-white rounded-xl shadow-md">
        <Loader2 className="w-6 h-6 text-green-600 animate-spin" />
        <span className="ml-2 text-gray-600">Checking booking status...</span>
      </div>
    )
  }

  if (!user) {
    return (
      <Card className="border-green-100 shadow-lg">
        <CardContent className="p-6 space-y-6 text-center">
          <div className="text-xl font-semibold text-gray-800">
            Want to book this ride?
          </div>
          <p className="text-gray-600">
            Please <span className="text-green-600 font-semibold">log in</span> to continue with your booking.
          </p>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => router.push("/login")}
          >
            Log in to Book
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Handle already booked logic
  if (bookingStatus?.alreadyBooked && bookingStatus?.data) {
    const status = bookingStatus.data.status
    if (status === "accepted") {
      return (
        <div className="flex flex-col items-center justify-center h-96 bg-white rounded-xl shadow-lg">
          <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
          <div className="text-xl font-bold text-green-700 mb-2">Your booking was accepted!</div>
          <div className="text-gray-600 mb-6 text-center">
            You’re all set! Check your email for details.
          </div>
        </div>
      )
    }
    if (status === "rejected") {
      return (
        <div className="flex flex-col items-center justify-center h-96 bg-white rounded-xl shadow-lg">
          <XCircle className="w-16 h-16 text-red-600 mb-4" />
          <div className="text-xl font-bold text-red-700 mb-2">Your booking was rejected.</div>
          <div className="text-gray-600 mb-6 text-center">
            Sorry, your booking request was not accepted by the driver.
          </div>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => mutate()}
          >
            Try another ride
          </Button>
        </div>
      )
    }
    // Pending
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-white rounded-xl shadow-lg">
        <CheckCircle2 className="w-16 h-16 text-green-600 mb-4" />
        <div className="text-xl font-bold text-green-700 mb-2">Request sent to the driver!</div>
        <div className="text-gray-600 mb-6 text-center">
          You’ll be notified once the driver responds to your booking request.
        </div>
      </div>
    )
  }

  const handleBooking = async () => {
    if (!user) {
      alert("Please log in to book a ride")
      router.push("/login")
      return
    }

    setLoading(true)
    setSuccess(false)
    try {
      const res = await fetchWithAuth(
        `http://localhost:3001/v1/rides/book/${rideId}`,
        {
          method: "POST",
          body: JSON.stringify({ seats: selectedPassengers }),
        }
      )
      if (!res.ok) throw new Error("Booking failed")
      setSuccess(true)
      mutate() // Refresh booking status
      setTimeout(() => setSuccess(false), 2500)
    } catch (err) {
      alert(`Booking failed. Please try again. ${err}`)
    } finally {
      setLoading(false)
    }
  }

  const totalPrice = price * selectedPassengers

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96 bg-white rounded-xl shadow-lg">
        <Loader2 className="w-16 h-16 text-green-600 animate-spin mb-4" />
        <div className="text-lg font-semibold text-gray-700">Sending request...</div>
      </div>
    )
  }

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
        {/* <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-800">
              {availableSeats} seat{availableSeats > 1 ? "s" : ""} available
            </span>
          </div>
        </div> */}

        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
  <div className="flex items-center space-x-2">
    <Users className="w-4 h-4 text-green-600" />
    <span className="text-sm text-green-800">
      {(rideLive?.data?.availableSeats ?? availableSeats)} seat
      {(rideLive?.data?.availableSeats ?? availableSeats) > 1 ? "s" : ""} available
    </span>
  </div>
</div>

        {/* Book Button */}
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium"
          onClick={handleBooking}
          disabled={loading}>
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