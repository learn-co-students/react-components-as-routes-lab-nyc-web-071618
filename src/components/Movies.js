import React from 'react';
import { movies } from '../data';

const Movies = (props) => {
  console.log(movies)
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie,idx) => (
        <div key={idx}>
        <h3>Title: {movie.title}</h3>
        <h4>Time: {movie.time}m</h4>
        <h4>Genres: </h4>
        <ul>
        {movie.genres.map((genre,idx) => (
          <li key={idx}>{genre}</li>
        ))}
      </ul>
      </div>
      ))}
    </div>
  );
};

export default Movies;
