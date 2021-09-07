import React from 'react'
import ArticleCard from './UI/ArticleCard'
import { Container } from 'react-bootstrap'
import styles from './Articles.module.css'

const Articles = ({ articles }) => {

  const articlesList = articles.map((article) => {
    return (
      <ArticleCard
        article={article}
        key={article.slug}
        className={styles['article-card']}
      />
    )
  })

  return (
    <Container className="my-4">
      {articlesList}
    </Container>
  )
}

export default Articles