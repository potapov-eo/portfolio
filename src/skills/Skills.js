import React from 'react'
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/Title";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons'
import {faFileCode} from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';
import Tilt from "react-tilt";

function Skills() {
    return (
        <div id="skills" className={style.skillsBlock}>
            <Fade right>
                <div className={style.skillsContainer}>
                    <Title title={"Skills"}/>
                    <div className={style.skills}>
                        <Tilt className="Tilt" options={{max: 35,}}>
                            <Skill icon={<FontAwesomeIcon icon={faJs} size="5x" color=" #22cd6f"/>} title={"JS, TS"}/>
                        </Tilt>
                        <Tilt className="Tilt" options={{max: 35,}}>
                            <Skill icon={<FontAwesomeIcon icon={faReact} size="5x" color=" #22cd6f"/>} title={"React, Redux"}/>
                        </Tilt>
                        <Tilt className="Tilt" options={{max: 35,}}>
                            <Skill icon={<FontAwesomeIcon icon={faHtml5} size="5x" color=" #22cd6f"/>} title={"HTML"}/>
                        </Tilt>
                        <Tilt className="Tilt" options={{max: 35,}}>
                            <Skill icon={<FontAwesomeIcon icon={faFileCode} size="5x" color=" #22cd6f"/>} title={"CSS"}
                                   description={"ssssssssss dddddddddd ddddddddddd"}/>
                        </Tilt>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;