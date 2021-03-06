import React from 'react'
import style from './Title.module.css';


function Title(props) {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Title;