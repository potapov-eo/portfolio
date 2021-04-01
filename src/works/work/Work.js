import React from 'react'
import style from './Work.module.scss';
import TitleItem from "../../common/components/TitleItem/TitleItem";
import Button from "../../common/components/button/Button";


function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.imgContainer} style={props.style}>
            <Button href={props.href} className={style.button} text={"Click Me"}/>
            </div>
            <TitleItem title={props.title}/>
            <p>{props.description}</p>
            <p> <a  href={props.gitRepo}>Git repository</a></p>
        </div>
    );
}

export default Work;