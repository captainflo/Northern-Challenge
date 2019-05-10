import React, { Component } from 'react';
import Good from './good'
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
    if(this.state.email === ""){
      setTimeout(() => {
        this.setState({error:true});
        this.setState({ok:false});
        this.setState({waitingForServer:false})
      }, 2000)
    }
    else{
      setTimeout(() => {
      this.setState({ok:true})
      this.setState({error:false})
      this.setState({waitingForServer:false})
      this.setState({loggedIn:false});
    }, 2000)
    }
    console.log("Email:" + this.state.email);
    console.log("Interest:" + this.state.select);
  }

  handleType=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }
  render() {    
    return (
      <div className="container">
        <h2 className="title">INTERNSHIP SIGN UP FORM</h2>
        <hr></hr>
        {this.state.loggedIn&&<div><p className="text-paragraphe">Prepare for your career with Project Manager Management, Web-Developement, Graphic design, or Digital Marketing Internship at Northern</p>
          <div className="row">
            <div className="col">
            {this.state.error&&<span>Please enter a valid email address</span>}
              <input  className={"form-input " +(this.state.error&&"form-error")} disabled={this.state.waitingForServer} onChange={this.handleType} name="email" type="email" placeholder="Your Email Address *"/>
            </div>
            <div className="col">
              <select className="form-input myselect" disabled={this.state.waitingForServer} name="select" onChange={this.handleType}>
                <option value="" default>Your Interests</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
              </select>
            </div>
            </div>
            <button className="button-submit" onClick={this.login}>{this.state.waitingForServer?"Submitting...":"Sign Up Now"}</button>
        </div>}
          {this.state.ok&&<Good/>}
      </div>
    );
  }
}

export default App;
