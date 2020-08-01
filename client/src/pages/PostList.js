import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PostCard } from '../components/PostCard'
import posts from '../PostMocks'


export const PostList = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          {posts.map((post) => (
            <Col md={10}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
