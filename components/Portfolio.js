// import PortfolioCard from './UI/PortfolioCard'
import { Container } from 'react-bootstrap'
import styles from './Portfolio.module.css'

import dynamic from 'next/dynamic'

const PortfolioCard = dynamic(() => import('./UI/PortfolioCard'))

const Portfolio = ({ portfolio }) => {

  const portfolioList = portfolio.map((item) => {
    return (
      <PortfolioCard
        item={item}
        key={item._id}
        className={styles['portfolio-card']}
      />
    )
  })

  return (
    <Container className="my-4">
      {portfolioList}
    </Container>
  )
}

export default Portfolio