import React from 'react'
import style from './Works.module.scss';
import Work from "./work/Work";
import Title from "../common/components/Title";
import CardQuestionsImage from "../../src/assets/image/CardsQuestions.PNG"
import ToDoImage from "../../src/assets/image/ToDo.PNG"
import Fade from 'react-reveal/Fade';

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
                        <Work  href={"https://potapov-eo.github.io/friday-day/"} style={cardQuestion}
                              title={"Cards Questions"}
                              description={"\"Technologies:React, Redux, REST API, Typescript, Formik, Material-UI, Unit-tests"}
                              gitRepo="https://github.com/potapov-eo/friday-day"/>

                        <Work  style={toDo}
                              title={"ToDo"}
                              description={"Technologies:React, Redux, REST API, Typescript, Material-UI," +
                              " Storybook, Unit-tests, IN PROGRESS"}
                              gitRepo=""/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Works;