import React from 'react'
import moon from '../../images/img/destination/image-moon.png'

export  function ImgMoon (){

return <div className="planet-block"><img className='planetimg' src={moon} alt="image of moon" /></div>

}
export  function Moon() {
    return (
        <section className='Planet'>
         <h1 className="Planet__title">Moon </h1>
       <p className="Planet__Text">   See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
       regain perspective and come back refreshed. While you’re there, take in some history 
       by visiting the Luna 2 and Apollo 11 landing sites.</p>
        <div className="line" ></div>
        <div className="Block">
        <p>
        Avg. distance<br/><br/>
        <span className='Block__elements'>384,400 km</span> 
        </p>
        <p>
        Est. travel time<br/><br/>
        <span  className='Block__elements'>3 days</span></p>
        </div>
        </section>
    )
}
