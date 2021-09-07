import { useRouter } from 'next/router'

import styles from './index.module.css'

export default function Article() {
  const router = useRouter()

  return (
    <div className={styles.page}>
      <h1>Blog Post Page: {router.query.blogId}</h1>
    </div>
  )
}