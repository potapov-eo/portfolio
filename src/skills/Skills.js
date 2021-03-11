import React from 'react'
import style from './Skills.module.scss';
import styleContainer from "../common/syles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faFileCode} from '@fortawesome/free-solid-svg-icons'


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill icon={ <FontAwesomeIcon icon={faJs} size="5x" color=" #22cd6f"  />} title={"JS"} description={"ssssssssss dddddddddd ddddddddddddddd"}/>
                    <Skill icon={ <FontAwesomeIcon icon={faReact} size="5x" color=" #22cd6f" />} title={"REACT"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                    <Skill icon={ <FontAwesomeIcon icon={faHtml5} size="5x" color=" #22cd6f" />} title={"HTML"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                    <Skill icon={ <FontAwesomeIcon icon={faFileCode} size="5x" color=" #22cd6f" />} title={"CSS"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;