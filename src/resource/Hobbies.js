import React from 'react'
import data from '../data/data.json';

function Hobbies() {
  return (
      <div>
            {/* Internships */}
            <section class="h-auto  p-10">
          <section className="text-left text-black">
            <h1 className="text-2xl text-rose-600 font-bold">HOBBIES</h1>
            <div className="w-full h-[1px] rounded-lg mb-4 flex items-center bg-slate-400">
              <div className="w-[30px] bg-rose-600 h-1 rounded-lg"></div>
            </div>
            <section>
                          <div>
                              {/* Mapping Through */}
              {data.hobbies.map((data) => (
               
                  <ul key={data.id} className="my-4 list-disc">
                   
                    <li className="leading-7 ml-4 ">{data.title}</li>
                    </ul>
                
                ))}
              </div>
            </section>
          </section>
        </section>
    </div>
  )
}

export default Hobbies