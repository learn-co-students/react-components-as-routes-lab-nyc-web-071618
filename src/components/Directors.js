import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((directorObj, index)=>{return(
        <div key={index}>
          <h2>{directorObj.name}</h2>
          <ul>
            {directorObj.movies.map((movie, index)=>{return(
              <li key={index}>{movie}</li>
            )})}
          </ul>
        </div>
      )})}
    </div>
  );
}

export default Directors
