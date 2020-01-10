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
               <NavLink to='/addPlant' className='nav' >Add Plant </NavLink>
               <NavLink to='/lovedPlant' className='nav' >Loved Plants</NavLink>
           </div>
        </nav>
    )
}

export default NavBar;