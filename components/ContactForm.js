import styles from './ContactForm.module.css'

export default function ContactForm() {
  return (
    <form className={styles['contact-form']}>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="text" placeholder="Email" />
      <textarea placeholder="Message" rows="7" />
    </form>
  )
}