import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'react-bootstrap'


export const PostPages = ({ match }) => {
  const [post, setPost] = useState({})

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await axios.get(`/api/v1/posts/${match.params.id}`)

      setPost(data)
    }

    fetchPost()
  }, [])
  
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
          <p>{post.content}</p>
        </Col>
      </Row>
    </>
  )
}
