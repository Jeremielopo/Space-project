import React from 'react'
import titan from '../../images/img/destination/image-titan.png'


export  function ImgTitan (){

    return <div className="planet-block"><img className='planetimg' src={titan} alt="Picture of Titan" /></div>
    
    }




export  function Titan() {
    return (

        <section className='Planet'>
         <h1 className="Planet__title">Titan</h1>
       <p className="Planet__Text"> 
       The only moon known to have a dense atmosphere other than Earth, Titan 
       is a home away from home (just a few hundred degrees colder!). As a 
       bonus, you get striking views of the Rings of Saturn. 
        the size of Everest!</p>
        <div className="line" ></div>
        <div className="Block">
        <p>
        Avg. distance<br/><br/>
        <span className='Block__elements'>1.6 bil. km</span> 
        </p>
        <p>
        Est. travel time<br/><br/>
        <span  className='Block__elements'>7 years</span></p>
        </div>
        </section>
    )
}

