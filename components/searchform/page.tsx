"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Search, Users, RotateCcw } from "lucide-react"

type RideSearchFormProps = {
  variant?: "home" | "search"
  initialValues?: {
    from?: string
    to?: string
    date?: string
    seats?: number
  }
}

export function RideSearchForm({ variant = "home", initialValues }: RideSearchFormProps) {
  const searchParams = useSearchParams()
  const [form, setForm] = useState({
    from: initialValues?.from ?? searchParams.get("from") ?? "",
    to: initialValues?.to ?? searchParams.get("to") ?? "",
    date: initialValues?.date ?? searchParams.get("date") ?? "",
    seats: initialValues?.seats ?? (Number(searchParams.get("seats")) || 1),
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

  const handleSwap = () => {
    setForm(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams({
        from: form.from,
        to: form.to,
        date: form.date,
        seats: String(form.seats),
      }).toString()
      router.push(`/search?${params}`)
    } catch (err) {
      if( err instanceof Error) {
        setError(err.message)
      }else {
        setError("An unexpected error occurred")
      }
    } finally {
      setLoading(false)
    }
  }

  // Horizontal style for search variant with swap button
  if (variant === "search") {
    return (
      <Card className="w-full mb-8 shadow border-green-100">
        <CardContent className="p-4">
          <form
            className="flex flex-col gap-4 md:flex-row md:items-end md:gap-2"
            role="search"
            aria-label="Find rides"
            onSubmit={handleSubmit}
          >
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-600" />
              <Input
                placeholder="Leaving from..."
                className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                aria-label="Departure location"
                name="from"
                value={form.from}
                onChange={handleChange}
                required
              />
            </div>
            {/* Swap Button */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-green-50 text-green-600 flex-shrink-0 mx-1"
              aria-label="Swap locations"
              onClick={handleSwap}
            >
              <RotateCcw className="h-5 w-5" />
            </Button>
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />
              <Input
                placeholder="Going to..."
                className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                aria-label="Destination location"
                name="to"
                value={form.to}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative w-48">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <Input
                type="date"
                className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                aria-label="Travel date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative w-36">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
              <Input
                type="number"
                min={1}
                max={10}
                placeholder="Seats"
                className="pl-10 border-green-200 focus:border-green-500 focus:ring-green-500"
                aria-label="Number of seats"
                name="seats"
                value={form.seats}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              className="bg-green-600 hover:bg-green-700 px-8 py-3 text-white font-medium rounded-lg"
              type="submit"
              aria-label="Search for rides"
              disabled={loading}
            >
              <Search className="mr-2 h-4 w-4" />
              {loading ? "Searching..." : "Search"}
            </Button>
          </form>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        </CardContent>
      </Card>
    )
  }

  // Default (home) style
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