import React from "react";

import "./style.css";
import { Book } from "../Book";

export const Books = (props) => {
  return (
    <ul className="books_list">
      {props.data.map((book, index) => {
        return <Book key={book.id} item={book} count={index + 1} onRemoveBook={props.onRemoveBook} onReadBook={props.onReadBook}/>;
      })}
    </ul>
  );
};