import { combineReducers } from 'redux';
import { RECEIVE_POSTS_PAGE } from '../actions/posts';

const posts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS_PAGE:
      const nextState = { ...state };
      action.posts.forEach(post => {
        nextState[post.id] = post;
      });
      return nextState;
    default:
      return state;
  }
};

export default posts;
