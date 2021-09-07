import PageCard from '../../components/UI/PageCard'
import { Container } from 'react-bootstrap'

import styles from './index.module.css'

export default function Blog() {
  return (
    <div className={styles.page}>
      <Container>
        <PageCard>
          <h1 className={styles['page-title']}>Blog Page</h1>
        </PageCard>
      </Container>
    </div>
  )
}