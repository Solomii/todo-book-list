import React from "react";

import "./style.css";

export const Book = ({ count, item, onRemoveBook, onReadBook }) => {
  const titleStyle = `book_title ${item.isRead ? "isRead" : ""}`;
  return (
    <>
      <li className="book_wrapper">
        <span>{count}</span>
        <span className={titleStyle}>{item.title}</span>
        <span className="book_row">
          <span className="book_pointer" onClick={() => onRemoveBook(item.id)}>🗑</span>
          <input
          type="checkbox"
          className="book_pointer"
          checked={item.isRead}
          onChange={() => onReadBook(item.id)}
        >
        </input>
        </span>
       
      </li>
   </>
  )
}