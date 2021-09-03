import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import ParticleCloudCanvas from '../components/ParticleCloudCanvas'
import { Container, Row, Col, Card } from 'react-bootstrap'
import styles from './index.module.css'

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

export default function Home() {

  return (
    <>
      <Container>
        <ParticleCloudCanvas />
        <Row className="px-0 mx-0 w-100">
          <Container className={styles['main-header-container']}>
            <div>
              <h1 className={styles.title}>
                <span>Fullstack Web</span>
                <span>Development</span>
              </h1>
              {/* <h3 className={styles.name}>
                <span>Rey Nazareno</span>
              </h3> */}
            </div>
            <button className={styles.button}>Click</button>
          </Container>
        </Row>
      </Container>

      <Container>
        <Row className="mt-3">
          <Col className="d-flex flex-row justify-content-center">
            <Card className="mt-3">
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
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="mt-3">
          <Col className="d-flex flex-row justify-content-center">
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Technologies I work with</Card.Title>
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
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <h1>Start</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita voluptatem asperiores nulla. Veniam commodi dignissimos nemo saepe repellat in minus magni rerum, cumque ducimus, rem voluptatibus suscipit tempora ipsa. Optio temporibus esse ipsam debitis numquam facilis eos ipsum? In ut eius autem. Atque, ex animi. Ducimus cum ab, officia eum ex ratione dolorum eveniet sed doloremque vero magnam deserunt! Dolorum sit repudiandae illum, ullam doloribus aspernatur dolor nulla aperiam sequi ex delectus natus culpa eum nemo magni alias itaque quos placeat ipsum saepe quam magnam? Inventore eius mollitia consequuntur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita voluptatem asperiores nulla. Veniam commodi dignissimos nemo saepe repellat in minus magni rerum, cumque ducimus, rem voluptatibus suscipit tempora ipsa. Optio temporibus esse ipsam debitis numquam facilis eos ipsum? In ut eius autem. Atque, ex animi. Ducimus cum ab, officia eum ex ratione dolorum eveniet sed doloremque vero magnam deserunt! Dolorum sit repudiandae illum, ullam doloribus aspernatur dolor nulla aperiam sequi ex delectus natus culpa eum nemo magni alias itaque quos placeat ipsum saepe quam magnam? Inventore eius mollitia consequuntur.
          </p>
        </Row>
      </Container>

      <Container>
        <Row>
          <h1>Start</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita voluptatem asperiores nulla. Veniam commodi dignissimos nemo saepe repellat in minus magni rerum, cumque ducimus, rem voluptatibus suscipit tempora ipsa. Optio temporibus esse ipsam debitis numquam facilis eos ipsum? In ut eius autem. Atque, ex animi. Ducimus cum ab, officia eum ex ratione dolorum eveniet sed doloremque vero magnam deserunt! Dolorum sit repudiandae illum, ullam doloribus aspernatur dolor nulla aperiam sequi ex delectus natus culpa eum nemo magni alias itaque quos placeat ipsum saepe quam magnam? Inventore eius mollitia consequuntur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita voluptatem asperiores nulla. Veniam commodi dignissimos nemo saepe repellat in minus magni rerum, cumque ducimus, rem voluptatibus suscipit tempora ipsa. Optio temporibus esse ipsam debitis numquam facilis eos ipsum? In ut eius autem. Atque, ex animi. Ducimus cum ab, officia eum ex ratione dolorum eveniet sed doloremque vero magnam deserunt! Dolorum sit repudiandae illum, ullam doloribus aspernatur dolor nulla aperiam sequi ex delectus natus culpa eum nemo magni alias itaque quos placeat ipsum saepe quam magnam? Inventore eius mollitia consequuntur.
          </p>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="mx-0">
            <h1>Start</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita voluptatem asperiores nulla. Veniam commodi dignissimos nemo saepe repellat in minus magni rerum, cumque ducimus, rem voluptatibus suscipit tempora ipsa. Optio temporibus esse ipsam debitis numquam facilis eos ipsum? In ut eius autem. Atque, ex animi. Ducimus cum ab, officia eum ex ratione dolorum eveniet sed doloremque vero magnam deserunt! Dolorum sit repudiandae illum, ullam doloribus aspernatur dolor nulla aperiam sequi ex delectus natus culpa eum nemo magni alias itaque quos placeat ipsum saepe quam magnam? Inventore eius mollitia consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita voluptatem asperiores nulla. Veniam commodi dignissimos nemo saepe repellat in minus magni rerum, cumque ducimus, rem voluptatibus suscipit tempora ipsa. Optio temporibus esse ipsam debitis numquam facilis eos ipsum? In ut eius autem. Atque, ex animi. Ducimus cum ab, officia eum ex ratione dolorum eveniet sed doloremque vero magnam deserunt! Dolorum sit repudiandae illum, ullam doloribus aspernatur dolor nulla aperiam sequi ex delectus natus culpa eum nemo magni alias itaque quos placeat ipsum saepe quam magnam? Inventore eius mollitia consequuntur.
            </p>
          </Col>
          <Col className="mx-0">
            <h1>Start</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita voluptatem asperiores nulla. Veniam commodi dignissimos nemo saepe repellat in minus magni rerum, cumque ducimus, rem voluptatibus suscipit tempora ipsa. Optio temporibus esse ipsam debitis numquam facilis eos ipsum? In ut eius autem. Atque, ex animi. Ducimus cum ab, officia eum ex ratione dolorum eveniet sed doloremque vero magnam deserunt! Dolorum sit repudiandae illum, ullam doloribus aspernatur dolor nulla aperiam sequi ex delectus natus culpa eum nemo magni alias itaque quos placeat ipsum saepe quam magnam? Inventore eius mollitia consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita voluptatem asperiores nulla. Veniam commodi dignissimos nemo saepe repellat in minus magni rerum, cumque ducimus, rem voluptatibus suscipit tempora ipsa. Optio temporibus esse ipsam debitis numquam facilis eos ipsum? In ut eius autem. Atque, ex animi. Ducimus cum ab, officia eum ex ratione dolorum eveniet sed doloremque vero magnam deserunt! Dolorum sit repudiandae illum, ullam doloribus aspernatur dolor nulla aperiam sequi ex delectus natus culpa eum nemo magni alias itaque quos placeat ipsum saepe quam magnam? Inventore eius mollitia consequuntur.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
