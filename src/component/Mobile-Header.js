import React from 'react';
import{ NavLink } from 'react-router-dom';
import Mylogo from '../images/composants/logo.svg';
import Modal from 'react-modal';


Modal.setAppElement('#app');




export default function MobileHeader() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
        function openModal() {
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
    
    return (
        
            <header className='navbar__Mobile' >
        <div className="logo">
        <img src={Mylogo} alt="" />
        </div>
        <button id="Hamburger" onClick={openModal} className="Hamburger">
        <span></span>
        </button>   
        <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    >
    <button onClick={closeModal}>close</button>
    <nav className='main-navbar'>
    <li className="main-navbar__item"><NavLink to="/"  className="main-navbar__link"  onClick={closeModal}> Home</NavLink> </li> 
    <li className="main-navbar__item"><NavLink to="/Destination" className="main-navbar__link" onClick={closeModal}>Destination</NavLink> </li> 
    <li className="main-navbar__item"> <NavLink to="/Crew"   className="main-navbar__link"  onClick={closeModal}> Crew</NavLink></li>  
    <li className="main-navbar__item"><NavLink to="/Technology"   className="main-navbar__link" onClick={closeModal} > Technology</NavLink> </li>
 
    </nav>



    </Modal>
    </header>
 
       
    )
}

