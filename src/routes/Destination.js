import React  from 'react';
import{ BrowserRouter, Route , Routes,NavLink } from 'react-router-dom';
import backgroundDesktop from '../images/img/destination/background-destination-desktop.jpg';
import backgroundTablet from '../images/img/destination/background-destination-tablet.jpg';
import backgroundMobile from '../images/img/destination/background-destination-mobile.jpg';
import { useMediaQuery } from 'react-responsive';
import {Mars,ImgMars} from './destination/mars'
import Titan from './destination/Titan';
import Europa from './destination/Europa';
import Moon from './destination/Moon';





export default function Portfolio() {
  const Desktop = useMediaQuery({ query: '(min-width: 1020px)' });
  const Tablet = useMediaQuery({ query: '(min-width: 700px)' });
  
 

    return   <section className='Destination' style = {Desktop? {backgroundImage:`url(${backgroundDesktop})`}: (Tablet? {backgroundImage:`url(${backgroundTablet})`}: {backgroundImage:`url(${backgroundMobile})`}  )}>
        
        <div className="Destination-block">
        <h5 className="Destination-block__Title"><span className="grey">01</span> Pick your destination</h5>
        <Routes>
        <Route path="mars" element={<ImgMars />} />
        </Routes>
        <nav className="nav-bar" >
              <NavLink to="Moon">MOON</NavLink>
              <NavLink to="mars">MARS</NavLink>
              <NavLink to="Europa">EUROPA</NavLink>
              <NavLink to="Titan">TITAN</NavLink>
        </nav>
       <Routes>  
        <Route path="Moon" element={<Moon />} />
        <Route path="mars" element={<Mars />} />
        <Route path="Europa" element={<Europa />} />
        <Route path="Titan" element={<Titan />} />
      </Routes>  
        </div>
     
      
    
     
        
        
        
        </section>;
    
  }