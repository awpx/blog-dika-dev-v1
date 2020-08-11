import axios from 'axios'
import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_CODE_REQUEST,
  POST_LIST_CODE_SUCCESS,
  POST_LIST_CODE_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
} from '../constants/postConstants'

//ALL POST
export const listPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_REQUEST })

    const { data } =await axios.get('/api/v1/posts')

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({ 
      type: POST_LIST_FAIL,
      payload: 
        error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
    })
  }
}

//POST CATEGORY CODE
export const listPostCode = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_CODE_REQUEST })

    const { data } =await axios.get('/api/v1/posts/code')

    dispatch({
      type: POST_LIST_CODE_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({ 
      type: POST_LIST_CODE_FAIL,
      payload: 
        error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
    })
  }
}

export const listPostDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST })

    const { data } =await axios.get(`/api/v1/posts/${id}`)

    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({ 
      type: POST_DETAILS_FAIL,
      payload: 
        error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
    })
  }
}