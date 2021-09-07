import PageCard from '../components/UI/PageCard'
import { Container } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'

import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.page}>
      <Container>
        <PageCard>
          <h1 className={styles['page-title']}>Contact Page</h1>
          <ContactForm />
        </PageCard>
      </Container>
    </div>
  )
}