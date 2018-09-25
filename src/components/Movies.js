import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(({title, time, genres, metascore})=>(
          <div key={title}>
            <h2>{title} {time} {metascore}</h2>
              <ul>
              {genres.map(genre=><li key={genre}>{genre}</li>)}
              </ul>
          </div>
        )
      )}
    </div>
  );
};

export default Movies;
