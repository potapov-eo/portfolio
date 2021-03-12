import React from 'react'
import style from './Freelancer.Module.scss';
import Button from "../common/components/button/Button";
import Fade from 'react-reveal/Fade';

function Freelancer() {
    return (
        <div className={style.freelancerBlock}>
            <Fade right>
                <div className={style.freelancerContainer}>
                    < h2>РАССМАТРИВАЮ ВАРИАНТ УДАОЕННОЙ РАБОТЫ</h2>
                    <Button text={"Нанять меня"}/>

                </div>
            </Fade>
        </div>
    );
}

export default Freelancer;