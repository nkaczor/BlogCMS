import { RECEIVE_POST } from '../actions/posts';
import { ADD_COMMENT_SUCCESS } from '../actions/comments';

const comments = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POST:
      const nextState = { ...state };
      action.post.comments.forEach(comment => {
        nextState[comment.id] = comment;
      });
      return nextState;
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        [action.comment.id]: action.comment
      };
    default:
      return state;
  }
};

export default comments;
