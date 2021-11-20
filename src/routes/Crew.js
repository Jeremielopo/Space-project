import React from 'react';
import backgroundDesktop from '../images/img/crew/background-crew-desktop.jpg';
import backgroundTablet from '../images/img/crew/background-crew-tablet.jpg';
import backgroundMobile from '../images/img/crew/background-crew-mobile.jpg';
import { useMediaQuery } from 'react-responsive'




export default function Crew() {
    const Desktop = useMediaQuery({ query: '(min-width: 1020px)' });
    const Tablet = useMediaQuery({ query: '(min-width: 700px)' });
    return (
        <div className='Crew'  style = {Desktop? {backgroundImage:`url(${backgroundDesktop})`}: (Tablet? {backgroundImage:`url(${backgroundTablet})`}: {backgroundImage:`url(${backgroundMobile})`}  )}>
           <div className="Stack-block">
           <div className="part-one">
         <h5 className="Stack-block__Title"><span className="grey">02</span> Meet your crew</h5>
     
        
       
        
        </div>



           </div>
        </div>
    )
}



