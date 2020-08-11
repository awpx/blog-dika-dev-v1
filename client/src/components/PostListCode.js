import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { PostCard } from './PostCard'
import Loader from './Loader'
import Message from './Message'
import { listPostCode } from '../actions/postActions'

export const PostListCode = () => {
  const dispatch = useDispatch()

  const postListCode = useSelector(state => state.postListCode)
  const { loading, error, postCode } = postListCode

  useEffect(() => {
    dispatch(listPostCode())
    
  }, [dispatch])

  return (
    <>
    {loading 
      ? (<Loader />)
      : error
      ? (<Message variant='danger'>{error}</Message>)
      : (
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={10}>
            {postCode.map((post) => (
                <PostCard post={post} key={post._id} />
            ))}
            </Col>
          </Row>
        </Container>
      )}
      
    </>
  )
}
