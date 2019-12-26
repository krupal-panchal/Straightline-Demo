import React, { Component } from 'react'
import PromiseImg from './promise_bg.jpg'

var PromiseBg = {
	backgroundImage: `url(${PromiseImg})`
}

class Home extends Component{

	constructor(props) {
		super(props)
		this.state = {
			projects: []
		}
	}
	componentDidMount() {
		let projectsURL = "http://straightline.ssdev/wp-json/wp/v2/service?per_page=100"
		fetch(projectsURL)
			.then(response => response.json())
			.then(response => {
				this.setState({
					projects: response
				})
			})
	}
	
	render(){
		return(
			<div>

				<section className="banner">
		            <div className="home-banner">
		                <div className="item">
		                    <span className="banner-img"><img src="images/slide1.jpg" alt=""/></span>
		                    <div className="container">
		                        <div className="banner-cap">
		                            <div className="banner-title">
										<h1>WE KNOW HOW <em>IMPORTANT</em> <strong>YOUR VEHICLE IS TO YOU</strong></h1>
									   <p>and that is why we offer a variety of different services</p>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="item">
		                    <span className="banner-img"><img src="images/slide2.jpg" alt=""/></span>
		                    <div className="container">
		                        <div className="banner-cap">
		                            <div className="banner-title">
										<h1>WE KNOW HOW <em>IMPORTANT</em> <strong>YOUR VEHICLE IS TO YOU</strong></h1>
									   <p>and that is why we offer a variety of different services</p>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="item">
		                    <span className="banner-img"><img src="images/slide3.jpg" alt=""/></span>
		                    <div className="container">
		                        <div className="banner-cap">
		                            <div className="banner-title">
										<h1>WE KNOW HOW <em>IMPORTANT</em> <strong>YOUR VEHICLE IS TO YOU</strong></h1>
									   <p>and that is why we offer a variety of different services</p>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="item">
		                    <span className="banner-img"><img src="images/slide4.jpg" alt=""/></span>
		                    <div className="container">
		                        <div className="banner-cap">
		                            <div className="banner-title">
										<h1>WE KNOW HOW <em>IMPORTANT</em> <strong>YOUR VEHICLE IS TO YOU</strong></h1>
									   <p>and that is why we offer a variety of different services</p>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		                <div className="item">
		                    <span className="banner-img"><img src="images/slide5.jpg" alt=""/></span>
		                    <div className="container">
		                        <div className="banner-cap">
		                            <div className="banner-title">
										<h1>WE KNOW HOW <em>IMPORTANT</em> <strong>YOUR VEHICLE IS TO YOU</strong></h1>
									   <p>and that is why we offer a variety of different services</p>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>

		        <section className="wc_sec">
		            <div className="container">
		                <h2>LOOKING FOR A COLLISION SHOP YOU CAN TRUST?</h2>
		                <h3>Straightline Collision is Here to Help.</h3>
		                <hr/>
		                <div className="wc_bottom">
		                	<h5>We are committed to our customers and focus on serving them with honesty, quality, and value.</h5>
		                	<p>We know how important your vehicle is to you and that is why we offer a variety of different services that will keep your vehicle in top condition. We use the latest technology to provide high-quality service and have  the best trained team to give you the satisfaction and trust that your vehicle will look the same pre-accident.</p>
		                	<p>Not only do we make repairs we also offer many preventative maintenance options. It’s a convenient and recommended way to keep your car healthy and long lasting. From front bumper to rear bumper, we’ve got you covered. Customizations are also available. We know what we’re doing, and we’re dedicated to keeping you safe on the road!</p>
		                </div>
		            </div>
		        </section>

		        <section className="logo_slider_sec">
		        	<div className="container">
		        		<div className="logo_slider">
		        			<div className="item">
		        				<img src="images/l1.png" alt=""/>
		        			</div>
		        			<div className="item">
		        				<img src="images/l2.png" alt=""/>
		        			</div>
		        			<div className="item">
		        				<img src="images/l3.png" alt=""/>
		        			</div>
		        			<div className="item">
		        				<img src="images/l4.png" alt=""/>
		        			</div>
		        			<div className="item">
		        				<img src="images/l5.png" alt=""/>
		        			</div>
		        			<div className="item">
		        				<img src="images/l6.png" alt=""/>
		        			</div>
		        			<div className="item">
		        				<img src="images/l7.png" alt=""/>
		        			</div>
		        			<div className="item">
		        				<img src="images/l8.png" alt=""/>
		        			</div>
		        			<div className="item">
		        				<img src="images/l9.png" alt=""/>
		        			</div>
		        			<div className="item">
		        				<img src="images/l4.png" alt=""/>
		        			</div>
		        		</div>
		        	</div>
		        </section>

	            <section className="home_service">
		        	<div className="container">
		        		<h2>SERVICES</h2>
		        		<h5>Whether your automobile has been in a fender bender or a head on collision Straightline can handle the job.</h5>
						<p>We can take care of anything from frame straightening, to scratch and dent removal, to Window replacement, to a fresh coat of paint or complete vehicle restoration. With over 20 years of experience you can rest assured that your car, truck, SUV, van, is in good hands. Our family based team will take care of every detail to ensure your complete satisfaction and that your experience with Straightline is a positive one. We are here to serve you and answer any questions you may have.</p>
						<div className="service_wrap">
							<a href="#" className="service_item">
								<img src="images/service1.jpg" alt=""/>
								<div className="service_title">
									<h4>Major & Minor<br /> Collision</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service2.jpg" alt=""/>
								<div className="service_title">
									<h4>Auto Body<br /> Repair</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service3.jpg" alt=""/>
								<div className="service_title">
									<h4>paint<br /> matching</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service4.jpg" alt=""/>
								<div className="service_title">
									<h4>Auto<br /> painting</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service5.jpg" alt=""/>
								<div className="service_title">
									<h4>Dent & Scratch<br /> Repair</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service6.jpg" alt=""/>
								<div className="service_title">
									<h4>Paintless Dent<br /> Repair</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service7.jpg" alt=""/>
								<div className="service_title">
									<h4>Window<br /> Replacements</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service8.jpg" alt=""/>
								<div className="service_title">
									<h4>Auto<br /> Restoration</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service9.jpg" alt=""/>
								<div className="service_title">
									<h4>Structural<br /> Body Parts<br /> Repair</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service10.jpg" alt=""/>
								<div className="service_title">
									<h4>Graphics<br /> Removal</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service11.jpg" alt=""/>
								<div className="service_title">
									<h4>Frame<br /> Straightening</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service12.jpg" alt=""/>
								<div className="service_title">
									<h4>Washing & <br />Detailing</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service13.jpg" alt=""/>
								<div className="service_title">
									<h4>Insurance<br /> Claims<br /> Assistance</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service14.jpg" alt=""/>
								<div className="service_title">
									<h4>Rental Car<br /> Assistance</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item">
								<img src="images/service15.jpg" alt=""/>
								<div className="service_title">
									<h4>Towing<br /> Assistance</h4>
									<img src="images/next_icon.png" alt="" />
								</div>
							</a>
							<a href="#" className="service_item ser_sche">
								<div className="service_title">
									<h4>SCHEDULE AN<br /> APPOINTMENT</h4>
									<span>Contact Us Now</span>
								</div>
							</a>
						</div>
					</div>
	       		</section>

				<section className="promise_sec" style={PromiseBg}>
					<div className="container">
						<p><strong>We promise</strong> to always provide value and outstanding service and to deliver<br /> your car to you looking just as it did pre-accident as fast and efficiently as possible.</p>
						<div className="row">
							<div className="col-md-4">
								<h3>RELIABILTY</h3>
								<p>At Straightline Collision we know your vehicle and your time is important; which is why your car is always the first priority and is handled with the utmost care. </p>
							</div>
							<div className="col-md-4">
								<h3>TRUST</h3>
								<p>We know an accident can be frustrating and stressful and the last thing you need to be thinking about is being able to trust the people handling your repairs. </p>
							</div>
							<div className="col-md-4">
								<h3>EXPERIENCE</h3>
								<p>Straightline Collision is a well known family owned auto body shop and has been operating and expanding over the last 20 years.</p>
							</div>
						</div>
					</div>
				</section>

				<section className="testimonial_sec">
					<div className="container">
						<h2>testimonials</h2>
						<img src="images/strars.png" alt="" className="star_icon"/>
						<p>At Straightline Collision we care about what our customers think. If you would like to give us a review. Please visit our <a href="#" target="_blank">Google</a>, <a href="#" target="_blank">Yelp</a>, <a href="#" target="_blank">Facebook</a><br /> page or <a href="#">Contact Us</a>. We want to hear from you! We are here to serve you and answer any questions you may have.</p>
						<div className="home_testi_slider">
							<div className="item">
								<p>“I've used Straightline a few times and both times I was very happy. They are quick and they keep you updated with pictures of your car. I highly recommend Straightline for anyone who needs a body shop, you won't be disappointed. ” <span> - Michael Esposito <strong>5-STARS</strong></span></p>
							</div>
							<div className="item">
								<p>“I've used Straightline a few times and both times I was very happy. They are quick and they keep you updated with pictures of your car. I highly recommend Straightline for anyone who needs a body shop, you won't be disappointed. ” <span> - Michael Esposito <strong>5-STARS</strong></span></p>
							</div>
						</div>
					</div>
				</section>

				<section className="our_gallery">
					<h2>Our Gallery</h2>
					<div className="gallery_slider">
						<div className="item">
							<a href="images/g1.jpg" data-fancybox="gallery">
								<img src="images/g1.jpg" alt="" />
								<div className="gallery_overlay">
									<p>+</p>
								</div>
							</a>
						</div>
						<div className="item">
							<a href="images/g2.jpg" data-fancybox="gallery">
								<img src="images/g2.jpg" alt="" />
								<div className="gallery_overlay">
									<p>+</p>
								</div>
							</a>
						</div>
						<div className="item">
							<a href="images/g3.jpg" data-fancybox="gallery">
								<img src="images/g3.jpg" alt="" />
								<div className="gallery_overlay">
									<p>+</p>
								</div>
							</a>
						</div>
						<div className="item">
							<a href="images/g4.jpg" data-fancybox="gallery">
								<img src="images/g4.jpg" alt="" />
								<div className="gallery_overlay">
									<p>+</p>
								</div>
							</a>
						</div>
						<div className="item">
							<a href="images/g3.jpg" data-fancybox="gallery">
								<img src="images/g3.jpg" alt="" />
								<div className="gallery_overlay">
									<p>+</p>
								</div>
							</a>
						</div>
					</div>
					<div className="container">
						<a href="#" className="full_gall">View Full Gallery</a>
						<hr />
					</div>
				</section>

				<section className="home_location">
			    	<div className="container">
						<h2>Straightline Collision Location</h2>
						<p>2912 Arthur Kill Rd, Staten Island, NY 10309<br/><strong>Phone: <a href="tel:718-966-8900">718-966-8900</a></strong></p>
					</div>
					<div className="home_location_map">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.786954439251!2d-74.23098878429104!3d40.546295755672624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b52f44e50fef%3A0x571e0433dc3bdd87!2s2912+Arthur+Kill+Rd%2C+Staten+Island%2C+NY+10309%2C+USA!5e0!3m2!1sen!2sin!4v1560336174939!5m2!1sen!2sin" width="600" height="450"></iframe>
					</div>
			    </section>

			    <div className="signup_newsletter">
					<div className="container">
						<p>GET THE LATEST NEWS AND EVENTS! SIGN-UP FOR OUR NEWSLETTER</p>
						<div className="news_form">
							<form>
								<input type="submit" value="Sign up" />
								<input type="email"  placeholder="Email Address"/>
							</form>
						</div>
					</div>
				</div>

       		</div>
		)
	}
}

export default Home