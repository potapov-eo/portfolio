import React from 'react'
import style from './Skills.module.scss';
import styleContainer from "../common/syles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/Title";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"js"}
                           description={"ssssssssss dddddddddd dddddddssssssssss dddddddddd ddddddddddddddd"}/>
                    <Skill title={"react"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                    <Skill title={"HTML"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                    <Skill title={"HTML"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;