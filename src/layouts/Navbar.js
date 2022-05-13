import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
      <section className=''>
          <nav class="top-0 lg:ml-80 bg-blue-400">
              <div className="flex gap-6 justify-center py-4">
              <NavLink to="/" className="text-2xl text-gray-50 hover:text-neutral-500">Home</NavLink>
          <NavLink to="/coverletter" className="text-2xl text-gray-50 hover:text-neutral-500">Cover Letter</NavLink>
              </div>
         
        </nav>
         
    </section>
  )
}

export default Navbar