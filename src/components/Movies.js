import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movieObj, index)=>{return(
        <div key={index}>
          <h2>{movieObj.title}</h2>
          <h4>{movieObj.time}</h4>
          <ul>
            {movieObj.genres.map((genre, index)=>{return(
              <li key={index}>{genre}</li>
            )})}
          </ul>
        </div>
      )})}
    </div>
  );
};

export default Movies;
