import React from 'react'
import style from './Works.module.css';
import styleContainer from "../common/syles/Container.module.css";
import Work from "./work/Work";


function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Works</h2>
                <div className={style.works}>
                    <Work title={"PORTFOLIO"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                    <Work title={"PORTFOLIO2"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                </div>
            </div>
        </div>
    );
}

export default Works;