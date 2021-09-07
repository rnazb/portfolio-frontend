import { useRouter } from 'next/router'

import styles from './index.module.css'

export default function PortfolioItem() {
  const router = useRouter()

  return (
    <div className={styles.page}>
      <h1>Portfolio Item Page: {router.query.portfolioId}</h1>
    </div>
  )
}