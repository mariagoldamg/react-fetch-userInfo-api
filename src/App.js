import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {

state ={
  users:[]
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then (res => {
 const users = res.data;

 this.setState({users})
  })

}



  render(){
  return (
    <div>
      {this.state.users.map (user=>
        <p key={ user.id}> {user.name}   
        <span> {user.email} </span> 
         <span>{user.address.street} </span> 
         <span>{user.address.city} </span>
         
        </p>)}
    
    </div>
  )}



}

export default App;
