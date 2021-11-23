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
    <li className="main-navbar__item">
    <NavLink to="Destination/mars" className="main-navbar__link">
    <NavLink to="Destination/Titan" className="main-navbar__link">
    <NavLink to="Destination/Europa" className="main-navbar__link">
    <NavLink to="Destination/Moon" className="main-navbar__link">
    Destination
    </NavLink>
    </NavLink>
    </NavLink> 
    </NavLink> 
    
    </li> 
 
    <li className="main-navbar__item"> 
    <NavLink to="/Crew/Engineer"   className="main-navbar__link" >
    <NavLink to="/Crew/Pilot"   className="main-navbar__link" >
    <NavLink to="/Crew/Specialist"   className="main-navbar__link" >
    <NavLink to="/Crew/*"   className="main-navbar__link" >
     Crew
     </NavLink>
     </NavLink>
     </NavLink>
     </NavLink>
     </li>     
    <li className="main-navbar__item">
    
    <NavLink to="/Technology/Capsule"   className="main-navbar__link" >
    <NavLink to="/Technology/Spaceport"   className="main-navbar__link" >
    <NavLink to="/Technology/*"   className="main-navbar__link" >
    Technology
    </NavLink>
    </NavLink> 
    </NavLink>  
    </li>
 
    </nav>
    </header>
    
    );

    export default Header; 