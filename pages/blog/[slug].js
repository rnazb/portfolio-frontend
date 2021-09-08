import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import PageCard from '../../components/UI/PageCard'
import { Container } from 'react-bootstrap'

import { fetchAPI } from '../../lib/api'
import { getStrapiMedia } from '../../lib/media'
import Seo from '../../components/Seo'

import styles from './index.module.css'

export default function Article({ article }) {
  const router = useRouter()
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const imageUrl = getStrapiMedia(article.image)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  return (
    <>
      <Seo seo={seo} />
      <Container className="mb-4">
        <PageCard className={styles['article']}>
          <article>
            <div className={styles['article-image']}>
              <Image
                unoptimized={true}
                width={2000}
                height={1000}
                objectFit="contain"
                alt={`Cover Image for ${article.title}`}
                src={imageUrl}
              />
            </div>
            <h1 className={styles['article-title']}>{article.title}</h1>
            <div className={styles['article-content']}>
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </article>
        </PageCard>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`)

  return {
    props: { article: articles[0] },
    revalidate: 10,
  };
}