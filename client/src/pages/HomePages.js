import React from 'react'
import { Header } from '../components/Header'
import { PostList } from '../components/PostList';
import { Row, Col } from 'react-bootstrap'

export const HomePages = () => {
  return (
    <>
      <Row>
        <Col></Col>
        <Col md={10}>
          <Header />
          <PostList />
        </Col>
        <Col></Col>
      </Row>
    </>
  )
}
