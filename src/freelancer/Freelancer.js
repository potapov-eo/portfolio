import React from 'react'
import style from './Freelancer.Module.scss';
import TitleItem from "../common/components/TitleItem/TitleItem";
import Button from "../common/components/button/Button";


function Freelancer() {
    return (
        <div className={style.freelancerBlock}>
            <div className={style.freelancerContainer}>
                < h2>РАССМАТРИВАЮ ВАРИАНТ УДАОЕННОЙ РАБОТЫ</h2>
                <Button text={"Нанять меня"}/>

            </div>
        </div>
    );
}

export default Freelancer;