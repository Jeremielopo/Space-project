import React from 'react';
import{ NavLink } from 'react-router-dom';
import Mylogo from '../images/composants/logo.svg';
import Modal from 'react-modal';


Modal.setAppElement('#app');
const customStyles = {
  content: {
    top: '0%',
    left: '50%',
    right: '0',
    bottom: '50%',
    marginRight: '-50%',
    transform: 'translate(0%, -0%)',
    display: 'flex',

  },
};



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
        <NavLink to="/" ><img src={Mylogo} alt="" /></NavLink> 
        </div>
        <button id="Hamburger" onClick={openModal} className="Hamburger">
        <span></span>
        </button>  
        <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    className='Modal'
    overlayClassName="Overlay"
    >
    <button id='close' onClick={closeModal}></button>
    <nav className='main-navbar'>
    <li className="main-navbar__item"><NavLink to="/"  className="main-navbar__link"  onClick={closeModal}> <span className='main-navbar__link__num'>00</span> Home</NavLink> </li> 
    <li className="main-navbar__item"><NavLink to="/Destination/Moon" className="main-navbar__link" onClick={closeModal}><span className='main-navbar__link__num'>01</span> Destination</NavLink> </li> 
    <li className="main-navbar__item"> <NavLink to="/Crew/Commander"   className="main-navbar__link"  onClick={closeModal}> <span className='main-navbar__link__num'>02</span> Crew</NavLink></li>  
    <li className="main-navbar__item"><NavLink to="/Technology/Vehicle"   className="main-navbar__link" onClick={closeModal} > <span className='main-navbar__link__num'>03</span> Technology</NavLink> </li>
 
    </nav>



    </Modal>
    </header>
 
       
    )
}

