import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Text extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <p style={{ color: this.props.color }}> {this.props.value}</p>;
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Text color="purple" value="Clinton"></Text>
        </header>
      </div>
    );
  }
}

export default App;