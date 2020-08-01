import React from 'react'
import { Nav, Navbar, Button, Container, Row, Col, Image } from 'react-bootstrap'

export const Header = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={10} className="page-header py-4 " controlId="banner">
          <h1>Dika.dev</h1>
          <p className="my-0 lead">Fullstack Web Developer</p>
          <p className="my-0 lead"><small>Creator & Writer of <a href='http://.awp.id' > Dika.dev</a></small></p>
          <p className="lead"><small> Twitter: <a href='https://twitter.com/awpx_' > @awpx_ </a></small></p>
      </Col>
      </Row>
      <Row className="justify-content-md-center my-3">
        <Col md={10}>
          <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link href="/">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Code</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Essay</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Hobby</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}
