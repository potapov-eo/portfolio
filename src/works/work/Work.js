import React from 'react'
import style from './Work.module.css';


function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.pic}>
            <img  src={props.src} alt="альтернативный текст" />
            <div className={style.watch}> смотреть </div>
            </div>
            <h2>{props.title}</h2>
            <span className={style.description}>{props.description}</span>

        </div>
    );
}

export default Work;