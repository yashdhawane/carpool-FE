import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Star, Shield, CheckCircle, Car, MessageCircle } from "lucide-react"
// import Image from "next/image"
import { Badge } from "../ui/badge"
import { ShieldCheck, User2, CarFront } from "lucide-react"

// interface DriverProfileProps {
//   driver: {
//     name: string
//     rating: number
//     totalRatings: number
//     avatar: string
//     verified: boolean
//     badges: string[]
//     tripNotes: string
//     meetingPoints: string[]
//     car: {
//       model: string
//       color: string
//     }
//     bookingNote: string
//   }
// }

// export function DriverProfile({ driver }: DriverProfileProps) {
//   return (
//     <Card className="border-green-100">
//       <CardContent className="p-6">
//         {/* Driver Header */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Image
//                 src={driver.avatar || "/placeholder.svg"}
//                 alt={driver.name}
//                 width={60}
//                 height={60}
//                 className="rounded-full"
//               />
//               {driver.verified && (
//                 <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
//                   <Shield className="w-4 h-4 text-white" />
//                 </div>
//               )}
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-gray-900">{driver.name}</h3>
//               <div className="flex items-center space-x-2">
//                 <div className="flex items-center space-x-1">
//                   <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                   <span className="font-medium text-gray-900">{driver.rating}</span>
//                   <span className="text-gray-500">/ 5 - {driver.totalRatings} ratings</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Button variant="ghost" size="icon" className="text-green-600 hover:bg-green-50">
//             <MessageCircle className="w-5 h-5" />
//           </Button>
//         </div>

//         {/* Badges */}
//         <div className="space-y-3 mb-6">
//           {driver.verified && (
//             <div className="flex items-center space-x-2">
//               <Shield className="w-4 h-4 text-green-600" />
//               <span className="text-sm text-gray-700">Verified Profile</span>
//             </div>
//           )}
//           {driver.badges.map((badge, index) => (
//             <div key={index} className="flex items-center space-x-2">
//               <CheckCircle className="w-4 h-4 text-green-600" />
//               <span className="text-sm text-gray-700">{badge}</span>
//             </div>
//           ))}
//         </div>

//         {/* Trip Notes */}
//         <div className="mb-6">
//           <p className="text-gray-700 leading-relaxed">{driver.tripNotes}</p>
//         </div>

//         {/* Meeting Points */}
//         <div className="mb-6">
//           <h4 className="font-medium text-gray-900 mb-2">Meeting point:</h4>
//           <div className="space-y-1">
//             {driver.meetingPoints.map((point, index) => (
//               <p key={index} className="text-sm text-gray-600">
//                 {point}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Booking Note */}
//         <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
//           <div className="flex items-start space-x-2">
//             <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
//             <p className="text-sm text-blue-800">{driver.bookingNote}</p>
//           </div>
//         </div>

//         {/* Car Details */}
//         <div className="flex items-center justify-between mb-6">
//           <div className="flex items-center space-x-3">
//             <Car className="w-5 h-5 text-gray-500" />
//             <span className="text-gray-700">
//               {driver.car.model} - {driver.car.color}
//             </span>
//           </div>
//         </div>

//         {/* Contact Button */}
//         <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
//           <MessageCircle className="w-4 h-4 mr-2" />
//           Contact {driver.name}
//         </Button>
//       </CardContent>
//     </Card>
//   )
// }

interface DriverProfileProps {
  driver: {
    _id: string
    user: {
      _id: string
      name: string
      email: string
    }
    licenseNumber: string
    experienceYears: number
    verified: boolean
    createdAt: string
    vehicle: {
      make: string
      model: string
      year: number
      plateNumber: string
    }
  }
}

export function DriverProfile({ driver }: DriverProfileProps) {
  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardContent className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            Driver Profile
            {driver.verified && (
              <Badge variant="outline" className="ml-2 text-green-600 border-green-600">
                Verified
              </Badge>
            )}
          </h2>
        </div>

        {/* Driver Info */}
        <div className="text-gray-700 space-y-2">
          <p className="flex items-center gap-2">
            <User2 className="w-4 h-4 text-gray-500" />
            <span><strong>Name:</strong> {driver.user.name}</span>
          </p>
          <p><strong>Email:</strong> {driver.user.email}</p>
          <p><strong>License Number:</strong> {driver.licenseNumber}</p>
          <p><strong>Experience:</strong> {driver.experienceYears} years</p>
          <p><strong>Joined On:</strong> {new Date(driver.createdAt).toLocaleDateString()}</p>
        </div>

        {/* Vehicle Info */}
        <div className="mt-6">
          <h3 className="text-md font-medium flex items-center gap-2 text-gray-800">
            <CarFront className="w-5 h-5 text-blue-600" />
            Vehicle Information
          </h3>
          <ul className="ml-4 list-disc text-sm text-gray-600 mt-2 space-y-1">
            <li><strong>Make:</strong> {driver.vehicle.make}</li>
            <li><strong>Model:</strong> {driver.vehicle.model}</li>
            <li><strong>Year:</strong> {driver.vehicle.year}</li>
            <li><strong>Plate Number:</strong> {driver.vehicle.plateNumber}</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}