import HomePage from "@/components/HomePage";

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

import { Test } from '../components/test';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
        <Test />
        <h1>Hello, World!</h1>
    </main>
  )
}
