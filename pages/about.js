import PageCard from '../components/UI/PageCard'
import { Container } from 'react-bootstrap'

import styles from './about.module.css'

import JavaScriptSVG from '../public/logo-javascript.svg'

export default function About() {
  return (
    <div className={styles.page}>
      <Container>
        <PageCard>
          <div className={styles['header-container']}>
            <JavaScriptSVG className={styles['javascript-logo']} />
            <h1 className={styles['page-title']}>About Page</h1>
          </div>
          <p className={styles['about-para']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis deleniti. Adipisci aperiam porro nobis exercitationem eaque fuga alias vel illo. Maiores deleniti quisquam sunt ab. </p>
          <p className={styles['about-para']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis deleniti. Adipisci aperiam porro nobis exercitationem eaque fuga alias vel illo. Maiores deleniti quisquam sunt ab.</p>
        </PageCard>
      </Container>
    </div>
  )
}