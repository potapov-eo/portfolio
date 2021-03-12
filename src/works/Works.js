import React from 'react'
import style from './Works.module.scss';
import Work from "./work/Work";
import Title from "../common/components/Title";
import CardQuestionsImage from "../../src/assets/image/CardsQuestions.PNG"
import ToDoImage from "../../src/assets/image/ToDo.PNG"
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";

function Works() {
    const cardQuestion = {
        backgroundImage: `url(${CardQuestionsImage})`,
    };
    const toDo = {
        backgroundImage: `url(${ToDoImage})`,
    };
    return (

        <div id="projects" className={style.worksBlock}>
            <Fade left>
                <div className={style.worksContainer}>
                    <Title title={"Projects"}/>
                    <div className={style.works}>
                        <Work href={"https://potapov-eo.github.io/friday-day/#/packs"} style={cardQuestion} title={"Cards Questions"}
                              description={"ssssssssss dddddddddd ddddddddddd"}/>
                        <Work style={toDo} title={"ToDo"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Works;