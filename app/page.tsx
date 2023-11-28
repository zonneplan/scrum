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
      <h5  className="text-6xl font-bold border-black border p-4 rounded-xl bg-kelly-green">
        join scrum</h5>

      <form>
        <input type="text" name="name" placeholder="name"/><br></br>
        <input type="text" name="roomcode" placeholder="roomcode" /><br></br>
        <br></br>
        <button>versturen</button>
      </form>
    </main>
    
  )
}


