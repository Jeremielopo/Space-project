import React  from 'react';
import backgroundDesktop from '../images/img/home/background-home-desktop.jpg';
import backgroundTablet from '../images/img/home/background-home-tablet.jpg';
import backgroundMobile from '../images/img/home/background-home-mobile.jpg';
import { useMediaQuery } from 'react-responsive'
import Header from '../component/Header';
import MobileHeader from '../component/Mobile-Header';
import HeaderTablet from '../component/HeaderTablet';


export default function Home() {
  const Desktop = useMediaQuery({ query: '(min-width: 1020px)' });
  const Tablet = useMediaQuery({ query: '(min-width: 700px)' });
    return (
        <section className="Home" style = {Desktop? {backgroundImage:`url(${backgroundDesktop})`}: (Tablet? {backgroundImage:`url(${backgroundTablet})`}: {backgroundImage:`url(${backgroundMobile})`}  )}>
        <main className='main-home'
        
        >
        <Header  />
        <HeaderTablet />
        <MobileHeader />
        <div className='flexbox-block'> 
        <div className="main-home__Texte">
        <h5 >So, you want to travel to</h5>
         <h2 className="main-home__Title">
         Space
         </h2>
         <p className='main-home__paragraph' >
         Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
         </p>
        </div>

        <div className="main-home__button">
        <button className="main-home__CTA">Explore</button>
        </div>
       </div>
        
        
        
        </main>
        
        
        </section>

    );
  }
