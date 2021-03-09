import React from 'react'
import style from './Freelancer.Module.scss';
import styleContainer from "../common/syles/Container.module.css";
import TitleItem from "../common/components/TitleItem/TitleItem";


function Freelancer() {
    return (
        <div className={style.freelancerBlock}>
            <div className={`${styleContainer.container} ${style.freelancerContainer}`}>
               < TitleItem title={"Рассматриваю вариант удаленной работы"}/>
                <button className={style.butt}>Нанять меня</button>
            </div>
        </div>
    );
}

export default Freelancer;