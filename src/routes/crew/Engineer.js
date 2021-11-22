import React from 'react'
import engineer from '../../images/img/crew/image-anousheh-ansari.png'

export  function ImgEngineer (){

return <div className="planet-block"><img className='crewimg' src={engineer} alt="Picture of Engineer" /><div className="line" ></div></div>

}


export  function Engineer() {
    return (
        <div className="Stack-Text">
        <h1 className="Stack-Text__title" >Commander</h1>
        <h2 className="Stack-Text__subtitle">Anousheh Ansari</h2>
        <p className="Stack-Text__paragraph">
        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
        Ansari was the fourth self-funded space tourist, the first self-funded woman to 
        fly to the ISS, and the first Iranian in space. 
        </p>            
        </div>
    )
}
