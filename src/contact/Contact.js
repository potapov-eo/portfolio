import React from 'react'
import style from './Contact.Module.scss';
import Title from "../common/components/Title";
import Fade from 'react-reveal/Fade';

function Contact() {
    return (
        <div id="contacts" className={style.contactBlock}>
            <Fade left>
            <div className={style.contactContainer}>
                <Title title={"Contacts"}/>
                <form className={style.contactsForm}>

                    <input placeholder="your name"
                           type={"text"} className={style.formArea}/>

                    <input type={"text"} className={style.formArea} placeholder="e-mail"/>

                    <textarea className={style.messageArea} placeholder="send message"/>

                </form>
                <button type={"submit"} className={style.showBut}>Отправить</button>

            </div>
            </Fade >
        </div>
    );
}

export default Contact;