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
            src={item.Screenshots[0].url}
            alt={item.Screenshots[0]?.alternativeText || item.Screenshots[0]?.name}
            layout={'fill'}
            objectFit={'contain'}
          />
        </Col>

        <Col xs={{ span: 12, order: 2 }} md={{ span: 6 }}>
          <div>
            <Link
              as={`/portfolio/${item.Slug}`}
              href="/portfolio/[slug]"
              passHref={true}
            >
              <h3 className={styles['portfolio-title']}>
                {item.Title}
              </h3>
            </Link>
            <p className={styles['portfolio-description']}>
              <ReactMarkdown>
                {item.Description}
              </ReactMarkdown>
            </p>
          </div>
        </Col>
      </Row>
    </Container >
  )
}

export default PortfolioCard