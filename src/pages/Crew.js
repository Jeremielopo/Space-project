import React from 'react';
import{  Route , Routes,NavLink } from 'react-router-dom';
import backgroundDesktop from '../images/img/crew/background-crew-desktop.jpg';
import backgroundTablet from '../images/img/crew/background-crew-tablet.jpg';
import backgroundMobile from '../images/img/crew/background-crew-mobile.jpg';
import { useMediaQuery } from 'react-responsive'
import {Commander,ImgCommander} from './crew/Commander'
import { Specialist,ImgSpecialist } from './crew/Specialist';
import { Pilot,ImgPilot } from './crew/Pilot';
import { Engineer,ImgEngineer } from './crew/Engineer';
import Header from '../component/Header';
import MobileHeader from '../component/Mobile-Header';
import HeaderTablet from '../component/HeaderTablet';



export default function Crew() {
    const Desktop = useMediaQuery({ query: '(min-width: 1020px)' });
    const Tablet = useMediaQuery({ query: '(min-width: 700px)' });
    return (
        <div className='Crew'  style = {Desktop? {backgroundImage:`url(${backgroundDesktop})`}: (Tablet? {backgroundImage:`url(${backgroundTablet})`}: {backgroundImage:`url(${backgroundMobile})`}  )}>
        <Header  />
        <HeaderTablet />
        <MobileHeader />
          
         <h5 className="Stack-block__Title"><span className="grey">02</span> Meet your crew</h5>       
         <div className="Stack-block">
         <Routes>  
         <Route path="Commander" element={<ImgCommander />} />
         <Route path="Engineer" element={<ImgEngineer />} />
         <Route path="Pilot" element={<ImgPilot />} />
         <Route path="Specialist" element={<ImgSpecialist />} />
       </Routes>
        
        <div className="Stack-block__flex">
         <nav className="nav-bar" >
              <NavLink className="nav-bar__items"   to="Commander"></NavLink>
              <NavLink className="nav-bar__items"   to="Engineer"></NavLink>
              <NavLink  className="nav-bar__items"  to="Pilot"></NavLink>
              <NavLink className="nav-bar__items"   to="Specialist"></NavLink>
        </nav>
       <Routes>  
        <Route path="Commander" element={<Commander />} />
        <Route path="Engineer" element={<Engineer />} />
        <Route path="Pilot" element={<Pilot />} />
        <Route path="Specialist" element={<Specialist />} />
      </Routes></div>
        </div>


           </div>
       
    )
}



