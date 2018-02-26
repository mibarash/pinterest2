import React, { Component } from 'react';
import './Header.css';



class Header extends Component {
  render() {
    return (
      <div className="header">
          <i className="fab fa-pinterest logo"></i>
          <input className="search" type="text" name="fname" placeholder="search"></input>
          <div className="home">Home</div>
          <div className="user">User</div>
          <i className="fas fa-bars menu"></i>
          <i className="fas fa-comment-alt chat"></i>
          <i className="fas fa-ellipsis-h more"></i>

      </div>
    );
  }
}

export default Header;
