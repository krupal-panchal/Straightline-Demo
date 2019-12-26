import React, { Component } from 'react'

export default class Header extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = {isToggleOn: false}
	    this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
	    this.setState(state => ({
	      isToggleOn: !state.isToggleOn
	    }));
	    document.body.classList.toggle('scroll-hidden');
	}
	render(){
		return(
		<>
			<div id="mobile-menu">
				<a href="javascript:void(0)" onClick={this.handleClick} className= { this.state.isToggleOn ? "menu-trigger open" : "menu-trigger" }> <span></span> </a>
				<div className={ this.state.isToggleOn ? "mob-navbar open" : "mob-navbar" }>
					<ul>
						<li><a href="#">HOME</a></li>
						<li><a href="#">ABOUT US</a></li>
						<li><a href="#">SERVICES</a>
							<em className="submenu-caret"></em>
							<ul>
								<li><a href="#">SERVICES 1.1(M)</a></li>
								<li><a href="#">SERVICES 1.2</a>
									<ul>
										<li><a href="#">SERVICES 1.1.1</a></li>
										<li><a href="#">SERVICES 1.1.2</a></li>
									</ul>
								</li>
								<li><a href="#">SERVICES 1.3</a></li>
							</ul>
						</li>
						<li><a href="#">TESTIMONIALS</a></li>
						<li><a href="#">GALLERY</a></li>
						<li><a href="#">ESTIMATE</a></li>
						<li><a href="#">FAQS</a></li>
						<li><a href="#">CONTACT US</a></li>
						<li><a href="#">BLOG</a></li>
					</ul>
				</div>
			</div>
			<header id="header">
				<div className="top_bar">
					<div className="container">
						<p>2912 Arthur Kill Rd, Staten Island, NY 10309 | Monday – Friday: 7:30 AM – 5 PM Saturday: 7:30 AM – 1 PM Sunday: CLOSED</p>
						<div className="head_phone">
							<p>CALL US TODAY : <a href="tel:718.966.8900">718.966.8900</a></p>
						</div>
					</div>
				</div>
				<div className="head_bottom">
					<div className="container">
						<a href="index.html" className="logo">
							<img src="images/logo.png" alt="logo"/>
						</a>
						<div className="nav_lan">
							<nav>
								<ul>
									<li><a href="#">HOME</a></li>
									<li><a href="#">ABOUT US</a></li>
									<li><a href="#">SERVICES</a>
										<ul>
											<li><a href="#">SERVICES 1.1</a></li>
											<li><a href="#">SERVICES 1.2</a>
												<ul>
													<li><a href="#">SERVICES 1.1.1</a></li>
													<li><a href="#">SERVICES 1.1.2</a></li>
												</ul>
											</li>
											<li><a href="#">SERVICES 1.3</a></li>
										</ul>
									</li>
									<li><a href="#">TESTIMONIALS</a></li>
									<li><a href="#">GALLERY</a></li>
									<li><a href="#">ESTIMATE</a></li>
									<li><a href="#">FAQS</a></li>
									<li><a href="#">CONTACT US</a></li>
									<li><a href="#">BLOG</a></li>
								</ul>
							</nav>
					</div>
					</div>
				</div>
			</header>
		</>
		)
	}
}