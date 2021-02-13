import React from 'react'
import style from './Footer.Module.css';
import styleContainer from "../common/syles/Container.module.css";


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>

                <h2 className={style.title}>POTAPOV EVGENY</h2>

                    <div className={style.networkBlock}>
                        <div className={style.network}>1</div>
                        <div className={style.network1}>2</div>
                        <div className={style.network}>3</div>
                        <div className={style.network1}>4</div>
                        <div className={style.network}>5</div>
                        <div className={style.network1}>6</div>
                        <div className={style.network}>7</div>
                    </div>

                <p className={style.fut}>© 2019 beingeorge, All Rights Reserved.</p>

            </div>
        </div>
    );
}

export default Footer;