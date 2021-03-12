import React from 'react'
import style from './Freelancer.Module.scss';
import TitleItem from "../common/components/TitleItem/TitleItem";


function Freelancer() {
    return (
        <div className={style.freelancerBlock}>
            <div className={style.freelancerContainer}>
                < TitleItem title={"Рассматриваю вариант удаленной работы"}/>
                <button className={style.butt}>Нанять меня</button>
            </div>
        </div>
    );
}

export default Freelancer;