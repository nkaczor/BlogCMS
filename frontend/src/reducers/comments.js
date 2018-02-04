import { RECEIVE_POST } from '../actions/posts';

const comments = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POST:
      const nextState = { ...state };
      action.post.comments.forEach(comment => {
        nextState[comment.id] = comment;
      });
      return nextState;
    default:
      return state;
  }
};

export default comments;
