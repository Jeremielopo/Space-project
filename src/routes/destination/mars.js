import React from 'react'
import mars from '../../images/img/destination/image-mars.png'

export  function ImgMars (){

return <img className='marsimg' src={mars} alt="image of mars" />

}



export  function Mars() {
    return (




        <section className='Planet-Mars'>
         <h1 className="Planet-Mars__title">Mars </h1>
       <p className="Planet-Mars__Text"> Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
        the tallest planetary mountain in our solar system. It’s two and a half times 
        the size of Everest!</p>
        <div className="line" ></div>
        <div className="Block">
        <p>
        Avg. distance<br/><br/>
        <span className='Block__elements'>225 mil. km</span> 
        </p>
        <p>
        Est. travel time<br/><br/>
        <span  className='Block__elements'>9 months</span></p>
        </div>
        </section>
    )
}
