import React from 'react'
import specialist from '../../images/img/crew/image-mark-shuttleworth.png'

export  function ImgSpecialist (){

return <div className="planet-block"><img className='crewimg' src={specialist} alt="Specialist of the crew" /><div className="line" ></div></div>

}
export  function Specialist() {
    return (
        <div className="Stack-Text">
        <h1 className="Stack-Text__title" >Pilot</h1>
        <h2 className="Stack-Text__subtitle">Mark Shuttleworth</h2>
        <p className="Stack-Text__paragraph">
        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
        the Linux-based Ubuntu operating system. Shuttleworth became the first South 
        African to travel to space as a space tourist. 
        </p>            
        </div>
    )
}
