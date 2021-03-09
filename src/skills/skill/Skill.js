import React from 'react'
import style from './Skill.module.scss';
import TitleItem from "../../common/components/TitleItem/TitleItem";


function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
           <TitleItem title={props.title}/>
            <span className={style.description}>{props.description}</span>

        </div>
    );
}

export default Skill;