import React from 'react'
import style from './Work.module.css';


function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.imgContainer}>

            <a className={style.watch}> смотреть </a>
            </div>
            <h2>{props.title}</h2>
            <span className={style.description}>{props.description}</span>

        </div>
    );
}

export default Work;