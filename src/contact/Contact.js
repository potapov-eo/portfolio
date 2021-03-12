import React from 'react'
import style from './Contact.Module.scss';
import Title from "../common/components/Title";


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={style.contactContainer}>
                <Title title={"Contacts"}/>
                <form className={style.contactsForm}>

                    <input placeholder={"your name"}
                           type={"text"}/>

                    <input type={"text"}/>

                    <textarea> </textarea>

                </form>
                <button type={"submit"} className={style.showBut}>Отправить</button>

            </div>
        </div>
    );
}

export default Contact;