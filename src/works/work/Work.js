import React from 'react'
import style from './Work.module.css';


function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.imgContainer} style={props.style}>

            <button className={style.watch}> смотреть </button>
            </div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>

        </div>
    );
}

export default Work;