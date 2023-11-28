import Image from 'next/image'
import Index from '@/components'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components'

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <Suspense fallback={<p>Loading...</p>}>
        <Index />
      </Suspense>
    </main>
  )
}
