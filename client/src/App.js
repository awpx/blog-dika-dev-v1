import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container,} from 'react-bootstrap'
import { Footer } from './components/Footer'
import { HomePages } from './pages/HomePages'
import { PostPages } from './pages/PostPages'

function App() {
  return (
    <Router>
    
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomePages} />
          <Route path='/post/:id' component={PostPages} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
