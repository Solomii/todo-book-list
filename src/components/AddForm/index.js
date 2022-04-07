import React, { useState } from 'react';

import "./style.css";

export const Form = () => {
  const [book, setBook] = useState({
    title:"dsaf"
  })
  return (
    <>
      <form className="books_form">
        <input type="text" className="books_input" placeholder="enter book" value={book.title}></input>
        <button type="submit"className="books_button">
          Add BOOK
        </button>
      </form>
    </>
  )
}
