import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { PostCard } from './PostCard'
import Loader from './Loader'
import Message from './Message'
import { listPostHobby } from '../actions/postActions'

export const PostListHobby = () => {
  const dispatch = useDispatch()

  const postListHobby = useSelector(state => state.postListHobby)
  const { loading, error, postHobby } = postListHobby

  useEffect(() => {
    dispatch(listPostHobby())
    
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
            {postHobby.map((post) => (
                <PostCard post={post} key={post._id} />
            ))}
            </Col>
          </Row>
        </Container>
      )}
      
    </>
  )
}
