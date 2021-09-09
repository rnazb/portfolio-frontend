import PageCard from '../../components/UI/PageCard'
import { Container } from 'react-bootstrap'
import Portfolio from '../../components/Portfolio'
import { fetchAPI } from '../../lib/api'

import styles from './index.module.css'

export default function PortfolioPage({ portfolio }) {
  return (
    <div className={styles.page}>
      <Container>
        <PageCard>
          <h1 className={styles['page-title']}>Portfolio</h1>
          <Portfolio portfolio={portfolio} />
        </PageCard>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const portfolio = await fetchAPI('/portfolio')

  return {
    props: { portfolio },
    revalidate: 1,
  }
}