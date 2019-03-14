import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faBell,
  faLongArrowAltUp
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faSearch, faBell, faLongArrowAltUp);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <MainPage />
        </Router>
      </div>
    );
  }
}

export default App;
