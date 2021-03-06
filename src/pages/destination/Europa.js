import React from 'react'
import europa from '../../images/img/destination/image-europa.png'
import { motion } from 'framer-motion';



export const Transition = {duration:0.35, ease: [0.43,0.13,0.23,0.6]};



export  function ImgEuropa (){








return <div className="planet-block"><motion.img whileHover={{scale:1.1}}  transition={Transition} className='planetimg' src={europa} alt="image of europa" /></div>

}

export  function Europa() {
    return (
        <section className='Planet'>
         <h1 className="Planet__title">Europa </h1>
       <p className="Planet__Text">The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
       winter lover’s dream. With an icy surface, it’s perfect for a bit of 
       ice skating, curling, hockey, or simple relaxation in your snug 
       wintery cabin.!</p>
        <div className="line" ></div>
        <div className="Block">
        <p>
        Avg. distance<br/><br/>
        <span className='Block__elements'>628 mil. km</span> 
        </p>
        <p>
        Est. travel time<br/><br/>
        <span  className='Block__elements'>3 years</span></p>
        </div>
        </section>
    )
}
