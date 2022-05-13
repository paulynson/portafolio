import React from 'react'
import {Link} from 'react-router-dom'


function NotFound() {
  return (
    <div>
       <main class="flex-1 lg:ml-80">
              <div className="flex h-screen items-center justify-center">
              <div class="bg-white p-10 leading-8 w-auto text-center items-center ">
                      <div className="my-16">
                      <p className='my-12 text-8xl'>Oops!</p>
                      <p className='my-2 text-2xl'>Sorry, the page could not be found! </p>
                      <p className='text-1xl'>The link you followed probably was broken or the page has been removed </p>
                  </div>
                    <Link to="/" className='text-white bg-rose-500 py-4 px-10 rounded hover:bg-rose-800'> Take me Home</Link>  
        
        </div>
       </div>
      </main>
    </div>
  )
}

export default NotFound
