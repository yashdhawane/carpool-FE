"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Search, Users } from "lucide-react"

export function RideSearchForm() {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    seats: 1,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      // Build query string from form state
      const params = new URLSearchParams({
        from: form.from,
        to: form.to,
        date: form.date,
        seats: String(form.seats),
      }).toString()

      // Update the URL with the search query
      router.push(`/search?${params}`)
    } 
    catch(err) {
      if (err instanceof Error) {
        setError(err.message)
      }
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md shadow-lg hover:shadow-xl transition-shadow duration-300 border-green-100">
      <CardContent className="p-6">
        <form className="space-y-4" role="search" aria-label="Find rides" onSubmit={handleSubmit}>
          <div className="relative group">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-600 transition-colors group-focus-within:text-green-700" />
            <Input
              placeholder="Leaving from..."
              className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
              aria-label="Departure location"
              name="from"
              value={form.from}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative group">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500 transition-colors group-focus-within:text-red-600" />
            <Input
              placeholder="Going to..."
              className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
              aria-label="Destination location"
              name="to"
              value={form.to}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative group">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 transition-colors group-focus-within:text-gray-600" />
            <Input
              type="date"
              className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
              aria-label="Travel date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative group">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-500 transition-colors group-focus-within:text-blue-600" />
            <Input
              type="number"
              min={1}
              max={10}
              placeholder="Seats"
              className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500 transition-all duration-200"
              aria-label="Number of seats"
              name="seats"
              value={form.seats}
              onChange={handleChange}
              required
            />
          </div>
          <Button
            className="w-full bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            type="submit"
            aria-label="Search for rides"
            disabled={loading}
          >
            <Search className="mr-2 h-4 w-4" />
            {loading ? "Searching..." : "Search rides"}
          </Button>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </form>
      </CardContent>
    </Card>
  )
}