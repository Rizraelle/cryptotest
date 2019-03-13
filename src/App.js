import React, { Component } from "react";
import List from "./components/List";
import PersonalInfo from "./components/PersonalInfo";
import { Container } from "./styled";
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
        <Container>
          <PersonalInfo />
          <List />
        </Container>
      </div>
    );
  }
}

export default App;
