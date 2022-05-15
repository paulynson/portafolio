import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {faBookReader, faLaptopCode, faSearch, faBasketballBall} from '@fortawesome/free-solid-svg-icons';

function Hobbies() {
  const [reading, setReading] = useState(false);
  const [research, setResearch] = useState(false);
  const [writing, setWriting] = useState(false);
  const [football, setFootball] = useState(false);

  return (
    <div>
     
      {/* Internships */}
      <section className="h-auto  p-10">
        <section className="text-left text-black">
          <h1 className="text-2xl text-rose-600 font-bold">HOBBIES</h1>
          <div className="w-full h-[1px] rounded-lg mb-4 flex items-center bg-slate-400">
            <div className="w-[30px] bg-rose-600 h-1 rounded-lg"></div>
          </div>
          <section>
            <div>
              {/* Mapping Through */}
              {/* {data.hobbies.map((data) => ( */}

              <ul className="my-4 list-disc">
                <li
                  className="leading-8 ml-4 hover:text-rose-500 cursor-pointer flex gap-6 items-center"
                  onClick={() => setReading(!reading)}
                >
                  Reading {reading ? <div className='book mb-4 flex items-center gap-3'> <p className='drop'>I am</p> <FontAwesomeIcon icon={faBookReader} className="text-rose-800 text-1xl"/></div> : ''}
                </li>
                <li className="leading-8 ml-4 hover:text-rose-500 cursor-pointer flex gap-6 "onClick={()=> setResearch(!research)}>
                  Researching {research ? <div className='drop'> I love to <FontAwesomeIcon icon={faSearch} className="text-rose-800 text-2xl" /> always.</div> : ''}
                </li>
                
                <li className="leading-8 ml-4 hover:text-rose-500 cursor-pointer flex gap-6 "onClick={()=> setWriting(!writing)}>
                  Writing programming codes {writing ? <p className='splash'>I love to Write Code <FontAwesomeIcon icon={ faLaptopCode} className="text-rose-800 text-2xl" /></p> : ''}
                </li>
                <li className="leading-8 ml-4 hover:text-rose-500 cursor-pointer flex gap-6 items-center" onClick={()=> setFootball(!football)}>
                  Football {football ? <div className="ball"><FontAwesomeIcon icon={faBasketballBall} className="text-black text-2xl" />  </div> : ''}
                </li>
              </ul>

              {/* ))} */}
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Hobbies;
