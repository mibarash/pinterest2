import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Post from './Components/Post/Post';
import About from './Components/About/About';
import Test from './Components/Test/Test';
import Post_Page from './Components/Post_Page/Post_Page';



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
        {/* <Main posts={this.state.posts}></Main> */}
        {/* <Route path = "/" component={Main} posts={this.state.posts}/> */}
        <Route
          exact path='/'
          render={(props) => <Main {...props} posts={this.state.posts} />}
        />
        <Route path = "/About" component={About}/>
        <Route path = "/post_page" component={Post_Page}/>

      </div>
    );
  }
}

export default App;
