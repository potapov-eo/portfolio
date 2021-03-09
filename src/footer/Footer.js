import React from 'react'
import style from './Footer.Module.scss';
import styleContainer from "../common/syles/Container.module.css";
import TitleItem from "../common/components/TitleItem/TitleItem";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>


                < TitleItem title={"Potapov Evgeny"}/>

                    <div className={style.networkBlock}>
                        <div className={style.network}>1</div>
                        <div className={style.network1}>2</div>
                        <div className={style.network}>3</div>
                        <div className={style.network1}>4</div>
                        <div className={style.network}>5</div>
                        <div className={style.network1}>6</div>
                        <div className={style.network}>7</div>
                    </div>

                <p className={style.futText}>© 2019 beingeorge, All Rights Reserved.</p>

            </div>
        </div>
    );
}

export default Footer;