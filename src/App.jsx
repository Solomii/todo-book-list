import React, { useState } from "react";

import "./style.css";
import BOOKS_LIST from './store/books.json';
import { Books } from "./components/Books";
import { Form } from "./components/AddForm";
import { Statistics } from "./components/StatisticsBoard";


const App = () => {
  const [bookList, setBookList] = useState(BOOKS_LIST)

  const removeBook = (id) => {
    // setBookList(bookList.filter((book) => book.id !==id))
    setBookList((prevState) => prevState.filter((book) => book.id !==id))

  }

  const readBook = (id) => {
    const index = bookList.findIndex(item => item.id === id)
    const oldObject = bookList[index];
    const newObject = { ...oldObject, isRead: !oldObject.isRead }
    
    // setBookList(prevState => ([...prevState.slice(0, index), newObject, ...prevState.slice(index + 1)]));
    setBookList(prevState => {
      return [...prevState.slice(0, index), newObject, ...prevState.slice(index + 1)];
    })
  }

  const onAddNewBook = (book)  => {
    setBookList( (prev) => {
    return [...prev, {...book, id: bookList.length +1}]
  })
    console.log("book", book)
  }

  const statisticsData = {
    all: bookList.length,
    readBooks: bookList.filter((book) => book.isRead).length,
    notReadBooks: bookList.filter((book) => !book.isRead).length,
  }

  const removeAll = () => {
    setBookList([]);
  }

  return (
    <div className="container">
      <Form onAddNewBook={onAddNewBook} />
      <Statistics {...statisticsData} onRemoveAll={removeAll} />
      <Books data={bookList} onRemoveBook={removeBook} onReadBook={readBook}/>
    </div>
  )
};

export default App;