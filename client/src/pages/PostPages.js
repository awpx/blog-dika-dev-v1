import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listPostDetails } from '../actions/postActions'


export const PostPages = ({ match }) => {
  const dispatch = useDispatch()

  const postDetails = useSelector(state => state.postDetails)
  const { loading, error, post } = postDetails

  useEffect(() => {
    dispatch(listPostDetails(match.params.id))
  }, [dispatch, match])
  
  return (
    <>
      <Link to='/'>
        <h6 className='my-4'><i className="fas fa-chevron-left"></i>{' '} Back to Home</h6>
      </Link>

      {loading 
        ? ( <Loader /> ) 
        : error
        ? ( <Message variant='danger'>{error}</Message> )
        : (
          <>
            <Row className='my-4 justify-content-md-center'>
              <Col md='auto'>
                <h1>{post.title}</h1>
              </Col>
            </Row>

            <Row className='justify-content-md-center'>
              <Col md={8}>
                <p className='text-muted' style={{fontSize: '2rem'}}>{post.description}</p>
              </Col>
            </Row>

            <Row className='justify-content-md-center'>
              <Col md={8}>
                <h6 className='text-muted'><i className="fas fa-user"></i>{' '}{post.author}</h6>{' '}
                <h6 className='text-muted'><i className="far fa-calendar-alt"></i>{' '}{post.date}</h6>
              </Col>
            </Row>
            
            <Row className='justify-content-md-center my-4'>
              <Col md='auto'>
                <Image src={post.image} alt={post.name} fluid />
              </Col>
            </Row>

            <Row className='justify-content-md-center my-4'>
              <Col md={10}>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </Col>
            </Row>
          </>
        )}
      
      
    </>
  )
}
