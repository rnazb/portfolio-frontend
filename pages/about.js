import PageCard from '../components/UI/PageCard'
import { Container } from 'react-bootstrap'

import styles from './about.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <Container>
        <PageCard>
          <h1 className={styles['page-title']}>About Page</h1>
        </PageCard>
      </Container>
    </div>
  )
}