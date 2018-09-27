import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actorObj, index)=>{return(
        <div key={index}>
          <h2>{actorObj.name}</h2>
          <ul>
            {actorObj.movies.map((movie, index)=>{return(
              <li key={index}>{movie}</li>
            )})}
          </ul>
        </div>
      )})}
    </div>
  );
};

export default Actors;
