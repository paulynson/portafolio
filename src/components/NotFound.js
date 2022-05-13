import React from 'react'
import {Link} from 'react-router-dom'


function NotFound() {
  return (
    <div>
       <main class="flex-1 lg:ml-80">
              <div className="flex h-screen items-center justify-center">
              <div class="bg-white p-10 leading-8 w-auto text-center items-center ">
                      <div className="my-32">
                      <p className='my-6 text-8xl'>Page Missing</p>
                  </div>
                    <Link to="/" className='text-white bg-rose-500 py-4 px-10 rounded hover:bg-rose-800'> Take me Home</Link>  
        
        </div>
       </div>
      </main>
    </div>
  )
}

export default NotFound
