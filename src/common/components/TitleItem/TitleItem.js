import React from 'react'
import style from './TitleItem.module.scss';


function TitleItem(props) {
    return (
        <div className={style.titleItem}>
            <h2>{props.title}</h2>
        </div>
    );
}

export default TitleItem;