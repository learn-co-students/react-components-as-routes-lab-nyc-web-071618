import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let displayDirectors = () => {
    // console.log(directors)
    let directorList = directors.map((director) => {
      return(
        <div key={director.name}>
          name: {director.name} <br/>
          movies: {director.movies} <br/>
        </div>
      )
    })
    return directorList
    // debugger
  }

  return (
    <div>{/*{code here}*/}
      <h1>Directors Page</h1>
      {displayDirectors()}
    </div>
  );
}

export default Directors
