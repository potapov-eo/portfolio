import React from 'react'
import style from './Skill.module.scss';
import TitleItem from "../../common/components/TitleItem/TitleItem";


function Skill(props) {
    return (
        <div className={style.skill}>
            {props.icon}
            <TitleItem title={props.title}/>
        </div>
    );
}

export default Skill;