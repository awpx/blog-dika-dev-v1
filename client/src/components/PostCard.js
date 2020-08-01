import React from 'react'
import { Card } from 'react-bootstrap' 

export const PostCard = ({ post }) => {
  return (
    <Card className='my-3 rounded'>
      <a href={`/post/${post.id}`}>
        <Card.Img src={post.image} variant='top' />
      </a>

      <Card.Body>
      <a href={`/post/${post.id}`} style={{color: '#0c0c0d'}}>
        <Card.Title as='div'>
          <h2>{post.title}</h2>
        </Card.Title>
      </a>

      <Card.Text as='div'>
        <h5 className='text-muted'>{post.description}</h5>
      </Card.Text>
      <Card.Text as='div'>
        <h6 className='text-muted'><i className="fas fa-user"></i>{' '}{post.author}</h6>
      </Card.Text>
      <Card.Text as='div'>
        <h6 className='text-muted'><i className="fas fa-hashtag"></i>{' '}{post.tags}</h6>
      </Card.Text>
      <Card.Text as='div'>
        <h6 className='text-muted'><i className="far fa-calendar-alt"></i>{' '}{post.date}</h6>
      </Card.Text>
      </Card.Body>
    </Card>
  )
}
