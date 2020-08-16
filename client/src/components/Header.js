import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Button} from 'react-bootstrap'
import { logout } from '../actions/userAction'

export const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Row className="justify-content-md-center">
      <Col md={10} className="page-header py-4 " id="banner">
        <h1>Dika.dev</h1>
        <p className="my-0 lead">Fullstack Web Developer</p>
        <p className="my-0 lead"><small>Creator & Writer of <a href='http://dika.dev' > Dika.dev</a></small></p>
        <p className="lead"><small> Twitter: <a href='https://twitter.com/awpx_' > @awpx_ </a></small></p>
        {userInfo && (
          <>
            <LinkContainer to='/postlist'>
              <Button variant='outline-primary m-2'>Post List</Button>
            </LinkContainer>
            <Button variant='outline-primary' onClick={logoutHandler}>Logout</Button>
          </>
        )}
    </Col>
    </Row>
  )
}
