import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { PostCard } from './PostCard'
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
      ? (<h2>Loading...</h2>)
      : error
      ? (<h3>{error}</h3>)
      : (
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={10}>
            {posts.map((post) => (
                <PostCard post={post} key={Number(post._id)} />
            ))}
            </Col>
          </Row>
        </Container>
      )}
      
    </>
  )
}
