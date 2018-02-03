export const REQUEST_POSTS_PAGE = 'REQUEST_POSTS_PAGE';
function requestPostsPage(page) {
  return {
    type: REQUEST_POSTS_PAGE,
    page
  };
}

export const RECEIVE_POSTS_PAGE = 'RECEIVE_POSTS_PAGE';
function receivePostsPage(page, data) {
  return {
    type: RECEIVE_POSTS_PAGE,
    posts: data.results,
    next: data.next,
    prev: data.previous,
    page
  };
}

export const fetchPosts = (pageNumber = 1) => {
  const url = `http://localhost:8000/api/posts/?page=${pageNumber}`;

  return function(dispatch) {
    dispatch(requestPostsPage(pageNumber));
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(receivePostsPage(pageNumber, data));
      });
  };
};
