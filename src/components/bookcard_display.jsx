import React, { Component } from "react";
import BookCard from "./bookcard";

class BookcardsDisplay extends Component {
  render() {
    const { onDelete, checkState, bookuuids } = this.props;

    return (
      <div className="d-flex flex-wrap ms-3 p-2">
        {bookuuids.map((uuid) => (
          <div key={uuid} className="card me-1">
            <BookCard uuid={uuid} checkState={checkState} onDelete={onDelete} />
          </div>
        ))}
      </div>
    );
  }
}

export default BookcardsDisplay;
