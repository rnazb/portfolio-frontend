import Link from 'next/link'
import Image from 'next/image'
import { getStrapiMedia } from '../../lib/media'
import ReactMarkdown from 'react-markdown'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './PortfolioCard.module.css'

const PortfolioCard = ({ item }) => {

  return (
    <Container className="mb-4">
      <Row className={styles['portfolio-row']}>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 6 }}>
          <Image
            unoptimized={true}
            className={styles['portfolio-card-image']}
            src={item.screenshots[0].url}
            alt={item.screenshots[0]?.alternativeText || item.screenshots[0]?.name}
            layout={'fill'}
            objectFit={'contain'}
          />
        </Col>

        <Col xs={{ span: 12, order: 2 }} md={{ span: 6 }}>
          <div className={styles['portfolio-description']}>
            {/* <Link
              as={`/portfolio/${item.Slug}`}
              href="/portfolio/[slug]"
              passHref={true}
            > */}
            <h3 className={styles['portfolio-title']}>
              {item.title}
            </h3>
            <ReactMarkdown>
              {item.description}
            </ReactMarkdown>
          </div>
        </Col>
      </Row>
    </Container >
  )
}

export default PortfolioCard