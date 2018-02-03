import React from 'react';
import { Route, Link } from 'react-router-dom';
import PostsList from '../postsList';

export default props => (
  <div>
    <PostsList {...props} />
  </div>
);
