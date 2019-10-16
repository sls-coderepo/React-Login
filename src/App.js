import React, {Component} from 'react';
import NavBar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationViews'
import Login from './components/auth/Login'
import './App.css';

class App extends Component {
  state = {
    user: true
  }
  render(){
    return(
      <>
      {this.state.user ? (<><NavBar /><ApplicationViews /></>) 
      : (<Login/>)}
      </>
    )
  }
}

export default App;
