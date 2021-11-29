import React  from 'react';
import{  Route , Routes,NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// images 
import backgroundDesktop from '../images/img/destination/background-destination-desktop.jpg';
import backgroundTablet from '../images/img/destination/background-destination-tablet.jpg';
import backgroundMobile from '../images/img/destination/background-destination-mobile.jpg';
//react responsive
import { useMediaQuery } from 'react-responsive';
// pages 
import {Mars,ImgMars} from './destination/mars';
import {Titan,ImgTitan} from './destination/Titan';
import {Moon,ImgMoon} from './destination/Moon';
import {Europa,ImgEuropa,Transition} from './destination/Europa';
// headers 
import Header from '../component/Header';
import MobileHeader from '../component/Mobile-Header';
import HeaderTablet from '../component/HeaderTablet';



export default function Destination() {
  const Desktop = useMediaQuery({ query: '(min-width: 1020px)' });
  const Tablet = useMediaQuery({ query: '(min-width: 700px)' });
  
 

    return   <motion.div  transition={Transition} className='Destination' style = {Desktop? {backgroundImage:`url(${backgroundDesktop})`}: (Tablet? {backgroundImage:`url(${backgroundTablet})`}: {backgroundImage:`url(${backgroundMobile})`}  )}>
    <Header  />
    <HeaderTablet />
    <MobileHeader />
        <motion.main             initial={{ opacity: 0 }}  animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={Transition}  className="Stack-block">
        <div className="part-one">
         <h5 className="Stack-block__Title"><span className="grey">01</span> Pick your destination</h5>
    
         <Routes>
        <Route path="mars" element={<ImgMars />} />
        <Route path="Titan" element={<ImgTitan />} />
        <Route path="Moon" element={<ImgMoon />} />
        <Route path="Europa" element={<ImgEuropa />} />
        </Routes>
      
       
        
        </div>
        
        <div className="part-two">
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
         
        </motion.main>
     
      
    
     
        
        
        
        </motion.div>;
    
  }