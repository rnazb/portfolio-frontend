import { Container, Row, Col, Card } from 'react-bootstrap'
import styles from './PageCard.module.css'

export default function PageCard(props) {

  return (
    <Container>
      <Row className="mb-4">
        <Col className="d-flex flex-row justify-content-center">
          <Card className={`mt-3 w-100 ${styles['page-card']}`}>
            {props.children}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
