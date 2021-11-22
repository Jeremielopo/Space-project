import React from 'react'
import vehicleL from '../../images/img/technology/image-launch-vehicle-landscape.jpg';
import vehicleP from '../../images/img/technology/image-launch-vehicle-portrait.jpg'   


export  function ImgvehiclePortrait (){

return <div className="planet-block"><img className='crewimg' src={vehicleP} alt="Picture of the vehicle" /></div>

}
export  function ImgvehicleLandscape (){

    return <div className="planet-block"><img className='crewimg' src={vehicleL} alt="Picture of the vehicle" /></div>
    
    }


export  function Vehicle() {
    return (
        <div className="Stack-Text">
        <h1 className="Stack-Text__title" >The terminology...</h1>
        <h2 className="Stack-Text__subtitle">Launch vehicle</h2>
        <p className="Stack-Text__paragraph">
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
        payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
        WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
        it's quite an awe-inspiring sight on the launch pad!
        </p>            
        </div>
    )
}
