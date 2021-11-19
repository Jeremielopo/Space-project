import React  from 'react';
import backgroundDesktop from '../images/img/home/background-home-desktop.jpg';
import backgroundTablet from '../images/img/home/background-home-tablet.jpg';
import backgroundMobile from '../images/img/home/background-home-mobile.jpg';
import { useMediaQuery } from 'react-responsive'



export default function Home() {
  const Desktop = useMediaQuery({ query: '(min-width: 1020px)' });
  const Tablet = useMediaQuery({ query: '(min-width: 700px)' });
    return (
        <div className="Home" style = {Desktop? {backgroundImage:`url(${backgroundDesktop})`}: (Tablet? {backgroundImage:`url(${backgroundTablet})`}: {backgroundImage:`url(${backgroundMobile})`}  )}>
        <main className='main-home'
        
        ><h2>HomePage</h2>
        </main>
        
        
        </div>

    );
  }
