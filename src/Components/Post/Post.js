import React, { Component } from 'react';
import './Post.css';
import {Link} from 'react-router-dom';


class Post extends Component {

  idNum(num) {
    this.props.sendIdToApp({
      id: num
    });
  }

  render(props) {
      const usersList = this.props.posts.map((user, i) => {
        let randNum = Math.round(250 + (Math.random() * 100));
        return (
          <Link to='/post_page'>
            <li onClick={()=>this.idNum(i)} className="user_list_li" key={i}>
                <img className="image" src={`https://picsum.photos/200/${randNum}/?image=2${i}`}></img>
                <div className="user_list_desc">
                  <div>{user.title}</div>
                  <div>...</div>
                </div>
            </li>
          </Link>
        );
      }
    )
      const user = this.props.posts;
      console.log(user[0].id)

   
    return (
      <div className="user_list_div">
        {/* <div> {user[0].id}</div> */}
        <ul className="user_list_ul">{usersList}</ul>
      </div>
    );
  }
}

export default Post;
