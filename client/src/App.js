import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container,} from 'react-bootstrap'
import { Footer } from './components/Footer'
import { HomePages } from './pages/HomePages'
import { PostPages } from './pages/PostPages'
import { LoginPages } from './pages/LoginPages';
import { PostEditPages } from './pages/PostEditPages';
import { PostListPages } from './pages/PostListPages';

function App() {
  return (
    <Router>
    
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomePages} />
          <Route exact path='/post/:id' component={PostPages} />
          <Route exact path='/post/:id/edit' component={PostEditPages} />
          <Route exact path='/postlist' component={PostListPages} />
          <Route exact path='/login' component={LoginPages} />
          
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
