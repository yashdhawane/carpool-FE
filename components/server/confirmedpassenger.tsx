'use client'
import useSWR from "swr"
import { ConfirmedPassengers } from "@/components/ride/confirmed-passengers"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function ConfirmedPassengersClient({ rideId }: { rideId: string }) {
  const { data, error } = useSWR(
    `http://localhost:3001/v1/rides/${rideId}`,
    fetcher,
    { 
        refreshInterval: 5000,
        suspense: false,
     } // Poll every 5 seconds
  )

  if (error) return <div>Error loading passengers</div>
  if (!data) return <div>Loading...</div>

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const passengers = (data.data.passengers || []).map((p: any) => ({
    id: p.userId,
    name: p.name,
    avatar: "/placeholder.svg?height=40&width=40",
    route: `${data.data.origin?.city || "From"} → ${data.data.destination?.city || "To"}`,
  }))

  return <ConfirmedPassengers passengers={passengers} />
}