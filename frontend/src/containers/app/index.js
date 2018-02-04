import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../home';
import About from '../about';
import SinglePost from '../singlePost';

import Navigation from '../../components/navigation';
import Masthead from '../../components/masthead';

const App = () => (
  <div>
    <Navigation />
    <Masthead />
    <main className="container">
      <Route exact path="/" component={Home} />
      <Route path="/page/:pageNumber" component={Home} />
      <Route path="/post/:postId" component={SinglePost} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
