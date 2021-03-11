import React from 'react'
import style from './Footer.Module.scss';
import styleContainer from "../common/syles/Container.module.css";
import TitleItem from "../common/components/TitleItem/TitleItem";
import {faVk, faJs, faInstagram, faFacebookSquare,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>


                < TitleItem title={"Potapov Evgeny"}/>

                    <div className={style.networkBlock}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" color=" #22cd6f"  className={style.FontAwesomeIcon} />
                        <FontAwesomeIcon icon={faVk} size="2x" color=" #22cd6f"  className={style.FontAwesomeIcon} />
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" color=" #22cd6f"  className={style.FontAwesomeIcon} />
                        <FontAwesomeIcon icon={faLinkedinIn} size="2x" color=" #22cd6f" className={style.FontAwesomeIcon} />

                    </div>

                <p className={style.futText}>© 2019 beingeorge, All Rights Reserved.</p>

            </div>
        </div>
    );
}

export default Footer;