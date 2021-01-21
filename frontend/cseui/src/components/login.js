import React, { Component } from 'react';

class Login extends Component {
    state = {
        credentials: {username:'', password: ''}
    } 

    login = event => {
        console.log(this.state.credentials);
        fetch('')
    }
    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials : cred});
    }


    render() {
        return (
            <div>
              <h1>Login User Form</h1>
              <label>Username:
                  <input type="text" name = "username" 
                  value = {this.state.credentials.username} 
                  onChange={ this.inputChanged}/>
              </label>
              <br/>
              <label>Password:
                  <input type="password" name = "password"  
                  value = {this.state.credentials.password} 
                  onChange={ this.inputChanged}/>
              </label>
              <br/>
              <button onClick={this.login}>login</button>
            </div>
          );
    }
  
}

export default Login;
