import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Categories from './components/Categorie';
import DisplayBook from './components/DisplayBook';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<DisplayBook />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
