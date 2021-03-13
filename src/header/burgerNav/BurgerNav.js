import style from './BurgerNav.module.scss';
import {Link} from "react-scroll";
import React, {useState} from 'react'
import Fade from 'react-reveal/Fade';

function BurgerNav() {
    let [menuIsOpen, setMenuIsOpen] = useState(false)
    const setMenu = () => setMenuIsOpen(!menuIsOpen)
    const btnName = menuIsOpen? "Close" : "Menu"
    return (
        <div className={style.BurgerNav}>
            {menuIsOpen&&<Fade top><div className={style.burgerNavItems}>
                <Link
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Main</Link>
                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={style.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-65}
                    duration={500}
                >Projects</Link>
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-250}
                    duration={500}
                >Contacts</Link>
            </div></Fade>}
            <div onClick={setMenu} className={style.burgerButton}> {btnName} </div>
        </div>
    );
}

export default BurgerNav;