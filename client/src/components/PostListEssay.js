import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { PostCard } from './PostCard'
import Loader from './Loader'
import Message from './Message'
import { listPostEssay } from '../actions/postActions'

export const PostListEssay = () => {
  const dispatch = useDispatch()

  const postListEssay = useSelector(state => state.postListEssay)
  const { loading, error, postEssay } = postListEssay

  useEffect(() => {
    dispatch(listPostEssay())
    
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
            {postEssay.map((post) => (
                <PostCard post={post} key={post._id} />
            ))}
            </Col>
          </Row>
        </Container>
      )}
      
    </>
  )
}
