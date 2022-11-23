import React from 'react';
import './App.css';
import { IconContext } from 'react-icons';
import { MdAutoGraph, MdEditNote } from 'react-icons/md';
import { GiBookshelf } from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FrontIcon></FrontIcon>
      </header>
    </div>
  );
}

const FrontIcon: React.FC = () => {
  return (
    <IconContext.Provider value={{ color: '#fff', size: '100px' }}>
      <div id="graph-icon"><MdAutoGraph /></div>
      <div id="book-icon"><GiBookshelf /></div>
      <div id="edit-icon"><MdEditNote /></div>
    </IconContext.Provider>
  )
}

export default App;
