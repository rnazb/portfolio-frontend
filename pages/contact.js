import PageCard from '../components/UI/PageCard'
import { Container } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'

import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.page}>
      <Container className={styles.container}>
        <PageCard>
          <h1 className={styles['page-title']}>Contact Me</h1>
          <ContactForm />
        </PageCard>
      </Container>
    </div>
  )
}