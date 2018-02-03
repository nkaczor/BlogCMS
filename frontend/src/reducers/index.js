import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import pagination from './pagination';

export default combineReducers({
  routing: routerReducer,
  posts,
  pagination
});
