import React from 'react'
import style from './Button.module.scss';


function Button(props) {
    const target = props.target? props.target:"_blank"
    return (
        <a href={props.href} target={target} className={style.btn}>{props.text}</a>
    );
}

export default Button;