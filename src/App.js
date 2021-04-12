import React, { Component } from 'react';
import { Main } from './Components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import { SetInfoToLocalStorage } from './Components/Functions/SetInfoToLocalStorage'
import './Styles/App.scss'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChangeInput(e) {
    let targetId = e.target.id
    let targetValue = e.target.value

    this.setState({
      [targetId] : targetValue,
    })  
  }

  handleSubmit() {
    SetInfoToLocalStorage(this.state)
  }

  render() {
    console.log('state',this.state)
    return (
      <Router>
        <Main HandleSubmit={this.handleSubmit} HandleChangeInput={this.handleChangeInput}/>
      </Router>
    );
  }
}

export default App;
