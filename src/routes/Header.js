import React from 'react';
import{ NavLink } from 'react-router-dom';




const Header = () =>(
    <header>
    <h1>My portfolio Lol</h1>
    <NavLink to="/"  className="is-active" > Home</NavLink>{' '}
    <NavLink to="/portfolio" className="is-active">Portfolio</NavLink>{' '}
    <NavLink to="/Contact"   className="is-active" > Contact</NavLink>
    </header>
    );

    export default Header; 