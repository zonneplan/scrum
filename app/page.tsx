import HomePage from "@/components/custom components/HomePage";
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import CreateLobbyButton from '@/components/createLobby'
import JoinLobbyButton from '@/components/joinLobby'

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div>
        <HomePage/>

        <CreateLobbyButton />

        <JoinLobbyButton />
    </div>
  )
}