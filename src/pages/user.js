import React, { Component } from 'react';
import axios from 'axios'

export default class User extends Component{

	state={
		userDetails:[]
	}

	componentDidMount(){
		const userObject = this.props.match.params
		//alert(JSON.stringify(userObject))
		axios.get(`user/${userObject.user}`)
	    .then( response => 
           this.setState({
                userDetails: response.data
            })
            //the api does not return the user details, error 404
        )
	}
	render(){
		const userObject = this.props.match.params
		return(
			<div className="posts user">
				<p onClick={()=> this.props.history.goBack()} className="back"><i className="fas fa-long-arrow-alt-left"></i>&nbsp;Back to all posts</p>
				<div>
					<p><i className="fas fa-user-plus"></i>&nbsp; user: {userObject.user} </p>
					<p><i className="fas fa-calendar-plus"></i>&nbsp; created: </p>
					<p><i className="fas fa-dharmachakra"></i>&nbsp; karma: </p>
					<p><i className="fas fa-address-card"></i>&nbsp; about:</p>
				</div>
				
			</div>
		)
	}
}