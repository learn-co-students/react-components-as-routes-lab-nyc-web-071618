import React from 'react';
import { directors } from '../data';
import v4 from 'uuid'


const Directors = () => {

  const directorsDivs = directors.map((director)=>{
    return  <div className='director'
                key={v4()}>
                <h1>{director.name}</h1>
                <ul>
                  {director.movies.map((movie)=>{
                    return <li>{movie}</li>
                  })}
                </ul>
            </div>
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsDivs}
    </div>
  );
}

export default Directors
