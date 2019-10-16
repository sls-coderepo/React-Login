import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import APIManager from "../../modules/APIManager"

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }



    handleLogin = (e) => {
        e.preventDefault()
        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        let credentials = { email: this.state.email, password: this.state.password }
        APIManager.addUser(credentials)
            .then(result => {
                console.log("result is", result)
            })
        this.props.setUser(credentials);
        this.props.history.push("/");

    }



    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <h3>Please sign in</h3>
                    <div className="formgrid">
                        <input onChange={this.handleFieldChange} type="email"
                            id="email"
                            placeholder="Email address"
                            required="" autoFocus="" />
                        <label htmlFor="inputEmail">Email address</label>

                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <button type="submit">
                        Sign in
            </button>
                </fieldset>
            </form>
        )
    }
}

export default withRouter(Login)