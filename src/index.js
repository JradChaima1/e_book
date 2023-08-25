import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';



 
const BookList = () => {

  return (
    <>
<h1>WeBook best sellers</h1>
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
    </>
  );
};




const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
