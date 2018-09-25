import React from 'react';
import { actors } from '../data';
import v4 from 'uuid'


const Actors = () => {
  
  let actorsDivs = actors.map((actor)=>{
    return <div className='actor'
                key={v4()}>
                <h1>{actor.name}</h1>
                <ul>
                  {actor.movies.map(movie=><li>{movie}</li>)}
                </ul>
                </div>
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDivs}
    </div>
  );
};

export default Actors;
