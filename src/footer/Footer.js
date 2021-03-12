import React from 'react'
import style from './Footer.Module.scss';
import TitleItem from "../common/components/TitleItem/TitleItem";
import {faFacebookSquare, faInstagram, faLinkedinIn, faVk} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>


                < TitleItem title={"Potapov Evgeny"}/>

                <div className={style.networkBlock}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" color=" #22cd6f" className={style.FontAwesomeIcon}/>
                    <FontAwesomeIcon icon={faVk} size="2x" color=" #22cd6f" className={style.FontAwesomeIcon}/>
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" color=" #22cd6f"
                                     className={style.FontAwesomeIcon}/>
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" color=" #22cd6f" className={style.FontAwesomeIcon}/>

                </div>

                <p className={style.futText}>© 2019 beingeorge, All Rights Reserved.</p>

            </div>
        </div>
    );
}

export default Footer;