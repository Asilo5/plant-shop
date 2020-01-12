import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

import Search from '../../Containers/Search/Search';

const NavBar  = () => {

    return ( 
        <nav>
           <NavLink to='/' className='logo'>Plant Shop</NavLink>

           <div>
               <Search />
               <NavLink to='/addPlant' className='nav' >Add Plant </NavLink>
               <NavLink to='/lovedPlant' className='nav' >Loved Plants</NavLink>
           </div>
        </nav>
    )
}

export default NavBar;