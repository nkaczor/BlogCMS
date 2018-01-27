import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Navigation from '../../components/navigation';
import Masthead from '../../components/masthead';

const App = () => (
  <div>
    <Navigation />
    <Masthead />
    <main className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
