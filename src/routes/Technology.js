import React  from 'react';
import backgroundDesktop from '../images/img/technology/background-technology-desktop.jpg';
import backgroundTablet from '../images/img/technology/background-technology-tablet.jpg';
import backgroundMobile from '../images/img/technology/background-technology-mobile.jpg';
import { useMediaQuery } from 'react-responsive'


export default function Technology() {
  const Desktop = useMediaQuery({ query: '(min-width: 1020px)' });
  const Tablet = useMediaQuery({ query: '(min-width: 700px)' });
  
  return (
        <div className="Technology"  style = {Desktop? {backgroundImage:`url(${backgroundDesktop})`}: (Tablet? {backgroundImage:`url(${backgroundTablet})`}: {backgroundImage:`url(${backgroundMobile})`}  )}  >
      <main style={{ padding: "1rem 0" }}>
        <h2>Contact</h2>
      </main></div>
    );

}