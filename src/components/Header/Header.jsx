import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {

    const [burgerState, setBurgerState] = useState(false)

    const toggleNav = () => {
        setBurgerState(state => !state)
    }

    const line1ToggleClass = () => {
        return !burgerState ? "line line-1" : "line line-1 line-1-animation"
    }

    const line2ToggleClass = () => {
        return !burgerState ? "line line-2" : "line line-2 line-2-animation"
    }

    const line3ToggleClass = () => {
        return !burgerState ? "line line-3" : "line line-3 line-3-animation"
    }

    const navContainerToggleClass = () => {
        return burgerState ? "nav-container" : "nav-container nav-container-animation"
    }
 
    return(
        <div className="header">
            <div className="logo-container">
                <Link to='/'> 
                    <h1 className="logo">I am Eudin</h1>
                </Link>
            </div>
            <div className={ navContainerToggleClass() } >
                <Link to='/'>
                    <label className='nav' onClick={ toggleNav }>Home</label>
                </Link>
                <Link to='/about'>
                    <label className="nav" onClick={ toggleNav }>About</label>
                </Link>
                <Link to='/skills'>
                    <label className="nav" onClick={ toggleNav }>Skills</label>
                </Link>
                <Link to='/projects'>
                    <label className="nav" onClick={ toggleNav } id="projects">Projects</label>
                </Link>
                <Link to='contact'>
                    <label className="nav" onClick={ toggleNav }>Contact</label>
                </Link>
            </div>
            <div onClick={ toggleNav } className="burger-container">
                <div className="burger-sub-container">
                    <div className={ line1ToggleClass() }></div>
                    <div className={ line2ToggleClass() }></div>
                    <div className={ line3ToggleClass() }></div>
                </div>
            </div>
        </div>
    )
}

export default Header;