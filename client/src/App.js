import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { PostList } from './pages/PostList';

function App() {
  return (
    <>
    
    <main className='py-3'>
      <Container>
        <Row>
          <Col></Col>
          <Col md={10}>
            <Header />
            <PostList />
          </Col>
          <Col></Col>
        </Row>
        
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
