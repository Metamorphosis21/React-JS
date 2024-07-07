import React from 'react'
import styles from './ContactMe.module.css'

function ContactMe() {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.contactHead}>
        <h1>Contact Me</h1>
      </div>
      <div className={styles.formContainer}>
        <form>
          {/* <label for="name">Name:</label> */}
          <input type="text" id="name" name="name" placeholder='Name'  className={styles.inputField} />
          <br />
          {/* <label for="email">Email:</label> */}
          <input type="email" id="email" name="email" placeholder='Email'  className={styles.inputField} />
          <br />
          {/* <label for="message">Message:</label> */}
          <textarea id="message" name="message" placeholder='Message' className={styles.textareaField} />
          <div className={styles.btn}>
            <input type="submit" value="Submit" className={styles.submitButton}/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactMe