import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Comment extends Component {
	state={
		showReplies:false
	}

	click=async ()=>{
		await this.setState({
			showReplies: !this.state.showReplies
		});
	}


  render() {
    const {user, time_ago, content, comments}= this.props.comment
    const {showReplies}= this.state
  	
    return (
      
        <div className="comment" >
        	<p className="post-top">
          		<span> <Link to={`/user/${user}`}><i className="fas fa-user-circle"></i>&nbsp;{user} commented</Link></span>
          		<span><i className="fas fa-clock"></i>&nbsp;{time_ago}</span>
       		 </p><br />
        	<div dangerouslySetInnerHTML={{__html:content}} style={{wordBreak: "word-break"}}></div>&nbsp;
        	{comments.length===0 ? (<p style={{cursor:"pointer"}}>No replies</p>) : 
        		(<p onClick={this.click} id="reply-toggle" style={{cursor:"pointer"}}>
        			{showReplies ? (<span><i className="fas fa-eye-slash"></i>&nbsp;Hide replies</span>) : 
        			(<span><i className="fas fa-eye"></i>&nbsp;View replies</span>)}
        		</p>)}

	        	{comments.map( reply=> (<div id="sub-comment" className={showReplies? "show" : "hide"}>
					<p className="post-top">
          				<span> <Link to={`/user/${reply.user}`}><i className="fas fa-user-circle"></i>&nbsp;{reply.user} replied</Link></span>
          				<span><i className="fas fa-clock"></i>&nbsp;{reply.time_ago}</span>
       		 		</p><br />
        				<div dangerouslySetInnerHTML={{__html:reply.content}} style={{wordBreak: "word-break"}}></div><br />
        			</div>))}
        	<hr/>

        </div>

    )
  }
}

export default Comment;
