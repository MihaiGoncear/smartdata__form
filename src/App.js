import React, { Component } from 'react';
import { Main } from './Components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import './Styles/App.scss'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <Main/>
      </Router>
    );
  }
}

export default App;
