import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom'

import Search from '../../Containers/Search/Search';

const NavBar  = () => {

    return ( 
        <nav>
           <h1>Plant Shop</h1>

           <div>
               <Search />
               <NavLink to='/addPlant'>Add Plant </NavLink>
               <NavLink to='/lovedPlant'>Loved Plant</NavLink>
           </div>
        </nav>
    )
}

export default NavBar;