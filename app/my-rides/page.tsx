"use client"
import { useEffect, useState } from "react"
import { useUser } from "@/hooks/useUser"
import { fetchWithAuth } from "@/app/utils/fetchWithAuth"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function MyRidesPage() {
  const { user } = useUser()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rides, setRides] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    const fetchRides = async () => {
      const res = await fetchWithAuth(`http://localhost:3001/v1/rides/driver/my-rides`)
      if (res.ok) {
        const data = await res.json()
        setRides(data.rides || [])
      }
      setLoading(false)
    }
    fetchRides()
  }, [user])

  if (!user) return <div>Please log in as a driver to view your rides.</div>
  if (loading) return <div>Loading...</div>

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My Rides</h1>
      {rides.length === 0 ? (
        <div>No rides found.</div>
      ) : (
        rides.map(ride => (
          <Card key={ride._id} className="mb-4">
            <CardContent className="flex justify-between items-center">
              <div>
                <div>{ride.origin.city} → {ride.destination.city}</div>
                <div>{new Date(ride.departureTime).toLocaleString()}</div>
              </div>
              <Link href={`/ride/${ride._id}`}>
                <button className="bg-green-600 text-white px-4 py-2 rounded">Manage</button>
              </Link>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}