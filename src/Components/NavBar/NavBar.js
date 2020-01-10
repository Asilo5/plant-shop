import React from 'react';

import Search from '../../Containers/Search/Search';

const NavBar  = () => {

    return (
        <nav>
           <h1>Plant Shop</h1>

           <div>
               <Search />
               <p>Add Plant</p>
               <p>Loved</p>
           </div>
        </nav>
    )
}

export default NavBar;