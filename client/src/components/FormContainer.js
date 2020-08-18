import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={10}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}