import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
      <section className=''>
          <nav class="top-0 lg:ml-80 bg-slate-800">
              <div className="flex gap-6 justify-center py-4">
              <NavLink to="/" className="text-1xl text-gray-50 hover:text-rose-600">Home</NavLink>
          <NavLink to="/coverletter" className="text-1xl text-gray-50 hover:text-rose-600">Cover Letter</NavLink>
              </div>
         
        </nav>
         
    </section>
  )
}

export default Navbar