import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "./axios";

import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";

class App extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    axios
      .get("/api/images")
      .then(data => {
        console.log(data.data);
        this.setState({ images: data.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <MainContent images={this.state.images} />
      </div>
    );
  }
}

export default App;
