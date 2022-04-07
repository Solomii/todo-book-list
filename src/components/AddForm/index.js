import React, {useState} from 'react'
import { Book } from '../Book'
import "./style.css"

export const Form = () => {
  return (
    <>
      <form className="books_form">
        <input type="text" className="books_input" placeholder="enter book"></input>
        <button type="submit"className="books_button">
          Add BOOK
        </button>
      </form>
    </>
  )
}
