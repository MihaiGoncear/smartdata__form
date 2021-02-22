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

  test = e => {
    alert(e.target.value)
  }
  
  render() {
    return (
      <Router>
        <Main Test={this.test}/>
      </Router>
    );
  }
}

export default App;
