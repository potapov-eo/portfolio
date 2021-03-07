import React from 'react'
import style from './Contact.Module.css';
import styleContainer from "../common/syles/Container.module.css";
import Title from "../common/components/Title";


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title title={"Contacts"}/>
                <form className={style.contactsForm}>

                    <input type={"text"}/>

                    <input type={"text"}/>

                    <textarea> </textarea>

                </form>
                <button type={"submit"} className={style.butt}>Отправить</button>

            </div>
        </div>
    );
}

export default Contact;