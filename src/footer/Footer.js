import React from 'react'
import style from './Footer.Module.scss';
import TitleItem from "../common/components/TitleItem/TitleItem";
import {faFacebookSquare, faInstagram, faLinkedinIn, faVk} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>


                < TitleItem className={style.TitleItem} title={"Potapov Evgeny"}/>

                <div className={style.networkBlock}>
                  <a href=""> <FontAwesomeIcon icon={faInstagram} size="2x" color=" #22cd6f" className={style.FontAwesomeIcon}/></a>
                    <a href=""> <FontAwesomeIcon icon={faVk} size="2x" color=" #22cd6f" className={style.FontAwesomeIcon}/></a>
                    <a href=""><FontAwesomeIcon icon={faFacebookSquare} size="2x" color=" #22cd6f"
                                     className={style.FontAwesomeIcon}/></a>
                    <a href=""><FontAwesomeIcon icon={faLinkedinIn} size="2x" color=" #22cd6f" className={style.FontAwesomeIcon}/></a>

                </div>

                <p className={style.futText}>© 2021  All Rights Reserved.</p>

            </div>
        </div>
    );
}

export default Footer;