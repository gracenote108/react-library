import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LibraryPage from "./components/librarypage";
import NewBook from "./components/newbook";
import NavBar from "./components/navbar";
import "./App.css";
import "./Files.css";

class App extends Component {
  updateLocalStorage = (library) => {
    localStorage.setItem("library", JSON.stringify(library));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/newbook" render={(props) => <NewBook {...props} />} />
          <Route path="/" component={LibraryPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
