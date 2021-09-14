import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { fetchAPI } from '../../lib/api'

export default function PortfolioItem({ item }) {


  const router = useRouter()
  if (!router.isFallback && !item?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <h1>Portfolio Item: {item.title}</h1>
  )
}

export async function getStaticPaths() {
  const portfolio = await fetchAPI("/portfolio")

  return {
    paths: portfolio.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const portfolio = await fetchAPI(`/portfolio?slug=${params.slug}`)

  return {
    props: { item: portfolio[0] },
    revalidate: 10,
  }
}