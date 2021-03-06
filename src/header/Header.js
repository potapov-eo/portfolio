import React from 'react'
import style from './Header.module.scss';
import Nav from './nav/Nav';
import BurgerNav from "./burgerNav/BurgerNav";


function Header() {
    return (
        <div>
            <div className={style.header}>
                <Nav/>
                <BurgerNav/>
            </div>
        </div>
    );
}

export default Header;