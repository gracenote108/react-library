import React, { Component } from "react";
import { Link } from "react-router-dom";
import Checkbox from "./checkbox";
import BookcardsDisplay from "./bookcard_display";
import { getLibrary } from "../objects/book";

class LibraryPage extends Component {
  constructor() {
    super();

    let uuids = [];
    if (
      JSON.parse(localStorage.getItem("uuids")) === null ||
      JSON.parse(localStorage.getItem("uuids")).length === 0
    ) {
      const library = getLibrary();
      for (let book of library) {
        if (localStorage.getItem(book["id"]) === null) {
          uuids.push(book["id"]);
          localStorage.setItem(book["id"], JSON.stringify(book));
        }
      }
    } else {
      uuids = JSON.parse(localStorage.getItem("uuids"));
    }

    localStorage.setItem("uuids", JSON.stringify(uuids));

    this.state = {
      bookuuids: uuids,
      isChecked: false,
    };
  }

  handleToggleCheckbox = () => {
    if (this.state.isChecked) {
      this.setState({ isChecked: false });
    } else {
      this.setState({ isChecked: true });
    }
  };

  handleDelete = (uuid) => {
    const { bookuuids: olduuids } = this.state;
    const newuuids = olduuids.filter((olduuid) => uuid !== olduuid);
    localStorage.removeItem(uuid);
    localStorage.setItem("uuids", JSON.stringify(newuuids));

    this.setState({ bookuuids: newuuids });
  };

  render() {
    const { isChecked, bookuuids } = this.state;

    return (
      <div className="ms-2">
        <div className="d-flex justify-content-between">
          <div className="ms-3">
            <Checkbox
              id="delete"
              onToggleCheckbox={this.handleToggleCheckbox}
              isChecked={isChecked}
              name="deleteToggle"
              label="Toggle Delete"
            />
          </div>
          <Link to="/newbook">
            <div className="me-5 btn btn-success">Add New Book</div>
          </Link>
        </div>
        <BookcardsDisplay
          bookuuids={bookuuids}
          checkState={isChecked}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default LibraryPage;
