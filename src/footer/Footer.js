import React from 'react'
import style from './Footer.Module.scss';
import TitleItem from "../common/components/TitleItem/TitleItem";
import {faGithub, faLinkedinIn, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>


                < TitleItem className={style.TitleItem} title={"Potapov Evgeny"}/>

                <div className={style.networkBlock}>
                    <a href="https://t.me/potapov_eo">
                        <FontAwesomeIcon icon={faTelegramPlane} size="2x" color=" #22cd6f"
                                         className={style.FontAwesomeIcon}/>
                    </a>


                    <a href="https://www.linkedin.com/in/evgeny-potapov-23a591209/">
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" color=" #22cd6f"
                                         className={style.FontAwesomeIcon}/>
                    </a>
                    <a href="mailto:potapov.eo@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" color=" #22cd6f"
                                         className={style.FontAwesomeIcon}/>
                    </a>
                    <a href="https://github.com/potapov-eo">
                        <FontAwesomeIcon icon={faGithub} size="2x" color=" #22cd6f" className={style.FontAwesomeIcon}/>
                    </a>

                </div>

                <p className={style.futText}>© 2021 All Rights Reserved.</p>

            </div>
        </div>
    );
}

export default Footer;