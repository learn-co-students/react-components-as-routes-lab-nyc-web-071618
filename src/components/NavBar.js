import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Testing from NavBar</h1>
      <h3><NavLink to="/">Home</NavLink></h3>
      <h3><NavLink to="/movies">Movies</NavLink></h3>
      <h3><NavLink to="/directors">Directors</NavLink></h3>
      <h3><NavLink to="/actors">Actors</NavLink></h3>
    </div>
  );
};

export default NavBar;
