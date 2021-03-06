import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    );
  }
}

export default App;
