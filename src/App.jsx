// App.js
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import './App.css';
import { Navbar } from './components/Navbar';
import ThoughtRecords from './components/ThoughtRecords';
import Gratitude from './components/Gratitude';
import RelaxationExercises from './components/RelaxationExercise';
import ActivityPlanning from './components/ActivityPlanning';

function App() {
  return (
    <div className='body'>
      <header>
        <h1>Cognitive Behavioural Therapy</h1>
      </header>
      <div className='container'>
        <Navbar className='navbar' />
        <main className='routes'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/ThoughtRecords' element={<ThoughtRecords />} />
            <Route path='/Gratitude' element={<Gratitude />} />
            <Route path='/RelaxationExercise' element={<RelaxationExercises/>}/>
            <Route path='/ActivityPlanning' element={<ActivityPlanning/>}/>
          </Routes>
        </main>
      </div>
      <footer>
        <p>A Beautiful Mind Makes World More Beautiful.</p>
      </footer>
    </div>
  );
}

export default App;
