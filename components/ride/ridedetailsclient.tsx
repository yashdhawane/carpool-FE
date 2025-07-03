"use client"
import { useUser } from "@/hooks/useUser"
import { BookingPanel } from "@/components/ride/booking-panel"
import { PassengerRequests } from "@/components/ride/passenger-request"
// import { ConfirmedPassengersClient } from "@/components/server/confirmedpassenger"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RideDetailsClient({ ride, driverId }: { ride: any, driverId: string }) {
  const { user } = useUser()
  const isDriver = user && user.userId === driverId

  return (
    <>
      {isDriver ? (
        <>
          <div className="mb-4">
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
              You are the driver of this ride
            </span>
          </div>
          <PassengerRequests  />
        </>
      ) : (
        <>
          {/* <ConfirmedPassengersClient rideId={ride.id} /> */}
          <BookingPanel
            route={ride.route}
            date={ride.date}
            driver={ride.driver}
            price={ride.price}
            availableSeats={ride.availableSeats}
            rideId={ride.id}
          />
        </>
      )}
    </>
  )
}