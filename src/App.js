import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Graphics from "./components/Graphics";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faBell,
  faLongArrowAltUp,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(faSearch, faBell, faLongArrowAltUp, faArrowLeft);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/BTC" component={Graphics} />
            <Route path="/ETH" component={Graphics} />
            <Route path="/XRP" component={Graphics} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
