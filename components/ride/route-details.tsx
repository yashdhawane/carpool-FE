import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock } from "lucide-react"

interface RouteDetailsProps {
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
    duration: string
  }
  date: string
}

export function RouteDetails({ route, date }: RouteDetailsProps) {
  return (
    <Card className="border-green-100">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">{date}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Departure */}
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-green-600 mt-1"></div>
            <div className="w-0.5 h-16 bg-green-300 my-2"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-lg font-semibold text-gray-900">{route.departure.time}</span>
              <span className="text-green-600 font-medium">{route.departure.location}</span>
              <MapPin className="w-4 h-4 text-green-600" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{route.departure.address}</p>
          </div>
        </div>

        {/* Arrival */}
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-red-500 mt-1"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-lg font-semibold text-gray-900">{route.arrival.time}</span>
              <span className="text-red-600 font-medium">{route.arrival.location}</span>
              <MapPin className="w-4 h-4 text-red-500" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{route.arrival.address}</p>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">Total journey time: {route.duration}</span>
        </div>
      </CardContent>
    </Card>
  )
}
