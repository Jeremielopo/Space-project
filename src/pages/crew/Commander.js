import React from 'react'
import commander from '../../images/img/crew/image-douglas-hurley.png'


export  function ImgCommander (){

return <div className="planet-block"><img className='crewimg' src={commander} alt="Picture of the commander" /><div className="line" ></div></div>

}





export function Commander() {
    return (
        <div className="Stack-Text">
        <h1 className="Stack-Text__title" >Commander</h1>
        <h2 className="Stack-Text__subtitle">Douglas Hurley</h2>
        <p className="Stack-Text__paragraph">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
        and former NASA astronaut. He launched into space for the third time as 
        commander of Crew Dragon Demo-2.
        </p>            
        </div>
    )
}
