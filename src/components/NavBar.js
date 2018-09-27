import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '6px',
  margin: '0 0 0',
  background: 'gray',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Movies</NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Directors</NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
