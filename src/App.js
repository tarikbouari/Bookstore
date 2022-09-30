import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import Categories from './components/Categorie';
import DisplayBook from './components/DisplayBook';
import store from './redux/configureStore';
import { getBooks } from './redux/books/books';

function App() {
  store.dispatch(getBooks());
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<DisplayBook />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </div>
    </Provider>

  );
}

export default App;
