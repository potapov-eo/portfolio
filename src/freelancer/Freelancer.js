import React from 'react'
import style from './Freelancer.Module.scss';
import styleContainer from "../common/syles/Container.module.css";


function Freelancer() {
    return (
        <div className={style.freelancerBlock}>
            <div className={`${styleContainer.container} ${style.freelancerContainer}`}>
                <h2 className={style.title}>Рассматриваю вариант удаленной работы</h2>
                <button className={style.butt}>Нанять меня</button>
            </div>
        </div>
    );
}

export default Freelancer;