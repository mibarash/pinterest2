import React, { Component } from 'react';
import './Main.css';
import Post from '../Post/Post';


class Main extends Component {

    render(props) {
        console.log(this.props.posts[0]);
//    let user = props.posts[0];
//    console.log(user);
        let users = this.props.posts;
        const usersList = users.map((user, i) =>
           <li key={i}>
               {user.id}
           </li>
       );

       return (
           <div>
                {/* <ul>{usersList}</ul> */}
                <Post posts={users} sendIdToApp={this.props.sendIdToApp.bind(this)}></Post>
           </div>

       );
   }

}

export default Main;