import React from 'react';
import profile from '../assets/image/profile.jpg';
import Skills from '../resource/Skills';

function Sidebar() {
  return (
    <section>
      <aside class="w-full lg:w-80 lg:fixed left-0 top-0 lg:h-screen bg-slate-700 py-4 px-10">
        <section className="my-6 lg:text-left text-center items-center justify-center flex">
          <img src={profile} alt="profile" className="h-48" />
        </section>
        <section className="text-left text-white">
                  <h1 className="text-2xl ">About Me</h1>
                  <div className='w-full h-[1px] rounded-lg mb-4 bg-white flex items-center'>
                    <div className="w-[20%] bg-rose-600 h-1 rounded-lg"></div>
                  </div>
          <p className="text-white text-sm">
            I am a software developer with robust problem-solving skills and
            proven experience in creating and designing software in a
            test-driven environment.
          </p>
        </section>
        <section className="text-white text-left my-8">
                  <h1 className="text-2xl ">Skills</h1>
                  <div className='w-full h-[1px] rounded-lg mb-4 bg-white flex items-center'>
                    <div className="w-[20%] bg-rose-600 h-1 rounded-lg"></div>
                  </div>
      

              <Skills />
                  
        </section>
      </aside>
    </section>
  );
}

export default Sidebar;
