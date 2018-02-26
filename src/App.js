import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Post from './Components/Post/Post';


class App extends Component {
  constructor(){
    super();
    this.state ={
      term:"",
      posts: [{id:1},{id:2}]
    }
  }
  componentDidMount(){
    const postsUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(postsUrl)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      this.setState({
        posts: data
      });
      console.log(this.state.posts);
    });
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header">
        </Header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Main posts={this.state.posts}></Main>
      </div>
    );
  }
}

export default App;
