import PageCard from '../components/UI/PageCard'
import { Container } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

import styles from './about.module.css'

import JavaScriptSVG from '../public/logo-javascript.svg'
import { fetchAPI } from '../lib/api'

export default function About({ data }) {
  return (
    <div className={styles.page}>
      <Container>
        <PageCard>
          <div className={styles['header-container']}>
            <JavaScriptSVG className={styles['javascript-logo']} />
            <h1 className={styles['page-title']}>About Me</h1>
          </div>
          <div className={styles['body-container']}>
            <ReactMarkdown>
              {data.description}
            </ReactMarkdown>
          </div>
        </PageCard>
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const fetch = await fetchAPI('/about')
  const data = JSON.stringify(fetch)

  return {
    props: { data },
    revalidate: 1,
  }
}