import React, { Component } from "react";
import Checkbox from "./checkbox";

class BookCard extends Component {
  constructor(props) {
    super(props);

    const book = JSON.parse(localStorage.getItem(props.uuid));
    this.state = {
      id: book["id"],
      filename: book["filename"],
      author: book["author"],
      title: book["title"],
      numberOfPages: book["numberOfPages"],
      isRead: book["isRead"],
    };
  }

  handleToggleIsRead = (uuid) => {
    const book = JSON.parse(localStorage.getItem(uuid));
    if (book["isRead"] === true) {
      book["isRead"] = false;
    } else {
      book["isRead"] = true;
    }

    localStorage.setItem(uuid, JSON.stringify(book));
    this.setState({ isRead: book["isRead"] });
  };

  render() {
    const { id, filename, author, title, numberOfPages, isRead } = this.state;
    const { checkState, onDelete } = this.props;
    return (
      <React.Fragment>
        <Checkbox
          onToggleCheckbox={() => this.handleToggleIsRead(id)}
          isChecked={isRead}
          name={title}
          label="Book Read?"
          reference={this}
          id={id}
        />
        <div className="card-body">
          <h6 className="card-title" style={{ textAlign: "center" }}>
            {title}
          </h6>
          <img
            className="book"
            src={`/react-library/images/${filename}`}
            alt={title}
          />
          <div>Author: {author}</div>
          <div>Number of Pages: {numberOfPages}</div>
          {checkState && (
            <button
              className="btn btn-danger btn-sm delete"
              style={{ display: "block" }}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default BookCard;
