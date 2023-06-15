import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {

state ={
  person:null
}

async componentDidMount(){
const url = 'https://api.randomuser.me/'
const response = await fetch(url);
const data = await response.json();
this.setState({person:data.results[0]})
}



  render(){
  return (
    <div>
      {!this.state.person ? <p>Loading...</p> : 
    <div>
      <img src={this.state.person.picture.large} alt='pic' width='300px' />
      <p>First Name:{this.state.person.name.first}</p>
      <p>Last Name:{this.state.person.name.last}</p>
      <p>Email: {this.state.person.email}</p>

      </div> }

    
    </div>
  )}



}

export default App;
