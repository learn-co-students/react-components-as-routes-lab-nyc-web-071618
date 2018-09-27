import React from 'react';
import { movies } from '../data';

const Movies = () => {


  const showMovies = () => {
    // console.log(movies[0].title)
    // console.log(movies[0].time)
    // console.log(movies[0].genres)
    let movieList = movies.map((movie) => {
      return (
        <div key={movie.title}>
          title: {movie.title} <br/>
          time: {movie.time} <br/>
          genres: {movie.genres} <br/>
          <br/>
        </div>
      )
    })

    return movieList
  }

  // debugger
  return (
    <div>{/*{code here}*/}
      <h1>Movies Page</h1>
      {showMovies()}
    </div>
  );
};

export default Movies;
