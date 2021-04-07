import React, {Component} from 'react';
import PostItem from '../components/postItem.js'
import axios from 'axios'
import {Link} from 'react-router-dom';

export default class NewsPaginated extends Component {

	state={
	    postDetails:[],
	    isLoading:true
	}

	componentDidMount(){
		const { no }=this.props.match.params
	    axios.get(`news?page=${no}`)
	    .then( response => 
            this.setState({
                postDetails: response.data,
                isLoading:false
            })
        )
        
    }

    componentDidUpdate(prevProps, prevState){
    	const { no }=this.props.match.params

    	if(this.state.postDetails !==prevState.postDetails){
    		axios.get(`news?page=${no}`)
	    	.then( response => 
            this.setState({
                postDetails: response.data,
                isLoading:false
            })
        )
    	}
    }

  
	render() {
		const { postDetails, isLoading } = this.state
		return(
			<React.Fragment>
				{/*<div className="top-note">
					<p><i className="fas fa-user-plus"></i>&nbsp; &nbsp;Not registered yet? Signup and enjoy amazing hacker news features <Link to="/signup">here</Link> </p>
				</div>*/}

				{isLoading ?  
					(<i className="fa fa-spinner fa-spin" 
						style={{fontSize:"50px", margin:"45vh 45vw 45vh 45vw ",color:"var(--header-color)"}}>
					</i>) :
				(<div className="posts">
	       		 {postDetails.map(postDetail => 
	       		 	<PostItem 
		                key={postDetail.id}
		                postDetail={postDetail} 
		             />
	       		 )}
	       		 <hr /><p className="breadcrumbs">
	       		 	<span><Link to="/news/1">1 |</Link></span>
	       		 	<span><Link to="/news/2">2 |</Link></span>
	       		 	<span><Link to="/news/3">3 |</Link></span>
	       		 	<span><Link to="/news/4">4 |</Link></span>
	       		 	<span><Link to="/news/5">5 |</Link></span>
	       		 	<span><Link to="/news/6">6 |</Link></span>
	       		 	<span><Link to="/news/7">7 |</Link></span>
	       		 	<span><Link to="/news/8">8 |</Link></span>
	       		 	<span><Link to="/news/9">9 |</Link></span>
	       		 	<span><Link to="/news/10">10 </Link></span>
	       		 </p>
	     		</div>)}
     		</React.Fragment>
		)
	}
		
}
