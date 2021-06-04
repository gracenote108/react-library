import React, { Component } from "react";
import Files from "react-files";
import Book from "../objects/book";
import { v4 as uuidv4 } from "uuid";
import { withRouter } from "react-router-dom";
import Joi from "joi-browser";

class NewBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: { files: [] },
      errors: {},
    };
  }

  handleChange = ({ target: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  onFilesChange = (files) => {
    const data = { ...this.state.data };
    data["files"] = files;
    this.setState({ data });
  };

  onFilesError = (error, file) => {
    console.log("error code " + error.code + ": " + error.message);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    const { author, title, numberOfPages } = this.state.data;

    const file = this.state.data.files[0];

    // id, filename, author, title, numberOfPages, isRead
    const newuuid = uuidv4();
    const newBook = new Book(
      newuuid,
      file.name,
      author,
      title,
      numberOfPages,
      false
    );

    const uuids = JSON.parse(localStorage.getItem("uuids"));
    uuids.push(newuuid);
    localStorage.setItem("uuids", JSON.stringify(uuids));
    localStorage.setItem(newuuid, JSON.stringify(newBook));

    this.props.history.replace(`/`);
  };

  schema = {
    author: Joi.string().required().label("Author"),
    title: Joi.string().required().label("Title"),
    numberOfPages: Joi.number().positive().required().label("Number of Pages"),
    files: Joi.array().length(1).required().label("New Image"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    let errors = {};
    for (let err of error.details) errors[err.path[0]] = err.message;
    return errors;
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="d-inline-flex centered">
        <div style={{ marginLeft: 10, marginRight: 10 }}>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="author">Author:</label>
              <input
                name="author"
                onChange={this.handleChange}
                className="form-control"
              />
              {errors["author"] && (
                <div className="alert alert-danger">{errors["author"]}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="title">Title: </label>
              <input
                name="title"
                onChange={this.handleChange}
                className="form-control"
              />
              {errors["title"] && (
                <div className="alert alert-danger">{errors["title"]}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="numberOfPages">
                Number of Pages:
                <input
                  name="numberOfPages"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </label>
              {errors["numberOfPages"] && (
                <div className="alert alert-danger">
                  {errors["numberOfPages"]}
                </div>
              )}
            </div>
            <button className="btn btn-primary mt-2">Submit</button>
          </form>
        </div>
        <div className="files ms-2">
          <div>New Image:</div>
          {errors["files"] && (
            <div className="alert alert-danger">{errors["files"]}</div>
          )}
          <Files
            className="files-dropzone-list"
            onChange={this.onFilesChange}
            onError={this.onFilesError}
            accepts={["image/*"]}
            multiple
            maxFiles={1}
            maxFileSize={10000000}
            minFileSize={0}
            clickable
          >
            Drop New Book Image Here Or Click to Browse
          </Files>
          {this.state.data.files.length > 0 ? (
            <div className="mt-2">
              <img
                alt="Uploaded"
                src={this.state.data.files[0].preview.url}
                className="book"
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(NewBook);
