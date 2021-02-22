import React from 'react'
import style from './Contact.Module.css';
import styleContainer from "../common/syles/Container.module.css";


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>

                <h2 className={style.title}>Контакты</h2>
                <form className={style.contactsForm}>

                        <input type={"text"}/>

                        <input type={"text"}/>

                        <textarea> </textarea>

                </form>
                <button className={style.butt}>Отправить</button>

            </div>
        </div>
    );
}

export default Contact;