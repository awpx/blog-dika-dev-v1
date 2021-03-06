import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { FormContainer } from '../components/FormContainer'
import { listPostDetails, updatePost } from '../actions/postActions'
import ReactQuill from 'react-quill'
import { POST_UPDATE_RESET } from '../constants/postConstants'

export const PostEditPages = ({ match, history }) => {
  const postId = match.params.id

  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState('')
  const [image, setImage] = useState('')
  const [date, setDate] = useState(new Date())
  const [content, setContent] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const postDetails = useSelector(state => state.postDetails)
  const { loading, error, post } = postDetails

  const postUpdate = useSelector(state => state.postUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = postUpdate

  useEffect(() => {
    if(successUpdate) {
      dispatch({ type: POST_UPDATE_RESET })
      history.push('/postlist')
    } else {
      if(!post.title || post._id !== postId) {
        dispatch(listPostDetails(postId))
      } else {
        setAuthor(post.author)
        setTitle(post.title)
        setDescription(post.description)
        setCategory(post.category)
        setTags(post.tags)
        setImage(post.image)
        setDate(new Date(post.date))
        setContent(post.content)
      }
    }

    
  }, [history, dispatch, postId, post, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    
    dispatch(updatePost({
      _id: postId,
      author,
      description,
      title,
      category,
      tags,
      date,
      image,
      content,
    }))
  }
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]

    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      const { data } = await axios.post('/api/v1/upload', formData, config)
      
      setImage(data)
      setUploading(false)

    } catch (error) {
      console.error(error)
      setUploading(false)
    }

  }

  //QUIL config
  //====================================================
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }], 
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'background', 'color', 'code-block', 'align',
  ]
  //============================================================

  return (
    <>
      <Link to='/postlist'>
        <h6 className='my-4'><i className="fas fa-chevron-left"></i>{' '} Back Post List</h6>
      </Link>

      <FormContainer>
        <h2>Edit Post</h2>
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loadingUpdate && <Loader />}
        {loading 
          ? (<Loader />)
          : error
          ? (<Message variant='danger'>{error}</Message>)
          : (
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='title'>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Title'
                  value={title}
                  required
                  maxLength={60}
                  onChange={e => setTitle(e.target.value)}
                ></Form.Control>
              </Form.Group>
              
              <Form.Group controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Description'
                  value={description}
                  maxLength={60}
                  required
                  onChange={e => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>


              <Form.Group controlId='category'>
                <Form.Label>Category</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Category'
                    value={category}
                    required
                    onChange={e => setCategory(e.target.value)}
                  ></Form.Control>
              </Form.Group>

              <Form.Group controlId='tags'>
                <Form.Label>Tags</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Tags'
                    value={tags}
                    required
                    onChange={e => setTags(e.target.value)}
                  ></Form.Control>
              </Form.Group>

              <Form.Group controlId='author'>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Author'
                  value={author}
                  required
                  onChange={e => setAuthor(e.target.value)}
                ></Form.Control>
              </Form.Group>


              <Form.Group controlId='date'>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type='date'
                  placeholder='Enter Author'
                  value={date}
                  required
                  onChange={e => setDate(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Image url'
                    value={image}
                    required
                    onChange={e => setImage(e.target.value)}
                  ></Form.Control>
                  <Form.File
                    id='image-file'
                    label='Choose file'
                    custom
                    onChange={uploadFileHandler}
                  >
                    {uploading && <Loader />}
                  </Form.File>
              </Form.Group>

              <ReactQuill 
                theme="snow"
                modules={modules}
                formats={formats}
                value={content} 
                onChange={value => setContent(value)} 
              />

              <Button type='submit' variant='primary' className='my-4'>Update</Button>
            </Form>
          )
        }
      </FormContainer>
      
    </>
  )
}
