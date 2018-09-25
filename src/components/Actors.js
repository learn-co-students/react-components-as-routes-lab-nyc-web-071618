import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(({name, movies})=>(<div key={name}><h2>{name}</h2><ul>{movies.map(movie=><li key={movie}>{movie}</li>)}</ul></div>))}
    </div>
  );
};

export default Actors;
