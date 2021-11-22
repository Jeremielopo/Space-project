import React from 'react'
import capsuleL from '../../images/img/technology/image-space-capsule-landscape.jpg';   
import capsuleP from '../../images/img/technology/image-space-capsule-portrait.jpg' 


export  function ImgcapsulePortrait (){

    return <div className="planet-block"><img className='crewimg' src={capsuleP} alt="Picture of the vehicle" /></div>
    
    }
    export  function ImgcapsuleLandscape (){
    
        return <div className="planet-block"><img className='crewimg' src={capsuleL} alt="Picture of the vehicle" /></div>
        
        }


export  function Capsule() {
    return (
        <div className="Stack-Text">
        <h1 className="Stack-Text__title" >The terminology...</h1>
        <h2 className="Stack-Text__subtitle">Space capsule</h2>
        <p className="Stack-Text__paragraph">
        A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
        capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
        you'll spend your time during the flight. It includes a space gym, cinema, 
        and plenty of other activities to keep you entertained.
        </p>            
        </div>
    )
}
