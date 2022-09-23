import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddBook from './components/AddBook';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
