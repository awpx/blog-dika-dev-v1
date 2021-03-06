import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers'
import {
  postListReducer,
  postListCodeReducer,
  postListEssayReducer,
  postListHobbyReducer,
  postDetailsReducer,
  postDeleteReducer,
  postCreateReducer,
  postUpdateReducer,
} from './reducers/postReducers'


const reducer = combineReducers({
  userLogin: userLoginReducer,
  postList: postListReducer,
  postCreate: postCreateReducer,
  postListCode: postListCodeReducer,
  postListEssay: postListEssayReducer,
  postListHobby: postListHobbyReducer,
  postDetails: postDetailsReducer,
  postDelete: postDeleteReducer,
  postUpdate: postUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store