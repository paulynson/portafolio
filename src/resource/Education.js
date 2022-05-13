import React from 'react'
import data from '../data/data.json';

function Education() {
  return (
      <div>
            {/* EDUCATION AND QUALIFICATION */}
        <section class="h-auto  p-10">
          <section className="text-left text-black">
            <h1 className="text-2xl text-rose-600 font-bold">EDUCATION AND QUALIFICATION</h1>
            <div className="w-full h-[1px] rounded-lg mb-4 flex items-center bg-slate-400">
              <div className="w-[30px] bg-rose-600 h-1 rounded-lg"></div>
            </div>
            <section>
                          <div>
                              {/* Mapping Through */}
                {data.education.map((data) => (
                  <div key={data.id} className="my-8">
                    <p className="leading-7">{data.years}</p>
                    <p className="leading-7 font-bold">{data.school}</p>
                    <p className="leading-7 font-bold">{data.degree}</p>
                    <p className="leading-7">{data.department}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>
              </section>
    </div>
  )
}

export default Education