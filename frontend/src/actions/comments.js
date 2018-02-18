export const ADD_COMMENT_PENDING = 'ADD_COMMENT_PENDING';
function requestAddComment() {
  return {
    type: ADD_COMMENT_PENDING
  };
}

export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
function addCommentSuccess(comment) {
  return {
    type: ADD_COMMENT_SUCCESS,
    comment
  };
}

export const addComment = comment => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment)
  };

  const url = 'http://localhost:8000/api/comments/';

  return function(dispatch) {
    dispatch(requestAddComment());
    return fetch(url, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(addCommentSuccess(data));
      });
  };
};
