import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Passenger {
  id: string
  name: string
  avatar: string
  route: string
}

interface ConfirmedPassengersProps {
  passengers: Passenger[]
}

// This is a Server Component that can fetch real-time data
export async function ConfirmedPassengers({ passengers }: ConfirmedPassengersProps) {
  // In a real app, you might fetch the latest passenger data here
  // const latestPassengers = await fetchConfirmedPassengers(rideId)

  return (
    <Card className="border-green-100">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-green-600" />
          <span>Passengers</span>
          <span className="text-sm font-normal text-gray-500">({passengers.length} confirmed)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {passengers.length === 0 ? (
          <div className="text-center py-8">
            <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No confirmed passengers yet</p>
            <p className="text-sm text-gray-400">Be the first to book this ride!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {passengers.map((passenger) => (
              <div
                key={passenger.id}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={passenger.avatar || "/placeholder.svg"}
                    alt={passenger.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{passenger.name}</h4>
                    <p className="text-sm text-gray-600">{passenger.route}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
