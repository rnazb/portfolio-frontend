import { Container, Row, Col, Card } from 'react-bootstrap'
import styles from './PageCard.module.css'

export default function PageCard(props) {

  return (
    <Card className={`mt-3 w-100 h-100 ${styles['page-card']}`}>
      {props.children}
    </Card>
  )
}
