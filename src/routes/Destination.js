import React  from 'react';
import backgroundDesktop from '../images/img/destination/background-destination-desktop.jpg';
import backgroundTablet from '../images/img/destination/background-destination-tablet.jpg';
import backgroundMobile from '../images/img/destination/background-destination-mobile.jpg';
import { useMediaQuery } from 'react-responsive'






export default function Portfolio() {
  const Desktop = useMediaQuery({ query: '(min-width: 1020px)' });
  const Tablet = useMediaQuery({ query: '(min-width: 700px)' });
  
 

    return   <section className='Destination' style = {Desktop? {backgroundImage:`url(${backgroundDesktop})`}: (Tablet? {backgroundImage:`url(${backgroundTablet})`}: {backgroundImage:`url(${backgroundMobile})`}  )}>
    00 Home
    01 Destination
    02 Crew
    03 Technology
  
    
  
    Moon
    Mars
    Europa
    Titan
  
    Mars
  
    Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
    the tallest planetary mountain in our solar system. It’s two and a half times 
    the size of Everest!
  
    Avg. distance
    225 mil. km
  
    Est. travel time
    9 months
        
        <div className="Destination-title">
        <h5><span>01</span> Pick your destination</h5>

        </div>
          
        
        
        
        </section>;
    
  }