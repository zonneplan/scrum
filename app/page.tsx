import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Scrum Tool</h1>
      <div className="grid grid-cols-3 gap-4">
        {['1', '2', '3', '5', '8', '13'].map((number) => (
          <div className="card bg-white shadow-2xl rounded-lg p-6 transform transition duration-500 hover:scale-105" key={number}>
            <div className="card-body">
              <h5 className="card-title text-lg font-bold text-center">{number}</h5>
              <div className="mt-4 border-t-2"></div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/150" alt="Avatar"/>
                  <div className="ml-4 text-sm">
                    <p className="text-gray-900 mb-2">Scrum Master</p>
                    <p className="text-gray-600">Master of Scrum</p>
                  </div>
                </div>
                <button className="px-2 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-500">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
