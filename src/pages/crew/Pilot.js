import React from 'react'
import pilot from '../../images/img/crew/image-victor-glover.png'

export  function ImgPilot (){

return <div className="planet-block"><img className='crewimg' src={pilot} alt="Picture of a pilot" /><div className="line" ></div></div>

}


export  function Pilot() {
    return (
        <div className="Stack-Text">
        <h1 className="Stack-Text__title" >Pilot</h1>
        <h2 className="Stack-Text__subtitle">Victor Glover</h2>
        <p className="Stack-Text__paragraph">
        Pilot on the first operational flight of the SpaceX Crew Dragon to the 
        International Space Station. Glover is a commander in the U.S. Navy where 
        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
        station systems flight engineer. 
        </p>            
        </div>
    )
}
