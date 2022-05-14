import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <section>
      <nav class="flex-1 lg:ml-80 md:m-0 bg-slate-800  sm:m-0  ">
        <div className="flex gap-5 justify-center py-4">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link active font-bold' : 'link')}
          >
            Curriculum Vitae
          </NavLink>
          <NavLink
            to="/coverletter"
            className={({ isActive }) => (isActive ? 'link active font-bold' : 'link')}
          >
            Cover Letter
          </NavLink>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
