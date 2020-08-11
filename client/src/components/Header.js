import React from 'react'
import { Row, Col} from 'react-bootstrap'

export const Header = () => {

  return (
    <Row className="justify-content-md-center">
      <Col md={10} className="page-header py-4 " id="banner">
        <h1>Dika.dev</h1>
        <p className="my-0 lead">Fullstack Web Developer</p>
        <p className="my-0 lead"><small>Creator & Writer of <a href='http://dika.dev' > Dika.dev</a></small></p>
        <p className="lead"><small> Twitter: <a href='https://twitter.com/awpx_' > @awpx_ </a></small></p>
    </Col>
    </Row>
  )
}
