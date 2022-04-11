import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Design from "./Design.js";
import withSplash from "./store/withSplash.js";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stateStuff: true
    };
  }

  render() {
    return (
      <div className="home">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Design />
      </div>
    );
  }
}

export default withSplash(Home);
