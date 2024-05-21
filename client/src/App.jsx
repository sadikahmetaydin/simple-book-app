import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './routes/Home/Home';
import Book from './routes/Book/Book';
import SingleBook from './routes/Book/SingleBook';
import CreateBook from './routes/Book/CreateBook';
import EditBook from './routes/Book/EditBook';
import About from './routes/About/About';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Book />} />
          <Route path="/books/:slug" element={<SingleBook />} />
          <Route path="/createbook" element={<CreateBook />} />
          <Route path="/editbook/:slug" element={<EditBook />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
