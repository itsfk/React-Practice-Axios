import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import UserForm from "./components/UserForm";
class App extends Component {
  state={
    repos:null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`)
    .then((res)=>{
    const repos = res.data.public_repos;
    this.setState({ repos });
    })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Http Request With Axios</h1>
        </header>
        <UserForm getUser={this.getUser} />
       {this.state.repos}
      </div>
    );
  }
}

export default App;
