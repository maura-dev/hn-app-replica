import React, { Component } from 'react';
import axios from 'axios'
import Comment from '../components/comment.js'
import {Link} from 'react-router-dom';

export default class Post extends Component{

	state={
		itemDetails:[],
		comments:[]
	}

	async componentDidMount(){
		const idObject = this.props.match.params
		await axios.get(`item/${idObject.id}`)
	    .then( response => 
           this.setState({
                itemDetails: response.data,
                comments: response.data.comments
            })
        )
	}
	render(){
		const {url, title,id, domain,points,user, time_ago, comments_count}= this.state.itemDetails
		const {comments}= this.state

		return(
			<div className="posts post" >
				<p onClick={()=> this.props.history.goBack()} className="back"><i className="fas fa-long-arrow-alt-left"></i>&nbsp;Back to all posts</p>
				<div className="post-header">
		          	<h4 style={{fontSize:"11pt"}} ><Link to={{ pathname: url }} target="_blank"> <i className="far fa-newspaper"></i>&nbsp;{title}</Link></h4>&nbsp;
		            <p style={{fontSize:"9pt"}} className="post-domain">
		            	<Link to= {{ pathname: `https://${domain}` }} target="_blank"><i className="fas fa-link" ></i>&nbsp;({domain})</Link>
		            </p>
		          
			        <p style={{textAlign:"center"}}>
			            <sub style={{fontSize:"8pt"}}>{points} points by&nbsp; 
			            	<Link to={`/user/${user}`}><i className="fas fa-user-circle"></i>&nbsp;{user}</Link>&nbsp;
			            	<Link to={`/post/${id}`}><i className="fas fa-clock"></i>&nbsp;{time_ago}</Link> | <Link to="">hide</Link> | <Link to={`/post/${id}`}><i className="far fa-comment-alt"></i>&nbsp;{comments_count} comments</Link></sub>
			        </p>
		        </div>

		        {comments.map(comment => (
		        	<Comment
		        	key={comment.id}
	                comment={comment}  />
		        	))}

		    </div>
		)
	}
}