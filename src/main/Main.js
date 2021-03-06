import React from 'react'
import style from './Main.module.css';
import styleContainer from "../common/syles/Container.module.css"

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>Potapov Evgeny</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}> photo</div>
            </div>
        </div>
    );
}

export default Main;