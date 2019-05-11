import React, { Component } from 'react';
import Good from './good'
import './App.css';

class App extends Component {
  state = {
    email: "",
    select: "",
    errorEmail: false,
    errorInterest: false,
    okEmail: false,
    okSelect: false,
    waitingForServer: false,
    loggedIn: true
  }
  
  login=()=>{
    this.setState({waitingForServer:true})
    
    if(this.state.email === ""){
      setTimeout(() => {
        this.setState({errorEmail:true});
        this.setState({okEmail:false});
        this.setState({waitingForServer:false})
      }, 2000)
    }
    else if(this.state.select=== ""){
      this.setState({errorEmail:false});
      this.setState({errorInterest:true});
      this.setState({okSelect:false});
      this.setState({waitingForServer:false});
    }
    else{
      setTimeout(() => {
      this.setState({okEmail:true});
      this.setState({okSelect:true});
      this.setState({errorEmail:false});
      this.setState({waitingForServer:false})
      this.setState({loggedIn:false});
    }, 2000)
    }

    
  
    console.log("Email:" + this.state.email);
    console.log("Interest:" + this.state.select);
  }

  handleType=(event)=>{
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state.email)
  }
  render() {    
    return (
      <div className="container">
        <h2 className="title">INTERNSHIP SIGN UP FORM</h2>
        <hr></hr>
        {this.state.loggedIn&&<div><p className="text-paragraphe">Prepare for your career with Project Manager Management, Web-Developement, Graphic design, or Digital Marketing Internship at Northern</p>
          {this.state.errorInterest&&<span>Please select an Interest</span>}
          <div className="row">
            <div className="col">
            {this.state.errorEmail&&<span>Please enter a valid email address</span>}
              <input  className={`form-input " ${this.state.errorEmail&&"form-error"}`} disabled={this.state.waitingForServer} onChange={this.handleType} name="email" type="email" placeholder="Your Email Address *"/>
            </div>
            <div className="col">
              <select className={`form-input myselect " ${this.state.errorInterest&&"form-error"}`} disabled={this.state.waitingForServer} name="select" onChange={this.handleType}>
                <option value="" default>Your Interests</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
              </select>
            </div>
            </div>
            <button className="button-submit" onClick={this.login}>{this.state.waitingForServer?"Submitting...":"Sign Up Now"}</button>
        </div>}
          {this.state.okSelect&&this.state.okEmail&&<Good/>}
      </div>
    );
  }
}

export default App;
