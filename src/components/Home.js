import React from 'react';
import Education from '../resource/Education';
import Hobbies from '../resource/Hobbies';
import Internships from '../resource/Internships';
import Work from '../resource/Work';
import Contact from '../resource/Contact';


function Home() {
   

  
   
  return (
    <div>
      <main class="flex-1 lg:ml-80 xl:ml-80">
       <Contact />
        <Work />
        <Internships />
        <Education />
              <Hobbies />
             
          </main>
       
    </div>
  );
}

export default Home;
