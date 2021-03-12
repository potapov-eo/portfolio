import React from 'react'
import style from './Works.module.scss';
import styleContainer from "../common/syles/Container.module.css";
import Work from "./work/Work";
import Title from "../common/components/Title";
import CardQuestionsImage from "../../src/assets/image/CardsQuestions.PNG"
import ToDoImage from "../../src/assets/image/ToDo.PNG"

function Works() {
    const cardQuestion = {
       backgroundImage: `url(${CardQuestionsImage})`,
    };
    const toDo = {
        backgroundImage: `url(${ToDoImage})`,
    };
    return (

        <div className={style.worksBlock}>
            <div className={style.worksContainer}>
                <Title title={"Works"}/>
                <div className={style.works}>
                    <Work style={cardQuestion} title={"Cards Questions"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                    <Work style={toDo} title={"ToDo"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                </div>
            </div>
        </div>
    );
}

export default Works;