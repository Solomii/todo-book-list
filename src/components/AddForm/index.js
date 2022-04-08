import React, { useState } from 'react';

import "./style.css";

export const Form = ({ onAddNewBook }) => {
  const [book, setBook] = useState({
    isRead: false,
    title:""
  })

  return (
    <>
      <form className="books_form"
        onSubmit={(e) => {
          e.preventDefault();
          if (book.title.length) {
            onAddNewBook(book);
            setBook(({
              isRead: false,
              title: "",
            }))
          }
        }}
      >
        <input type="text" className="books_input" placeholder="New Book" value={book.title}
          onChange={(e) => {
          setBook((prevState) => ({...prevState, title: e.target.value}))
        }}>
        </input>
        <button type="submit" className="books_button">
          Add BOOK
        </button>
      </form>
    </>
  )
}
