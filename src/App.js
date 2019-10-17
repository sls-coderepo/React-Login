
import React from 'react';
import './App.css';
import { Component } from 'react'
import ApplicationViews from "../src/components/ApplicationViews"
import NavBar from "./components/nav/NavBar"
import Login from "./components/auth/Login"
class App extends Component {
  state = {
    user: sessionStorage.getItem("credentials") !== null
  }

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null


  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    sessionStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated(),
      userId: authObj.id
    });
  }

  clearUser = () => {
    sessionStorage.clear()

    this.setState({
      user: this.isAuthenticated()
    });

  }
  componentDidMount() {
    this.setState({
      user: this.isAuthenticated(),
      
    })
  }

 
  render() {
    return (
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user}
          setUser={this.setUser} />
      </>
    )
  }


  render() {
    return (
      <>
        {this.state.user ? (
          <>
           <NavBar />
            <ApplicationViews  user={this.state.user}/>
           
          </>
        ) : (
            <Login setUser={this.setUser} />
          )}
      </>
    )
  }
}

export default App;