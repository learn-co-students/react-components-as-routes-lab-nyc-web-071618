import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieDivs = movies.map((movieObj)=>{
    return <div><h1>{movieObj.title}</h1><p>{movieObj.time}</p><ul>{movieObj.genres.map(genre=><li>{genre}</li>)}</ul></div>
  })
  return (
    <div>
      <h1>Movies Page</h1>
        {movieDivs}
    </div>
  );
};

export default Movies;
