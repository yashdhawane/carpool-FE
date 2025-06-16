import { RouteDetails } from "@/components/ride/route-details"
import { DriverProfile } from "@/components/ride/driver-profile"
import { ConfirmedPassengers } from "@/components/ride/confirmed-passengers"
import { BookingPanel } from "@/components/ride/booking-panel"
import { ArrowLeft, Car } from "lucide-react"
import Link from "next/link"

// This would typically come from your database
async function getRideDetails(id: string) {
  // Simulated data - in real app, fetch from database
  return {
    id,
    date: "Monday, 16 June",
    route: {
      departure: {
        time: "17:00",
        location: "Mumbai",
        address:
          "E TRADE LINK, A WING, 1ST FLOOR, OFFICE 704, KAMLA CITY, LOWER PAREL, Sunder Nagar, Jogeshwari East, Maharashtra",
      },
      arrival: {
        time: "19:20",
        location: "Pimpri-Chinchwad",
        address: "124, Bhatian, behind SBI bank, Wakadkar Wasti, Wakad, Maharashtra",
      },
      duration: "2h 20m",
    },
    driver: {
      name: "Dinesh",
      rating: 4.6,
      totalRatings: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
      badges: ["Rarely cancels rides"],
      tripNotes: "No extra luggage, kindly come on time.",
      meetingPoints: ["1. Seepz", "2. Powai plaza"],
      car: {
        model: "MARUTI Ertiga",
        color: "white",
      },
      bookingNote: "Your booking won't be confirmed until the driver approves your request",
    },
    price: 760,
    availableSeats: 2,
    confirmedPassengers: [
      {
        id: "1",
        name: "Avinash",
        avatar: "/placeholder.svg?height=40&width=40",
        route: "Mumbai → Pune",
      },
    ],
  }
}

export default async function RideDetailsPage({ params }: { params: { id: string } }) {
  const ride = await getRideDetails(params.id)

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
            <ConfirmedPassengers passengers={ride.confirmedPassengers} />
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
