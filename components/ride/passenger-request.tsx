/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import useSWR from "swr"
import { fetchWithAuth } from "@/app/utils/fetchWithAuth"
import { Button } from "@/components/ui/button"

const fetcher = (url: string) =>
  fetchWithAuth(url, { method: "GET" }).then(res => res.json())

export function PassengerRequests() {
  const { data, error, isLoading, mutate } = useSWR(
    "http://localhost:3001/v1/rides/driver/booking-request",
    fetcher,
    { refreshInterval: 5000 }
  )

//    console.log("PassengerRequests data:", data)

  const handleAction = async (requestId: string, action: "accept" | "reject") => {

    const status = action === "accept" ? "accepted" : "rejected";
    await fetchWithAuth(
    `http://localhost:3001/v1/rides/booking-request/${requestId}/respond`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }
  );
    mutate()
  };

  if (isLoading) return <div>Loading passenger requests...</div>
  if (error) return <div className="text-red-600">Failed to load requests.</div>
  if (!data || !data.data || data.data.length === 0)
    return <div>No pending requests.</div>

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">Passenger Requests</h2>
     
      {data.data.map((req: any) => (
        <div key={req._id} className="flex items-center justify-between border-b py-2">
          <div>
            <div className="font-semibold">{req.name} ({req.email})</div>
            <div>Seats: {req.seats}</div>
            <div>Status: {req.status}</div>
            <div>Ride ID: {req.rideId}</div>
          </div>
          {req.status === "pending" && (
            <div className="flex gap-2">
              <Button onClick={() => handleAction(req._id, "accept")} className="bg-green-600 text-white">Accept</Button>
              <Button onClick={() => handleAction(req._id, "reject")} className="bg-red-600 text-white">Reject</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}