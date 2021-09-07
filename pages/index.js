import { useRef } from 'react'

import Image from 'next/image'
import { Container, Row, Col, Card } from 'react-bootstrap'
import PageCard from '../components/UI/PageCard'
import ContactForm from '../components/ContactForm'
import Seo from '../components/Seo'
import { fetchAPI } from '../lib/api'

import styles from './index.module.css'

import GithubSocial from '../public/github.svg'
import LinkedinSocial from '../public/linkedin.svg'
import MailSocial from '../public/mail.svg'

import MongodbSVG from '../public/icons/mongodb.svg'
import ExpressSVG from '../public/icons/express-109.svg'
import ReactSVG from '../public/icons/react-js.svg'
import NodejsSVG from '../public/icons/nodejs.svg'
import NextjsSVG from '../public/icons/nextjs.svg'
import NetlifySVG from '../public/icons/netlify.svg'
import HerokuSVG from '../public/icons/heroku-1.svg'
import VercelSVG from '../public/icons/vercel.svg'
import GithubSVG from '../public/icons/github-2.svg'
import GitlabSVG from '../public/icons/gitlab-1.svg'
import CloudinarySVG from '../public/icons/cloudinary-1.svg'
import NodesassSVG from '../public/icons/node-sass.svg'
import GoogleAnalyticsSVG from '../public/icons/google-analytics-2.svg'
import HubspotSVG from '../public/icons/hubspot.svg'
import ActiveCampaignSVG from '../public/icons/activecampaign-1.svg'
import FacebookAdsSVG from '../public/icons/facebook-ads.svg'

export default function Home({ homepage }) {
  const formRef = useRef(null)

  const scrollClickHandler = () => formRef.current.scrollIntoView()

  return (
    <>
      <Seo seo={homepage.seo} />
      <Container>
        <Row className="px-0 mx-0 w-100">
          <Container className={styles['main-header-container']}>
            <div>
              <h1 className={styles.title}>
                <span>Fullstack Web</span>
                <span>Development</span>
              </h1>
            </div>
            <button
              className={styles.button}
              onClick={scrollClickHandler}
            >
              Get in Touch
            </button>
          </Container>
        </Row>
      </Container>

      <Container className="mb-3">
        <PageCard>
          <Row>
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 7, order: 1 }}
            >
              <Card.Body>
                <h3 className={styles['about-title']}>Hi! Nice to meet you!</h3>
                <p className={styles['about-para']}>
                  My name is Rey Nazareno and I am a fullstack javascript developer. MERN is my stack of choice (MongoDB, Express, React, and Node.js) for developing progressive web applications.
                </p>
                <p className={styles['about-para']}>
                  Originally, I helped my clients through digital marketing, implementing a full-suite of marketing automation, performance marketing, and content development services. Now I leverage that experience along with my knowledge of programming to develop modern software solutions.
                </p>
              </Card.Body>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 5, order: 2 }}
            >
              <div className={styles['pic-wrapper']}>
                <Image
                  src="/img/profile-pic.jpg"
                  className={styles['profile-pic']}
                  height="200"
                  width="200"
                  layout="fixed"
                  alt=""
                />
              </div>
              <div className={styles['contact-details']}>
                <p className={styles['contact-detail']}>
                  Email: <u>r.nazbat@gmail.com</u>
                </p>
                <p className={styles['contact-detail']}>
                  Mobile: <u>+63 (939) 928 5412</u>
                </p>
              </div>
              <div className={styles['social-container']}>
                <a
                  href="https://github.com/rnazb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubSocial className={styles['social-icon']} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rey-nazareno/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinSocial className={styles['social-icon']} />
                </a>
                <a
                  href="mailto:r.nazbat@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MailSocial className={styles['social-icon']} />
                </a>
              </div>
            </Col>
          </Row>
        </PageCard>
      </Container>

      <Container>
        <Row className="mb-4">
          <Col className="px-0 mb-4">
            <Container className="h-100">
              <PageCard>
                <Card.Body>
                  <Card.Title className="text-center">Technologies I work with</Card.Title>
                  <div className={styles['icon-container']}>
                    <MongodbSVG className={styles['svg-icon']} />
                    <ExpressSVG className={styles['svg-icon']} />
                    <ReactSVG className={styles['svg-icon']} />
                    <NodejsSVG className={styles['svg-icon']} />
                  </div>
                  <div className={styles['icon-container']}>
                    <NextjsSVG className={styles['svg-icon']} />
                    <NetlifySVG className={styles['svg-icon']} />
                    <HerokuSVG className={styles['svg-icon']} />
                    <VercelSVG className={styles['svg-icon']} />
                  </div>
                  <div className={styles['icon-container']}>
                    <GithubSVG className={styles['svg-icon']} />
                    <GitlabSVG className={styles['svg-icon']} />
                    <CloudinarySVG className={styles['svg-icon']} />
                    <NodesassSVG className={styles['svg-icon']} />
                  </div>
                  <div className={styles['icon-container']}>
                    <GoogleAnalyticsSVG className={styles['svg-icon']} />
                    <HubspotSVG className={styles['svg-icon']} />
                    <ActiveCampaignSVG className={styles['svg-icon']} />
                    <FacebookAdsSVG className={styles['svg-icon']} />
                  </div>
                </Card.Body>
              </PageCard>
            </Container>
          </Col>

          <Col className="px-0 mb-4" ref={formRef}>
            <Container className="h-100">
              <PageCard>
                <Card.Body>
                  <Card.Title className="mx-5 text-center">Get in Touch</Card.Title>
                  <ContactForm />
                </Card.Body>
              </PageCard>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const homepage = await fetchAPI('/homepage')
  return {
    props: { homepage },
    revalidate: 10,
  }
}