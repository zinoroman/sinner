import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-header">
            <nav className="main-header__nav">                
                <NavLink to='/' 
                         activeClassName="active"
                         className="main-header__nav-item">
                    <svg className="icon icon--home"> 
                        <use xlinkHref="images/svg-symbols.svg#home"></use> 
                    </svg>
                    <span className="main-header__nav-item-text">Home</span>
                </NavLink>
                <NavLink to='/sins' 
                         activeClassName="active"
                         className="main-header__nav-item">Sins</NavLink>
                    <svg className="icon icon--list"> 
                        <use xlinkHref="images/svg-symbols.svg#list"></use> 
                    </svg>
                    <span className="main-header__nav-item-text">Sins list</span>
                <NavLink to='/addsins' 
                         activeClassName="active"
                         className="main-header__nav-item">
                    <svg className="icon icon--add"> 
                        <use xlinkHref="images/svg-symbols.svg#add"></use> 
                    </svg>
                    <span className="main-header__nav-item-text">Add Sins</span>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;