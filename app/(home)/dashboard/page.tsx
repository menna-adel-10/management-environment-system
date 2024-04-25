import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

export default function Dashboard() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="flex min-h-screen">
        <main className="flex-1 flex flex-col p-4">
          <div className="flex gap-3">
            {/* Grid cards and big card container */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <Cards />
              </div>
              <div>
                <Cards />
              </div>
              <div>
                <Cards />
              </div>
              <div className="col-span-3 bg-gray-200 p-4">Big Card</div>
            </div>
            {/* Vertical card */}
            <div className="bg-gray-300 w-1/4 grid grid-col-1 md:grid-cols-3 p-4">
              Vertical Card
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
