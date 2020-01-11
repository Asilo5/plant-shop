import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <section className='header-section'>
              <h2> Plan(t) your Garden!</h2>
              <NavLink className='link-to-plants' to='/allPlants'>SEE OUR PLANTS</NavLink>
            </section>
         </header>
    )
}

export default Header;