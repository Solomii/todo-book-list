import React, {useState} from "react";
import "./style.css";
import BOOKS_LIST from './store/books.json'
import { Books } from "./components/Books";
import { Form } from "./components/AddForm"

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
  return (
    <div className="container">
      <Form onAddNewBook={onAddNewBook}/>
      <Books data={bookList} onRemoveBook={removeBook} onReadBook={readBook}/>
    </div>
  
  )
};

export default App;