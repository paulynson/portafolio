import React, {useEffect} from 'react';
import Education from '../resource/Education';
import Hobbies from '../resource/Hobbies';
import Internships from '../resource/Internships';
import Work from '../resource/Work';
import Contact from '../resource/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';


function Home() {
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            const myTop = document.querySelector(".pushtop");
            if (window.scrollY >= 300) {
                myTop.classList.add("active");
            } else {
                myTop.classList.remove("active");
            }
           
        })
    }, [])

  
   
  return (
    <div>
      <main class="flex-1 lg:ml-80 xl:ml-80">
       <Contact />
        <Work />
        <Internships />
        <Education />
              <Hobbies />
              <div className="pushtop flex items-center justify-center p-2">
          <a href="#/"><FontAwesomeIcon icon={faArrowUp} className="text-white text-1xl" /></a>
          </div>
          </main>
       
    </div>
  );
}

export default Home;
