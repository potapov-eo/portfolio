import React from 'react'
import style from './Work.module.scss';
import TitleItem from "../../common/components/TitleItem/TitleItem";


function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.imgContainer} style={props.style}>

            <button className={style.watch}> смотреть </button>
            </div>
            <TitleItem title={props.title}/>
            <p>{props.description}</p>

        </div>
    );
}

export default Work;