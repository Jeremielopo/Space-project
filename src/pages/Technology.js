import React  from 'react';
import{  Route , Routes,NavLink } from 'react-router-dom';
import backgroundDesktop from '../images/img/technology/background-technology-desktop.jpg';
import backgroundTablet from '../images/img/technology/background-technology-tablet.jpg';
import backgroundMobile from '../images/img/technology/background-technology-mobile.jpg';
import { useMediaQuery } from 'react-responsive'
import {ImgcapsulePortrait,ImgcapsuleLandscape,Capsule} from './technology/Capsule';
import {ImgvehiclePortrait,ImgvehicleLandscape,Vehicle} from './technology/Vehicle';
import {ImgspacePortrait,ImgspaceLandscape,Spaceport} from './technology/Spaceport'
import Header from '../component/Header';
import MobileHeader from '../component/Mobile-Header';
import HeaderTablet from '../component/HeaderTablet';



export default function Technology() {
  const Desktop = useMediaQuery({ query: '(min-width: 1020px)' });
  const Tablet = useMediaQuery({ query: '(min-width: 700px)' });
  
  return (
        <div className="Technology"  style = {Desktop? {backgroundImage:`url(${backgroundDesktop})`}: (Tablet? {backgroundImage:`url(${backgroundTablet})`}: {backgroundImage:`url(${backgroundMobile})`}  )}  >
        <Header  />
        <HeaderTablet />
        <MobileHeader />
        
        <h5 className="Stack-block__Title"><span className="grey">03</span> Space lunch 101</h5>       
        <div className="Stack-block">
        <Routes>  
        <Route path="Vehicle" element={ Desktop? <ImgvehiclePortrait/>: <ImgvehicleLandscape/>} />
        <Route path="Capsule" element={ Desktop? <ImgcapsulePortrait/>: <ImgcapsuleLandscape/>} />
        <Route path="Spaceport" element={ Desktop? <ImgspacePortrait/>: <ImgspaceLandscape/>} />

      </Routes>
       
       <div className="Stack-block__flex">
        <nav className="nav-bar" >
             <NavLink className="nav-bar__items"   to="Vehicle">1</NavLink>
             <NavLink className="nav-bar__items"   to="Spaceport">2</NavLink>
             <NavLink  className="nav-bar__items"  to="Capsule">3</NavLink>
       </nav>
       
      <Routes>  
       <Route path="Vehicle" element={<Vehicle />} />
       <Route path="Capsule" element={<Capsule />} />
       <Route path="Spaceport" element={<Spaceport />} />
     </Routes></div>
       </div></div>
    );

}