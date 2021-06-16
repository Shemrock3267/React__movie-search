import React from 'react';

function SearchMovies() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">Looking for a movie?</label>
      <input className="input" type="text" name="query" placeholder="i.e. Lord of the Rings" />
      <button className="button" type="submit">Search</button>
    </form>
  )
}

export default SearchMovies;