import React from 'react'
import style from './Header.module.scss';
import Nav from '../nav/Nav';


function Header() {
    return (
        <div>
            <div className={style.headerBG} ></div>
        <div className={style.header}>
            <Nav/>
        </div>
        </div>
    );
}

export default Header;