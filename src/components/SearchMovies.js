import React, { useState } from 'react';

function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d8127932e037e87b8c5779551204894b&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results)
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <form className="form" onSubmit={searchMovies}>
      <label 
        htmlFor="query" 
        className="label">Looking for a movie?
      </label>
      <input 
        className="input" 
        type="text" 
        name="query"
        placeholder="i.e. Lord of the Rings"
        onChange={(e)=> setQuery(e.target.value)}
      />
      <button 
        className="button" 
        type="submit" 
        >Search
      </button>
      </form>
  )
}

export default SearchMovies;