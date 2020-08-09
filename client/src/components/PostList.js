import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { PostCard } from './PostCard'
import Loader from './Loader'
import Message from './Message'
import { listPosts } from '../actions/postActions'


export const PostList = () => {
  const dispatch = useDispatch()

  const postList = useSelector(state => state.postList)
  const { loading, error, posts } = postList

  useEffect(() => {
    dispatch(listPosts())
    
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
            {posts.map((post) => (
                <PostCard post={post} key={post._id} />
            ))}
            </Col>
          </Row>
        </Container>
      )}
      
    </>
  )
}
