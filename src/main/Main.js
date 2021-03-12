import React from 'react'
import style from './Main.module.scss';
import me from "../../src/assets/image/me.png"
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const particlesOptions = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        }
    }
}


function Main() {
    return (
        <div id="main" className={style.mainBlock}>
          {/*  <Particles className={style.particles} params={particlesOptions}/>*/}
            <Fade left>
                <div className={style.mainContainer}>
                    <div className={style.text}>
                        <p>Hi There</p>
                        <h1>Potapov Evgeny</h1>

                        <ReactTypingEffect
                            text="Frontend Developer"
                        />
                    </div>

                        <div className={style.photoContainer}>
                            <img className={style.photo} src={me}
                                 alt="ME"/>
                        </div>



                </div>
            </Fade>
        </div>
    );
}

export default Main;