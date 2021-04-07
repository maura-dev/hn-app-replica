import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../y18.gif'
var logoStyle={
	border: "1px solid #fffffe"
};


export default class MobileHeader extends Component {
	state={
		viewNavContent: false
	}

	showNavCont=()=>{
		this.setState({
			viewNavContent: true
		});
		//document.getElementsByClassName("item").style.display="block"
		var x = document.getElementsByClassName("mobile-menu");
		var i;
		for (i = 0; i < x.length; i++) {
  		x[i].style.display = "block";
		}

		var y = document.getElementsByClassName("news-page");
		var j;
		for (j = 0; j < y.length; j++) {
  		y[j].style.opacity = "0.5";
		}
	}

	hideNavCont=()=>{
		this.setState({
			viewNavContent: false 
		});
		//document.getElementsByClassName("item").style.display="none"
		var x = document.getElementsByClassName("mobile-menu");
		var i;
		for (i = 0; i < x.length; i++) {
  		x[i].style.display = "none";
		}

		var y = document.getElementsByClassName("news-page");
		var j;
		for (j = 0; j < y.length; j++) {
  		y[j].style.opacity = "0.8";
		}
	}

	render() {
		const {viewNavContent} = this.state
		return(

			<nav className="mobile-nav">

				<div className="logo">
					<Link to="/">
						<img src={Logo} style={logoStyle} alt="hn logo" width="30px" height="30px" />
					</Link>
					<h4><Link to="/">Hacker News</Link></h4>
				</div>
				
				<p className="toggle">
					{viewNavContent ? <i onClick = {this.hideNavCont} className="fas fa-times"></i> : <i onClick={this.showNavCont} className="fas fa-bars"></i>}
				</p>

				<div className="sidebar-cont">
					<ul className="mobile-menu">
						<li className="item"><Link to="/newest">New </Link></li>
						<li className="item "><Link to="/front">Past </Link></li>
						<li className="item "><Link to="/newcomments">Comments </Link></li>
						<li className="item "><Link to="/ask">Ask </Link></li>
						<li className="item "><Link to="/show">Show </Link></li>
						<li className="item "><Link to="/jobs">Jobs </Link></li>
						<li className="item "><Link to="/submit">Submit </Link></li>
						<li className=" item"><Link to="/login">Login</Link></li>
					</ul>
				</div>
			
			</nav>
		)
	}
		
}