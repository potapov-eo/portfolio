import React from 'react'
import style from './Freelancer.Module.scss';
import Button from "../common/components/button/Button";
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll";

function Freelancer() {
    return (
        <div className={style.freelancerBlock}>
            <Fade right>
                <div className={style.freelancerContainer}>
                    < h2>РАССМАТРИВАЮ ВАРИАНТ УДАОЕННОЙ РАБОТЫ</h2>
                   {/* <Button target="_self" href={"#contacts"} text={"Нанять меня"}/>*/}
                    <div className={style.btn} > <Link
                        activeClass={style.active}
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-250}
                        duration={500}
                    >hire me</Link></div>
                </div>
            </Fade>
        </div>
    );
}

export default Freelancer;