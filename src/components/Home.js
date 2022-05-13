import React from 'react';
import Education from '../resource/Education';
import Hobbies from '../resource/Hobbies';
import Internships from '../resource/Internships';
import Work from '../resource/Work';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
      <main class="flex-1 lg:ml-80">
        <section className="text-left p-10">
          <div className="mb-4">
            <h1 className="text-4xl text-rose-600 font-bold ">
              ABAKADA PAUL IME
            </h1>
            <p className="text-2xl text-slate-600 font-bold leading-8">
              Frontend Developer
            </p>
          </div>
          <ul className="my-4">
            <li className="leading-8 flex items-center">
              {' '}
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-3 text-rose-600"
              />{' '}
              +2348125157424
            </li>

            <li className="leading-8 flex items-center">
              {' '}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-3 text-rose-600"
              />{' '}
              paulabakada@gmail.com
            </li>

            <li className="leading-8 flex items-center">
              {' '}
              <FontAwesomeIcon
                icon={faHome}
                className="mr-3 text-rose-600"
              />{' '}
              11, Akinwande Close, Baruwa, Ipaja, Lagos State
            </li>

          

         
          </ul>
        </section>
        <Work />
        <Internships />
        <Education />
        <Hobbies />
      </main>
    </div>
  );
}

export default Home;
