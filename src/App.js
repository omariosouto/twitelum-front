import React, { Component } from 'react';
import Cabecalho from './components/Cabecalho'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho usuario="@omariosouto" />
      </div>
    );
  }
}

export default App;
