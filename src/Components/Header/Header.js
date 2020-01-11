import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <section>
              <h2> Plan(t) your Garden!</h2>
              <NavLink to='/allplants'>SEE OUR PLANTS</NavLink>
            </section>
         </header>
    )
}

export default Header;