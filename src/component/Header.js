import React from 'react';
import{ NavLink } from 'react-router-dom';
import Mylogo from '../images/composants/logo.svg';



const Header = () =>(
    <header className='navbar__Desktop' >
    <div className="logo">
    <NavLink to="/" ><img src={Mylogo} alt="" /></NavLink>
    </div>
    <nav className='main-navbar'>
    <li className="main-navbar__item"><NavLink to="/"  className="main-navbar__link" > Home</NavLink> </li> 
    <li className="main-navbar__item">
    <NavLink to="/Destination/Moon" className="main-navbar__link">
    Destination
    </NavLink> 
    
    </li> 
 
    <li className="main-navbar__item"> 
    <NavLink to="/Crew/Commander"   className="main-navbar__link" >
     Crew
     </NavLink>
     </li>     
    <li className="main-navbar__item">
    
    <NavLink to="/Technology/Vehicle"   className="main-navbar__link" >
    Technology
    </NavLink>  
    </li>
 
    </nav>
    </header>
    
    );

    export default Header; 