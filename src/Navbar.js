import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar()
{


return(

    <div className='nav_styles'>

        <h1 className='nav_bar_h1'> Kerem Hamza FIRAT</h1>

        
        <NavLink className={({isActive}) => (isActive ? 'active' : 'default_style')}

         to='/'> 
             Home 
         
         </NavLink>




        <NavLink className={({isActive}) => (isActive ? 'active' : 'default_style')}

        to='/about'> 
             About

        </NavLink>



        <NavLink className={({isActive}) => (isActive ? 'active' : 'default_style')}

        to='/contact'> 
            Contact

        </NavLink>



        <NavLink className={({isActive}) => (isActive ? 'active' : 'default_style')}

        to='/projects'> 
             Projects

        </NavLink>





    </div>
);
}


export default Navbar;