import React, { Component } from 'react';
import SearchMovies from './SearchMovies';

class Main extends Component {
  
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie search app</h1>
        <SearchMovies/>
      </div>
    );
  }
}

export default Main;
