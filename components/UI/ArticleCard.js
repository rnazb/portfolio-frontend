import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getStrapiMedia } from '../../lib/media'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './ArticleCard.module.css'

const ArticleCard = ({ article }) => {
  const imageUrl = getStrapiMedia(article.image)

  const publishDate = new Date(article.published_at)
  const formattedDate = publishDate.toLocaleDateString()

  return (
    <Container className="mb-4">
      <Row className={styles['article-row']}>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 4 }}>
          <Image
            unoptimized={true}
            className={styles['article-card-image']}
            src={imageUrl}
            alt={article.image?.alternativeText || article.image?.name}
            layout={'fill'}
            objectFit={'cover'}
          />
        </Col>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 8 }}>
          <div>
            <Link
              as={`/blog/${article.slug}`}
              href="/blog/[slug]"
              passHref={true}
            >
              <h3 className={styles['article-title']}>
                {article.title}
              </h3>
            </Link>
            <p><em>by {article.author.name}</em></p>
            <p>Date Published: {formattedDate}</p>
            <p>{article.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ArticleCard