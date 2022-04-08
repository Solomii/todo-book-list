import React from "react";

import "./style.css";

export const Statistics = ({
  all,
  readBooks,
  notReadBooks,
  onRemoveAll,
}) => {
  return (
    <div className="statistics_board">
      <div className="statistics_data">
        <span>All:{all}</span>
        <span>Read:{readBooks}</span>
        <span>NotRead:{notReadBooks}</span>
      </div>
      <div>
        <button className="statistics_button" onClick={onRemoveAll}>Remove all</button>
      </div>
    </div>
  )
};