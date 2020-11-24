import React from 'react'
import style from './Main.module.css';


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className ={style.text} > text </div>
            <div className ={style.photo} > photo </div>
        </div>
    );
}

export default Main;