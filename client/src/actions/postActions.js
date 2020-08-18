import axios from 'axios'
import {
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_CODE_REQUEST,
  POST_LIST_CODE_SUCCESS,
  POST_LIST_CODE_FAIL,
  POST_LIST_ESSAY_REQUEST,
  POST_LIST_ESSAY_SUCCESS,
  POST_LIST_ESSAY_FAIL,
  POST_LIST_HOBBY_REQUEST,
  POST_LIST_HOBBY_SUCCESS,
  POST_LIST_HOBBY_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DELETE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAIL,
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

    const { data } = await axios.get('/api/v1/posts/code')

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

//POST CATEGORY ESSAY
export const listPostEssay = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_ESSAY_REQUEST })

    const { data } = await axios.get('/api/v1/posts/essay')

    dispatch({
      type: POST_LIST_ESSAY_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({ 
      type: POST_LIST_ESSAY_FAIL,
      payload: 
        error.response && error.response.data.message 
          ? error.response.data.message 
          : error.message,
    })
  }
}

//POST CATEGORY HOBBY
export const listPostHobby = () => async (dispatch) => {
  try {
    dispatch({ type: POST_LIST_HOBBY_REQUEST })

    const { data } = await axios.get('/api/v1/posts/hobby')

    dispatch({
      type: POST_LIST_HOBBY_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({ 
      type: POST_LIST_HOBBY_FAIL,
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


export const deletePost= (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_DELETE_REQUEST })

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    await axios.delete(`/api/v1/posts/${id}`, config)

    dispatch({ type: POST_DELETE_SUCCESS })
    
  } catch (error) {
    dispatch({
      type: POST_DELETE_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const createPost= () => async (dispatch, getState) => {
  try {
    dispatch({ type: POST_CREATE_REQUEST })

    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post(`/api/v1/posts`, {}, config)

    dispatch({ type: POST_CREATE_SUCCESS, payload: data })
    
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAIL,
      payload: 
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}