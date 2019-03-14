import React, { Component } from "react";
import { Container } from "../styled";
import PersonalInfo from "../components/PersonalInfo";
import List from "../components/List";

class MainPage extends Component {
  render() {
    return (
      <Container>
        <PersonalInfo />
        <List />
      </Container>
    );
  }
}

export default MainPage;
