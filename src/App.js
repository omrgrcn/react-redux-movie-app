import React from 'react';
import './App.css';

import MoviesPage from './components/pages/MoviesPage';

import { Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <p className="App-intro">
        <Link to="movies">Movies</Link>
      </p>
    <Route path='/movies' component={MoviesPage}></Route>
    </div>
  );
}

export default App;
