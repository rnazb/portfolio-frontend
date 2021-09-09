import PageCard from '../../components/UI/PageCard'
import { Container } from 'react-bootstrap'
import Articles from '../../components/Articles'
import { fetchAPI } from '../../lib/api'

import styles from './index.module.css'

export default function BlogPage({ articles }) {

  return (
    <div className={styles.page}>
      <Container>
        <PageCard>
          <h1 className={styles['page-title']}>Blog</h1>
          <p className={styles.disclaimer}><em>*These articles are the default works from integrating Strapi.io&apos;s content management system and remain here for demo puproses. All credits go to the original authors and creators. My own content is soon to follow ;) - Rey</em></p>
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
    revalidate: 1,
  }
}