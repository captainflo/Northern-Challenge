import React, { Component } from 'react';
import Error from './error'
import Good from './good'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    email: "",
    select: "",
    error: false,
    ok: false,
    waitingForServer: false,
    loggedIn: true
  }

  login=()=>{
    this.setState({waitingForServer:true})
    if(this.state.select === "" || this.state.email === ""){
      setTimeout(() => {
        this.setState({error:true});
        this.setState({ok:false});
        this.setState({waitingForServer:false})
      }, 3000)
    }
    else{
      setTimeout(() => {
      this.setState({ok:true})
      this.setState({error:false})
      this.setState({waitingForServer:false})
      this.setState({loggedIn:false});
    }, 3000)
    }
    console.log(this.state.email + " " + this.state.select)
  }

  handleType=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }
  render() {    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Internship Challenge Sign UP</h2>
        </div>
        <div className="App-intro">

        {this.state.loggedIn&&<div>
          <input disabled={this.state.waitingForServer} onChange={this.handleType} name="email" type="email" />
            <select disabled={this.state.waitingForServer} name="select" onChange={this.handleType}>
              <option value="">Select</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
            </select>
            <button onClick={this.login}>Log In</button>
            <div>
              {this.state.waitingForServer&&<div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>}
            </div>
          </div>}

          {this.state.error&&<Error/>}

          {this.state.ok&&<Good/>}

        </div>
      </div>
    );
  }
}

export default App;
