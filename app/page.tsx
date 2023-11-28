'use client';

import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'
import { table } from 'console'
import Counter from '@/components/Counter'

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {

  const handleFormSubmit = async (event:FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData.entries())
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
    <Counter />
    <form onSubmit={handleFormSubmit}>
      <button>versturen</button>
      </form>
      <div>
      <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
        Name
      </label>
      <div className="mt-2">
        <input
          type="name"
          name="name"
          id="name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="you@example.com"
        />
        <div>
      <label htmlFor="RoomCode" className="block text-sm font-medium leading-6 text-gray-900">
        RoomCode
      </label>
      <div className="mt-2">
        <input
          type="RoomCode"
          name="RoomCode"
          id="RoomCode"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="xlJKASD7"
        />
      </div>
      <button type="button"
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >Join</button>
      
    </div>
      </div>
    </div>
    </main>
    
  )
}


