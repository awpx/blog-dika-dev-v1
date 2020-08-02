import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import posts from '../PostMocks'


export const PostPages = ({ match }) => {
  

  const post = posts.find((p) => p.id == match.params.id)
  
  return (
    <>
      <Link to='/'>
        <h6 className='my-4'><i className="fas fa-chevron-left"></i>{' '} Back to Home</h6>
      </Link>
      
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
          <h8 className='text-muted'><i className="fas fa-user"></i>{' '}{post.author}</h8>{' '}
          <h8 className='text-muted'><i className="far fa-calendar-alt"></i>{' '}{post.date}</h8>
        </Col>
      </Row>
      
      <Row className='justify-content-md-center my-4'>
        <Col md='auto'>
          <Image src={post.image} alt={post.name} fluid />
        </Col>
      </Row>

      <Row className='justify-content-md-center my-4'>
        <Col md={10}>
          <p>{post.content}</p>
        </Col>
      </Row>
    </>
  )
}
