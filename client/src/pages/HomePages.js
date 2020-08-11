import React, { useState } from 'react'
import { Header } from '../components/Header'
import { PostList } from '../components/PostList';
import { Nav, Container, Row, Col } from 'react-bootstrap'
import { PostListCode } from '../components/PostListCode'
import { PostListEssay } from '../components/PostListEssay'
import { PostListHobby } from '../components/PostListHobby'

export const HomePages = () => {
  const [allPost, setAllPost] = useState(true)
  const [codePost, setCodePost] = useState(false)
  const [essayPost, setEssayPost] = useState(false)
  const [hobbyPost, setHobbyPost] = useState(false)

  const allHandler = () => {
    setAllPost(true)
    setCodePost(false)
    setEssayPost(false)
    setHobbyPost(false)
  }

  const codeHandler = () => {
    setAllPost(false)
    setCodePost(true)
    setEssayPost(false)
    setHobbyPost(false)
  }

  const essayHandler = () => {
    setAllPost(false)
    setCodePost(false)
    setEssayPost(true)
    setHobbyPost(false)
  }

  const hobbyHandler = () => {
    setAllPost(false)
    setCodePost(false)
    setEssayPost(false)
    setHobbyPost(true)
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md={10}>
          <Header />

          <Row className="justify-content-md-center my-3">
            <Col md={10}>
              <Nav variant="tabs" defaultActiveKey='all'>
                <Nav.Item>
                  <Nav.Link eventKey="all" onSelect={allHandler} >All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="code" onSelect={codeHandler} >Code</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="essay" onSelect={essayHandler} >Essay</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="hobby" onSelect={hobbyHandler}>Hobby</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

          {allPost && <PostList />}
          {codePost && <PostListCode />}
          {essayPost && <PostListEssay />}
          {hobbyPost && <PostListHobby />}
          
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
