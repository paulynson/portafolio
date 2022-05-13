import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <section className="">
      <nav class="top-0 lg:ml-80 bg-slate-800">
        <div className="flex gap-6 justify-center py-4">
          <NavLink to="/" className={({isActive}) => (isActive ? 'link active': 'link')}>
            Curriculum Vitae
          </NavLink>
          <NavLink
            to="/coverletter"
            className={({isActive}) => (isActive ? 'link active': 'link')}
          >
            Cover Letter
          </NavLink>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
