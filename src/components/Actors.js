import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let displayActors = () => {
    // console.log(actors)
    // debugger
    let actorList = actors.map((actor) => {
      return(
        <div key={actor.name}>
          name: {actor.name} <br/>
        movies: {actor.movies} <br/>
        </div>
      )
    })
    return actorList
  }

  return (
    <div>{/*{code here}*/}
      <h1>Actors Page</h1>
      {displayActors()}
    </div>
  )
}

export default Actors;
