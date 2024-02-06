// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='links'>
       <Link to='/'>Home</Link>
       <Link to='/About'>About</Link>
       <Link to='/ThoughtRecords'>ThoughtRecords</Link>
       <Link to='/Gratitude'>Gratitude</Link>
       <Link to='/RelaxationExercise'>RelaxationExercise</Link>
       <Link to='/ActivityPlanning'>ActivityPlanning</Link>
    </nav>
  );
};
