import React from 'react'
import spaceportL from '../../images/img/technology/image-spaceport-landscape.jpg'; 
import spaceportP from '../../images/img/technology/image-spaceport-portrait.jpg' 


export  function ImgspacePortrait (){

    return <div className="planet-block"><img className='crewimg' src={spaceportP} alt="Picture of the vehicle" /></div>
    
    }
    export  function ImgspaceLandscape (){
    
        return <div className="planet-block"><img className='crewimg' src={spaceportL} alt="Picture of the vehicle" /></div>
        
        }

export  function Spaceport() {
    return (
        <div className="Stack-Text">
        <h1 className="Stack-Text__title" >The terminology...</h1>
        <h2 className="Stack-Text__subtitle">Spaceport</h2>
        <p className="Stack-Text__paragraph">
        A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
        by analogy to the seaport for ships or airport for aircraft. Based in the 
        famous Cape Canaveral, our spaceport is ideally situated to take advantage 
        of the Earth’s rotation for launch.
        </p>            
        </div>
    )
}
