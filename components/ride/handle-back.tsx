'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft, Car } from 'lucide-react'

export function RideBackButton() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleBack = () => {
    const from = searchParams.get('from')
    const to = searchParams.get('to')
    const date = searchParams.get('date')
    const seats = searchParams.get('seats')

    const params = new URLSearchParams()
    if (from) params.set('from', from)
    if (to) params.set('to', to)
    if (date) params.set('date', date)
    if (seats) params.set('seats', seats)

    router.push(`/search?${params.toString()}`)
  }

  return (
    <button
      onClick={handleBack}
      className="flex items-center group text-left"
    >
      <ArrowLeft className="h-5 w-5 text-green-600 mr-2 group-hover:-translate-x-1 transition-transform" />
      <Car className="h-8 w-8 text-green-600" />
      <span className="ml-2 text-xl font-bold text-gray-900">RideShare</span>
    </button>
  )
}
