import React from 'react';
import{ NavLink } from 'react-router-dom';
import Mylogo from '../images/composants/logo.svg';



const Header = () =>(
    <header className='navbar__Desktop' >
    <div className="logo">
    <img src={Mylogo} alt="" />
    </div>
    <nav className='main-navbar'>
    <li className="main-navbar__item"><NavLink to="/"  className="main-navbar__link" > Home</NavLink> </li> 
    <li className="main-navbar__item"><NavLink to="/Destination/*" className="main-navbar__link">Destination</NavLink> </li>  
      <li className="main-navbar__item"> <NavLink to="/Crew/*"   className="main-navbar__link" > Crew</NavLink></li>  
    <li className="main-navbar__item"><NavLink to="/Technology/*"   className="main-navbar__link" > Technology</NavLink> </li>
 
    </nav>
    </header>
    
    );

    export default Header; 