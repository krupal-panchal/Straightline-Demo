import React, { Component } from 'react'

class Footer extends Component{
	render(){
		return(
			<footer id="footer">
				<div className="container">
				<a href="#" className="foot_logo"><img src="images/logo.png" alt="footer_logo"/></a>
				<div className="foot_wrap">
					<div className="foot_about">
						<h3>ABOUT US</h3>
						<p>We are committed to our customers and focus on serving them with honesty, quality, and value. We know how important your vehicle is to you and that is why we offer a variety of different services that will keep your vehicle in top condition. We use the latest technology to provide high-quality service and have the best trained team to give you the satisfaction and trust that your vehicle will look the same pre-accident. <a href="">Learn more...</a></p>
					</div>
					<div className="foot_links">
						<h3>QUICK LINKS</h3>
						<ul>
							<li><a href="#">Home </a></li>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Our Team</a></li>
							<li><a href="#">Qualifications</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Major & Minor Collision</a></li>
							<li><a href="#">Paintless Dent Repair</a></li>
							<li><a href="#">Paint Matching</a></li>
							<li><a href="#">Auto Painting</a></li>
							<li><a href="#">Dent & Scratch Repair</a></li>
							<li><a href="#">Window Replacements</a></li>
							<li><a href="#">Auto Restoration</a></li>
							<li><a href="#">Structural Body Parts Repair</a></li>
							<li><a href="#">Graphics Removal</a></li>
							<li><a href="#">Frame Straightening</a></li>
							<li><a href="#">Washing & Detailing</a></li>
							<li><a href="#">Insurance Claims Assistance</a></li>
							<li><a href="#">Rental Car Assistance</a></li>
							<li><a href="#">Towing Assistance</a></li>
							<li><a href="#">Location </a></li>
							<li><a href="#">Testimonials</a></li>
							<li><a href="#">Gallery </a></li>
							<li><a href="#">Estimate</a></li>
							<li><a href="#">FAQs</a></li>
							<li><a href="#">Contact Us </a></li>
							<li><a href="#">Blog</a></li>
						</ul>
					</div>
					<div className="foot_conatct">
						<h3>CONTACT US</h3>
						<div className="cont_detail">
							<span><img src="images/location_icon.png" alt=""/></span>
							<p>2912 Arthur Kill Rd.<br/> Staten Island, NY 10309<br /> Office: <a href="tel:718.966.8900">718.966.8900</a></p>
						</div>
						<div className="cont_detail">
							<span><img src="images/message_icon.png" alt=""/></span>
							<a href="mailto:admin@straightlinecollision.com">admin@straightlinecollision.com</a>
						</div>
						<div className="cont_detail">
							<span><img src="images/web_icon.png" alt=""/></span>
							<a href="" target="_blank">straightlinecollision.com</a>
						</div>
					</div>
				</div>
			</div>
			<div className="copy_right">
				<div className="container">
					<div className="foot_social_icon">
						<a href="" className="fab fa-facebook-f"></a>
						<a href="" className="fab fa-linkedin-in"></a>
						<a href="" className="fab fa-twitter"></a>
						<a href="" className="fab fa-yelp"></a>
						<a href="" className="fab fa-pinterest-p"></a>
						<a href="" className="fab fa-google-plus-g"></a>
						<a href="" className="fab fa-youtube"></a>
						<a href="" className="fab fa-instagram"></a>
					</div>
					<p>Copyright © Straightline Collision. All rights reserved. Designed by <a href="http://btobautomotive.com/" target="_blank">B2B Automotive</a>.</p>
				</div>
			</div>
			</footer>
		)
	}
}

export default Footer