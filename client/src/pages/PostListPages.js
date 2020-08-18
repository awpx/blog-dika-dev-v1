import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Button, Table, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { 
  listPosts,
  deletePost,
  createPost,
} from '../actions/postActions'
import { POST_CREATE_RESET } from '../constants/postConstants'

export const PostListPages = ({ history }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const postList = useSelector(state => state.postList)
  const { loading, error, posts } = postList

  const postDelete = useSelector(state => state.postDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = postDelete

  const postCreate = useSelector(state => state.postCreate)
  const { 
    loading: loadingCreate, 
    error: errorCreate, 
    success: successCreate,
    post: createdPost, 
  } = postCreate

  useEffect(() => {
    dispatch({type: POST_CREATE_RESET})


    if (!userInfo) {
      history.push('/login')
    }

    if (successCreate) {
      history.push(`/post/${createdPost._id}/edit`)
    } else {
      dispatch(listPosts())
    }
    
    
  }, [dispatch, history, userInfo, successDelete, successCreate, createdPost])

  const createPostHandler = () => {
    dispatch(createPost())
  }

  const deleteHandler = (id) => {
    if(window.confirm('Are you sure want to delete this?')) {
      dispatch(deletePost(id))
    }
  }

  return (
    <>
      <Link to='/'>
        <h6 className='my-4'><i className="fas fa-chevron-left"></i>{' '} Back to Home</h6>
      </Link>

      <Row className='align-item-center'>

        <Col>
          <h2>Posts</h2>
        </Col>

        <Col className='text-right'>
          <Button className='my-3' onClick={createPostHandler}>
            <i className='fas fa-plus'></i> Add Post
          </Button>
        </Col>
      </Row>

      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

      {loading 
        ? (<Loader />)
        : error
        ? (<Message variant='danger'>{error}</Message>)
        : (
          <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Author</th>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {posts.map((post) => (
                <tr key={post._id}>
                  <td>{post._id}</td>
                  <td>{post.author}</td>
                  <td>{post.title}</td>
                  <td>{post.category}</td>
                  <td>{post.date}</td>
                  <td>
                    <LinkContainer to={`/post/${post._id}/edit`}>
                      <Button variant='dark' className='btn-sm mx-2'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>

                    <Button 
                      variant='danger' 
                      className='btn-sm'
                      onClick={() => deleteHandler(post._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          
          </>
        )
      }
    </>
  )
}
