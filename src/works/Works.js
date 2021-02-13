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
                    <Work src={"https://preview.themeforest.net/item/jeffrey-personal-portfolio-template/full_screen_preview/24187700?_ga=2.18315711.763890385.1563976908-1245260935.1563976797"}
                           title={"PORTFOLIO"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                    <Work src={"8315711.763890385.1563976908-1245260935.1563976797"}
                           title={"PORTFOLIO2"} description={"ssssssssss dddddddddd ddddddddddd"}/>
                </div>
            </div>
        </div>
    );
}

export default Works;