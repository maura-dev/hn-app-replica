import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import PropTypes from 'prop-types';


class PostItem extends Component {
  /*constructor(props){
    super(props)
  }*/

  render() {
    const {id,title,url,domain,time_ago,points,user,comments_count }=this.props.postDetail
  
    return (
     
      <div className="post-item" style={{margin:"10px 0px 10px 0px"}}>

        <p className="post-top">
          <span> <Link to={`/user/${user}`}><i className="fas fa-user-circle"></i>&nbsp;Posted by {user}</Link></span>
          <span><i className="fas fa-clock"></i>&nbsp;{time_ago}</span>
        </p>

        <p className="post-title"><Link to={{ pathname: url }} target="_blank"><i className="far fa-newspaper"></i>&nbsp; {title}&nbsp; &nbsp;</Link>&nbsp;
          <span style={{fontSize:"9pt"}} className="post-domain"><Link to= {{ pathname: `https://${domain}`}} target="_blank"><i className="fas fa-link" ></i>&nbsp;({domain})</Link></span>
        </p>

        <p style={{marginTop:"-5px"}} className="post-stats">
          <span><Link to={`/post/${id}`}>{comments_count} &nbsp;<i className="far fa-comment-alt"></i></Link></span>
          <span><Link to={`/post/${id}`}>{points} points</Link></span>
        </p>

      </div>

    )
  }
}

export default PostItem;