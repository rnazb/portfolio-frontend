import PageCard from '../../components/UI/PageCard'
import { Container } from 'react-bootstrap'
import Articles from '../../components/Articles'
import { fetchAPI } from '../../lib/api'

import styles from './index.module.css'

export default function Blog({ articles }) {
  return (
    <div className={styles.page}>
      <Container>
        <PageCard>
          <h1 className={styles['page-title']}>Blog Page</h1>
          <Articles articles={articles} />
        </PageCard>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const articles = await fetchAPI('/articles')

  return {
    props: { articles },
    revalidate: 10,
  };
}