import React from 'react'

function Footer() {
    
        let date = new Date()
        let tDate = date.getFullYear()  
    
  return (
      <div>
               <main className="flex-1 lg:ml-80 bg-slate-800 sm:m-0 md:m-0 xl:ml-80 ">
              <div className="flex gap-6 justify-center py-4 text-white">
                  <p className="flex text-center"> &copy; {tDate} Paul Abakada</p>
              </div>
         
        </main>
    </div>
  )
}

export default Footer