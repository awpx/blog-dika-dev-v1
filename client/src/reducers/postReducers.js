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
  POST_CREATE_RESET,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
  POST_UPDATE_FAIL, 
  POST_UPDATE_RESET
} from '../constants/postConstants'


//ALL POST
export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return { loading: true, posts: [] }
    case POST_LIST_SUCCESS:
      return { loading: false, posts: action.payload }
    case POST_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


//POST CATEGORY CODE
export const postListCodeReducer = (state = { postCode: [] }, action) => {
  switch (action.type) {
    case POST_LIST_CODE_REQUEST:
      return { loading: true, postCode: [] }
    case POST_LIST_CODE_SUCCESS:
      return { loading: false, postCode: action.payload }
    case POST_LIST_CODE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


//POST CATEGORY ESSAY
export const postListEssayReducer = (state = { postEssay: [] }, action) => {
  switch (action.type) {
    case POST_LIST_ESSAY_REQUEST:
      return { loading: true, postEssay: [] }
    case POST_LIST_ESSAY_SUCCESS:
      return { loading: false, postEssay: action.payload }
    case POST_LIST_ESSAY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}


//POST CATEGORY HOBBY
export const postListHobbyReducer = (state = { postHobby: [] }, action) => {
  switch (action.type) {
    case POST_LIST_HOBBY_REQUEST:
      return { loading: true, postHobby: [] }
    case POST_LIST_HOBBY_SUCCESS:
      return { loading: false, postHobby: action.payload }
    case POST_LIST_HOBBY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const postDetailsReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return { loading: true, ...state }
    case POST_DETAILS_SUCCESS:
      return { loading: false, post: action.payload }
    case POST_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const postDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
      return { loading: true }
    case POST_DELETE_SUCCESS:
      return { loading: false, success: true }
    case POST_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return { loading: true }
    case POST_CREATE_SUCCESS:
      return { loading: false, success: true, post: action.payload }
    case POST_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case POST_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const postUpdateReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_UPDATE_REQUEST:
      return { loading: true }
    case POST_UPDATE_SUCCESS:
      return { loading: false, success: true, post: action.payload }
    case POST_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case POST_UPDATE_RESET:
      return { post: {} }
    default:
      return state
  }
}