import { RouteDetails } from "@/components/ride/route-details"
import { DriverProfile } from "@/components/ride/driver-profile"
import { BookingPanel } from "@/components/ride/booking-panel"
import { ArrowLeft, Car } from "lucide-react"
import Link from "next/link"
import { ConfirmedPassengersClient } from "@/components/server/confirmedpassenger"

// This would typically come from your database
async function getRideDetails(id: string) {
  // Simulated data - in real app, fetch from database
  const res = await fetch(`http://localhost:3001/v1/rides/${id}`, { cache: "no-store" })
  if (!res.ok) throw new Error("Ride not found")
  const json = await res.json()
  return json.data
}

async function getDriverDetails(driverId: string) {
  const res = await fetch(`http://localhost:3001/v1/auth/${driverId}`, { cache: "no-store" })
  if (!res.ok) throw new Error("Driver not found")
  const json = await res.json()
  return json.data
}

export default async function RideDetailsPage({ params }: { params: { id: string } }) {
  const awaitedparam = await params;
  const id = awaitedparam.id;
  if (!id) {
    return <div className="container mx-auto px-4 py-6">Ride not found</div>
  }
   let rideData
  let driverData
  try {
    rideData = await getRideDetails(id)
    // console.log(rideData)
    driverData = await getDriverDetails(rideData.driverId)
    // console.log(driverData)
  } catch {
    return <div className="container mx-auto px-4 py-6">Ride not found</div>
  }

   const ride = {
    id: rideData._id,
    date: new Date(rideData.departureTime).toLocaleDateString(),
    route: {
      departure: {
        time: new Date(rideData.departureTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        location: rideData.origin?.address || rideData.origin?.city || "Unknown",
        address: rideData.origin?.address || "",
      },
      arrival: {
        time: new Date(rideData.departureTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        location: rideData.destination?.address || rideData.destination?.city || "Unknown",
        address: rideData.destination?.address || "",
      },
      duration: "N/A",
    },
    driver: {
      name: driverData.name || "Driver",
      rating: driverData.rating || 5,
      totalRatings: driverData.totalRatings || 0,
      avatar: driverData.avatar || "/placeholder.svg",
      verified: driverData.verified || false,
      badges: driverData.badges || [],
      tripNotes: driverData.tripNotes || "",
      meetingPoints: driverData.meetingPoints || [],
      car: driverData.car || { model: "", color: "" },
      bookingNote: driverData.bookingNote || "",
    },
    price: rideData.price,
    availableSeats: rideData.availableSeats,
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    confirmedPassengers: (rideData.passengers || []).map((p: any) => ({
      id: p.userId,
      name: p.name,
      avatar: "/placeholder.svg?height=40&width=40",
      route: `${rideData.origin?.city || "From"} → ${rideData.destination?.city || "To"}`,
    })),
  }


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Link className="flex items-center group" href="/search">
              <ArrowLeft className="h-5 w-5 text-green-600 mr-2 group-hover:-translate-x-1 transition-transform" />
              <Car className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">RideShare</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Route Component */}
            <RouteDetails route={ride.route} date={ride.date} />

            {/* Driver Profile Component */}
            <DriverProfile driver={ride.driver} />

            {/* Confirmed Passengers Server Component */}
            {/* <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading passengers...</div>}> */}
              <ConfirmedPassengersClient rideId={ride.id} />
            {/* </Suspense> */}
          </div>

          {/* Right Side - 1/3 width */}
          <div className="lg:col-span-1">
            <BookingPanel
              route={ride.route}
              date={ride.date}
              driver={ride.driver}
              price={ride.price}
              availableSeats={ride.availableSeats}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
