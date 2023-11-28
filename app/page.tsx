import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import CreateLobby from '@/components/createLobby'
import JoinLobby from '@/components/joinLobby'


export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
     <h1 className="text-4xl font-bold text-center mb-8">Welcome to scrum tool</h1>
     
     <CreateLobby />

     <JoinLobby />



    </main>
  )
}
