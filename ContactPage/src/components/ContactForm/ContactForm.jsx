import React from 'react'

import styles from "./Contact.module.css";
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import { MdAddCall , MdOutlineEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={styles.container}>

        <div className={styles.contact_form}>
            <div className={styles.top_button}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24}/>}/>
                <Button text="VIA CALL" icon={<MdAddCall fontSize={24} />}/>
                
            </div>
            <div>
                <Button text="VIA EMAIL" isOutline={true} icon={<MdOutlineEmail fontSize={24} />}/>
            </div>
        
        
            <form action="">
                <div className={styles.form_control}>
                    <input type="text" name="name" required />
                    <label htmlFor="name">Name</label>
                </div>

                <div className={styles.form_control}>
                    <input type="email" name="email" required />
                    <label htmlFor="email">E-Mail</label>
                </div>

                <div className={styles.form_control}>
                    <textarea name="text" rows="4" required placeholder=" "></textarea>
                    <label htmlFor="text">Text</label>
                </div>

                <div style={{display:'flex' , justifyContent:'end'}}>
                    <Button text="SUBMIT"/>
                </div>
            </form>

        </div>
        
        <div className={styles.contact_image}>
            <img src="/images/lady.svg" alt="contactSVg" />
        </div>

    </section>
  )
}

export default ContactForm