import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  postListReducer,
  postListCodeReducer,
  postDetailsReducer
} from './reducers/postReducers'


const reducer = combineReducers({
  postList: postListReducer,
  postListCode: postListCodeReducer,
  postDetails: postDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store