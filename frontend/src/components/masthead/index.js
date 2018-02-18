import React from 'react';
import './masthead.css';

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="overlay" />
      <div className="container">
        <div className="site-heading">
          <h1>Natalia&apos;s blog</h1>
          <span className="subheading">Just another lifestyle blog</span>
        </div>
      </div>
    </header>
  );
}
