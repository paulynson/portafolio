import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
      <div>
          <main class="flex-1 ml-64 bg-blue-400">
              <div className="flex gap-6 justify-center py-4">
              <NavLink to="/" className="text-2xl text-gray-50 hover:text-neutral-500">Home</NavLink>
          <NavLink to="/coverletter" className="text-2xl text-gray-50 hover:text-neutral-500">Cover Letter</NavLink>
              </div>
         
        </main>
         
    </div>
  )
}

export default Navbar