import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import { PostCard } from './PostCard'


export const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('/api/v1/posts')

      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={10}>
          {posts.map((post) => (
              <PostCard post={post} key={Number(post._id)} />
          ))}
          </Col>
        </Row>
      </Container>
    </>
  )
}
