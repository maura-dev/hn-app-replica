import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../y18.gif'
var logoStyle={
	border: "1px solid #fffffe"
};


export default class Header extends Component {

	render() {
		return(

			<nav className="desktop-nav">

				<div className="logo">
					<Link to="/">
						<div>
						<img src={Logo} style={logoStyle} alt="hn logo" width="30px" height="30px" />
						</div>
					</Link>
				</div>
				<h4 className="item"><Link to="/">Hacker News</Link></h4>
				<ul className="menu">
					<li className="item"><Link to="/newest">New </Link></li>
					<li className="item "><Link to="/front">Past </Link></li>
					<li className="item "><Link to="/newcomments">Comments </Link></li>
					<li className="item "><Link to="/ask">Ask </Link></li>
					<li className="item "><Link to="/show">Show </Link></li>
					<li className="item "><Link to="/jobs">Jobs </Link></li>
					<li className="item "><Link to="/submit">Submit </Link></li>
				</ul>
				<p className="item login"><Link to="/login">Login</Link></p>
			
			</nav>
		)
	}
		
}