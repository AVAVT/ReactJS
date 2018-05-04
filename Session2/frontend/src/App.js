import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import axios from "./axios";

import HomeScreen from "./containers/HomeScreen";
import DetailScreen from "./containers/DetailScreen";

class App extends Component {
  state = {};

  _onLogin = () => {
    axios
      .post("/api/auth", {
        username: "admin",
        password: "123456"
      })
      .then(response =>
        this.setState({
          username: response.data.username,
          id: response.data.id
        })
      )
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="App">
        <HomeScreen username={this.state.username} onLogin={this._onLogin} />
      </div>
    );
  }
}

export default App;
