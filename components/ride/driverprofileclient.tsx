"use client"
import { useUser } from "@/hooks/useUser"
import { DriverProfile } from "@/components/ride/driver-profile"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DriverProfileClient({ driver }: { driver: any  }) {
  const { user } = useUser()
//   console.log("DriverProfileClient user:", user)
  const isDriver = user && user.userId === driver.user._id

  // Only show DriverProfile if the user is NOT the driver
  if (isDriver) return null

  return <DriverProfile driver={driver} />
}