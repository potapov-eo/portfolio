import React from 'react'
import style from './Main.module.scss';
import styleContainer from "../common/syles/Container.module.css"
import me from "../../src/assets/image/me.png"
function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <p>Hi There</p>
                    <h1>Potapov Evgeny</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photoContainer}>
                <img  className={style.photo} src={me}
                     alt="MDN"/>
                </div>
                 </div>
        </div>
    );
}

export default Main;