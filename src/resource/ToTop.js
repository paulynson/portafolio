import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function ToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
          e.preventDefault();
          if (window.scrollY > 100) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      }, []);
    
      function handleToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }
    
  return (
      <div>
           {visible ? (
          <div
            className="bg-rose-800 cursor-pointer pushtop fixed w-6 h-6 rounded-full right-3 bottom-10 p-4 flex items-center justify-center text-white z-50 ease-in-out"
            onClick={() => handleToTop()}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        ) : null}
    </div>
  )
}

export default ToTop